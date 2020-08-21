const express = require("express");
var madversiting=require('../models/adversiting.model');
var fun5 = require('../Controllers/function5.controller');
// const moment = require("moment");m
const app = express.Router();
app.get('/', (req, res) => {
    res.redirect('/admin/quanlisanpham');
});
app.get('/admin/quanlisanpham', (req, res) => {
    res.render('./Admin/statistic', {
        page: 'Profile',
        profile: 'active'
    })
});
app.get('/admin/quanlithongtindathang/thanhtoan/:id', (req, res) => {
    fun5.HienThiThanhToan(req, res, req.params.id);
});
//---------------------------------------------------------------
//phần quảng cáo 
app.get('/admin/advertising', (req, res) => {
    res.render('./Admin/advertising/advertising', {
        page: 'Profile',
        profile: 'active'
    })
});
app.get('/admin/advertising/web', (req, res) => {
    
    res.render('./Admin/advertising/advertising', {
        page: 'Profile',
        profile: 'active'
    })
});
app.get('/admin/advertising/users', async (req, res)  => {
var row = await madversiting.allQuangcaoNguoiDung();
for(const i in row)
{
   var tempdate= moment(row[i].NgayGuiQuangCao, "YYYY-MM-DD HH:MM:SS").format("YYYY-MM-DD HH:MM:SS");

   row[i].NgayGuiQuangCao=tempdate;
}

    res.render('./Admin/advertising/Adv_User', {
        page: 'Profile',
        profile: 'active',
        userqc:row
    })
});
//Hết phần quảng cáo
//---------------------------------------------------------------
app.get('/function-4', (req, res) => {
    res.render('./Admin/profile', {
        page: 'Profile',
        profile: 'active'
    })
});
app.get('/function-5', (req, res) => {
    res.render('./Admin/profile', {
        page: 'Profile',
        profile: 'active'
    })
});
module.exports = app;