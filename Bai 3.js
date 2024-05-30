class SOTIETKIEM {
    constructor(maSo, loaiTietKiem, hoTen, cmnd, ngayMo, soTien) {
        this.maSo = maSo;
        this.loaiTietKiem = loaiTietKiem;
        this.hoTen = hoTen;
        this.cmnd = cmnd;
        this.ngayMo = ngayMo;
        this.soTien = soTien;
    }
}

class QuanLySTK {
    constructor() {
        this.dsSoTietKiem = [];
    }

    addStk(maSo, loaiTietKiem, hoTen, cmnd, ngayMo, soTien) {
        const stk = new SOTIETKIEM(maSo, loaiTietKiem, hoTen, cmnd, ngayMo, soTien);
        this.dsSoTietKiem.push(stk);
    }

    deleteStk(maSo) {
        this.dsSoTietKiem = this.dsSoTietKiem.filter(stk => stk.maSo !== maSo);
    }
}

const quanLyStk = new QuanLySTK();
const stkForm = document.getElementById('stk-form');
const stkTable = document.getElementById('stk-tbody');

function renderStkTable() {
    stkTable.innerHTML = '';
    for (const stk of quanLyStk.dsSoTietKiem) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${stk.maSo}</td>
            <td>${stk.loaiTietKiem}</td>
            <td>${stk.hoTen}</td>
            <td>${stk.cmnd}</td>
            <td>${stk.ngayMo}</td>
            <td>${stk.soTien}</td>
            <td><button class="delete-btn">Xóa</button></td>
        `;
        const deleteBtn = row.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            quanLyStk.deleteStk(stk.maSo);
            renderStkTable();
        });
        stkTable.appendChild(row);
    }
}

stkForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const maSo = document.getElementById('maso').value;
    const loaiTietKiem = document.getElementById('loaitietkiem').value;
    const hoTen = document.getElementById('hoten').value;
    const cmnd = document.getElementById('cmnd').value;
    const ngayMo = document.getElementById('ngaymo').value;
    const soTien = document.getElementById('sotien').value;
    quanLyStk.addStk(maSo, loaiTietKiem, hoTen, cmnd, ngayMo, soTien);
    renderStkTable();
    stkForm.reset();
});

renderStkTable();