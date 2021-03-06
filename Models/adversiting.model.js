const db = require("../database/mysql"),
    run = db.errorHandle;
const config = require("../config/default.json");

module.exports = {
        
    allqcwebinfo: async () => {
        try {
            const sql = `select* from HopDongQuangCao,DoiTacQuangCao where DoiTacQuangCao.MaDoiTac=HopDongQuangCao.MaDoiTac;`;
            const rows = await db.load(sql);

            return rows;
        } catch (error) {
            console.log("Error Model: Product: all", error);
        }
    },
    allQuangcaoNguoiDung: async () => {
        try {
            const sql = `select * from QuangCaoNguoiDung,KhachHang where QuangCaoNguoiDung.MaKH=KhachHang.MaKH;`;
            const rows = await db.load(sql);

            return rows;
        } catch (error) {
            console.log("Error Model: Product: all", error);
        }
    },
    allQuangcaoNguoiDungvatenqc: async () => {
        try {
            const sql = `select * from QuangCaoNguoiDung,KhachHang,CacQuangCaoGuiDi where QuangCaoNguoiDung.MaKH=KhachHang.MaKH and QuangCaoNguoiDung.MaQuangCaoGuiDi=CacQuangCaoGuiDi.MaQuangCaoGuiDi ;`;
            const rows = await db.load(sql);

            return rows;
        } catch (error) {
            console.log("Error Model: Product: all", error);
        }
    },
    GetThongQCKH: async (MaKH) => {
        try {
            const sql = `SELECT * FROM QuangCaoNguoiDung,CacQuangCaoGuiDi where MaKH= ${MaKH} and CacQuangCaoGuiDi.MaQuangCaoGuiDi=QuangCaoNguoiDung.MaQuangCaoGuiDi`;
            const rows = await db.load(sql);
            return rows;
        } catch (error) {
            console.log("Error Model: HoaDon: selectOne ", error);
        }
    },
    allLoaiHang: async () => {
        try {
            const sql = `select * from LoaiHang`;
            const rows = await db.load(sql);

            return rows;
        } catch (error) {
            console.log("Error Model: Product: all", error);
        }

    },
    allDoiTac: async () => {
        try {
            const sql = `select * from DoiTacQuangCao`;
            const rows = await db.load(sql);

            return rows;
        } catch (error) {
            console.log("Error Model: Product: all", error);
        }

    },
    allQC: async () => {
        try {
            const sql = `select * from CacQuangCaoGuiDi`;
            const rows = await db.load(sql);

            return rows;
        } catch (error) {
            console.log("Error Model: Product: all", error);
        }

    },
    alluser: async () => {
        try {
            const sql = `select * from KhachHang`;
            const rows = await db.load(sql);

            return rows;
        } catch (error) {
            console.log("Error Model: Product: all", error);
        }

    },
    SelectOneUser: async id => {
        try {
            const sql = `select * from KhachHang where MaKH=${id}`;
            const rows = await db.load(sql);

            return rows;
        } catch (error) {
            console.log("Error Model: Product: all", error);
        }
    },
    Allhopdong: async () => {
        try {
            const sql = `select* from HopDongQuangCao,DoiTacQuangCao,LoaiHang where HopDongQuangCao.MaDoiTac=DoiTacQuangCao.MaDoiTac and HopDongQuangCao.MaLoaiHang=LoaiHang.MaLoaiHang `;
            const rows = await db.load(sql);
            return rows;
        } catch (error) {
            console.log("Error Model: Product: all", error);
        }
    },
    addQC: async entity => {
        const [id, err] = await run(db.add('CacQuangCaoGuiDi', entity));
        if (err) {
            console.log("Error Model: Category: add", err);
            throw err;
        }
        return id;
    },
    addhopdong: async entity => {
        const [id, err] = await run(db.add('HopDongQuangCao', entity));
        if (err) {
            console.log("Error Model: Category: add", err);
            throw err;
        }
        return id;
    },
    adddoitac: async entity => {
        const [id, err] = await run(db.add('DoiTacQuangCao', entity));
        if (err) {
            console.log("Error Model: Category: add", err);
            throw err;
        }
        return id;
    },
    updatehopdong: async entity => {
        const [nr, err] = await run(db.update('HopDongQuangCao', 'MaHopDong', entity));
        if (err) {
            console.log("Error Model: Product: update", err);
            throw err;
        }
        return nr;
    },
    deletehopdong: async id => {
        await run(db.del('HopDongQuangCao','MaHopDong',id));
       
        return true;
    },
    SelectOnehopdong: async id => {
        try {
            const sql = `select * from HopDongQuangCao where MaHopDong=${id}`;
            const rows = await db.load(sql);
            return rows;
        } catch (error) {
            console.log("Error Model: Product: all", error);
        }
    },
    SelectOneQC: async id => {
        try {
            const sql = `select * from CacQuangCaoGuiDi where MaQuangCaoGuiDi=${id}`;
            const rows = await db.load(sql);
            return rows;
        } catch (error) {
            console.log("Error Model: Product: all", error);
        }
    },
    CheckSendQC: async (maQC,MaKH) => {
        try {
            const sql = `select * from QuangCaoNguoiDung where MaQuangCaoGuiDi=${maQC} and MaKH=${MaKH}`;
            const rows = await db.load(sql);
      
            if(rows.length===0)
            {
                return true;
            }
            else{
            return false;}
        } catch (error) {
            console.log("Error Model: Product: all", error);
        }
    },
    addQCchoNguoiDung: async entity => {
        const [id, err] = await run(db.add('QuangCaoNguoiDung', entity));
        if (err) {
            console.log("Error Model: Category: add", err);
            throw err;
        }
        return id;
    },
};