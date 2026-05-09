const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: '宠爱康复中心服务正常运行' });
});

app.listen(PORT, () => {
    console.log(`宠爱康复中心服务已启动: http://localhost:${PORT}`);
});