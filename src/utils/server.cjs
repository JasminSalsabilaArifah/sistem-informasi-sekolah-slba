/* eslint-disable no-undef */
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const salt = 10;
const app = express();
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'slbum'
})

app.use(express.json({}));
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["POST", "GET", "PUT", "DELETE"],
  credentials: true,
}));
app.use(cookieParser())
app.listen(1962, () => {
  console.log(`Server is running on port `);
});
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to the database.');
});



// --- AUTENTIKASI --- //
app.post('/register',(req, res)=>{
  const sql = "INSERT INTO user (nama, username, password) VALUES (?)";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash)=>{
      if(err) return res.json({Error: "Error for hassing password"});
      const values = [
        req.body.name,
        req.body.username,
        hash
    ]
    db.query(sql, [values], (err, res)=>{
      if(err){
        console.log(err);
        return res.json({Error: "Data eror server"});
      }
      return res.json({Status: "Success"});
    })
  })
})
app.post('/login',(req, res)=>{
    const sql = "SELECT * FROM user WHERE username= ?";
    db.query(sql, [req.body.username], (err, data)=>{
      if(err){
        return res.json({Error: "Login error in server"});
      }
      if(data.length > 0){
        bcrypt.compare(req.body.password.toString(), data[0].password, (err, response)=>{
          if(err) return res.json({Error: "Password compare error"});
          if(response){
            const nama = data[0].nama;
            const token = jwt.sign({nama}, "jwt-secret-key", {expiresIn: '1d'});
            res.cookie('token', token);
            return res.json({Status: "Success"})
          }else{
            return res.json({Error: "Password not matched"})
          }
        })
      }else{
        return res.json({Error: "Email tidak ada"}) 
      }
    })
})
const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
      return res.json({Error: "no atentif"});
    }else{
      jwt.verify(token, "jwt-secret-key", (err, decoded) => {
        if(err){
          return res.json({Error: "Token bermasalah"});
        }else{
          req.nama = decoded.nama;

          next();
        }
      })
    }
}
const getProfile = (req, res, next) => {
  const sql = "SELECT * FROM user WHERE nama = ?";
  db.query(sql, [req.nama], (err, data) => {
      if (err) return res.json(err);
      req.profileData = data; 
      next(); 
  });
};
app.get('/', verifyUser, getProfile, (req, res) => {
    return res.json({Status: "Success", profile: req.profileData })
})
app.get('/logout', (req, res) => {
  res.clearCookie('token');
  return res.json({Status: "Success"})
})



// --- DATA BERANDA --- //
// -- carousel -- //
app.get('/carousel', (req, res) => {
  const query = 'SELECT * FROM carousel';
  db.query(query, (err, results) => {
      if (err) {
          console.error('Error fetching data from MySQL:', err);
          res.status(500).json({ message: 'Internal Server Error' });
      } else {
        const data = results.map(dt => {
          const result = { ...dt };
          if (dt.gambar) {
            result.gambar = Buffer.from(dt.gambar).toString('base64');
          }
          return result;
        });
        res.json(data);
      }
  });
});
// -- beranda -- //
app.get('/beranda', (req, res) => {
  const query = 'SELECT * FROM beranda';
  db.query(query, (err, results) => {
      if (err) {
          console.error('Error fetching data from MySQL:', err);
          res.status(500).json({ message: 'Internal Server Error' });
        } else {
          const data = results.map(dt => {
            const result = { ...dt };
            if (dt.gambar) {
                result.gambar = Buffer.from(dt.gambar).toString('base64');
            }
            return result;
          });
          res.json(data);
        }
  });
});
app.put('/beranda', upload.fields([
  { name: 'imgKepsek', maxCount: 1 },
  { name: 'imgBeranda', maxCount: 1 }
]), (req, res) => {
  const { visi, sambutan } = req.body;
  let query = "UPDATE beranda SET";
  const values = [];
  let imageQuery = "";
  let imageValues = [];

  if (visi) {
    query += " visi = ?";
    values.push(visi);
  }

  if (sambutan) {
    if (values.length) query += ",";
    query += " sambutan = ?";
    values.push(sambutan);
  }

  if (req.files.imgKepsek) {
    if (values.length) query += ",";
    query += " gambar = ?, type = ?";
    values.push(req.files.imgKepsek[0].buffer, req.files.imgKepsek[0].mimetype);
  }

  query += " WHERE id = 1";

  db.query(query, values, (err) => {
    if (err) return res.status(500).send(err);

    if (req.files.imgBeranda) {
      imageQuery = "UPDATE beranda SET gambar = ?, type = ? WHERE id = 2";
      imageValues = [req.files.imgBeranda[0].buffer, req.files.imgBeranda[0].mimetype];

      db.query(imageQuery, imageValues, (err) => {
        if (err) return res.status(500).send(err);
        return res.json({ Status: "Success" });
      });
    } else {
      return res.json({ Status: "Success" });
    }
  });
});
app.put('/misi', (req, res) => {
  const {misi, id} = req.body;
  const query = 'UPDATE misi SET misi = ? WHERE id =?';
  db.query(query, [misi, id], (err, results) => {
    if (err) {
      console.error('Error updating data in MySQL:', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    return res.json({ Status: "Success" });
  });
});
app.get('/misi', (req, res) => {
  const query = 'SELECT * FROM misi';
  db.query(query, (err, results) => {
    if (err) {
        console.error('Error fetching data from MySQL:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});
app.delete('/misi/:id', (req, res) => {
  const id = req.params.id;
  console.log('jjb',id)
  const query = 'DELETE FROM misi WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error inserting data into MySQL:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      return res.json({Status: "Success"});
    }
  });
});
