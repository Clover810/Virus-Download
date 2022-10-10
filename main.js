function exportfile() {

let x = window.confirm("本当にウイルスをダウンロードしますか？");
if (x == true) {
// Blobオブジェクトを作成する
const blob = new Blob(['X5O!P%@AP[4\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*'],{type:"text/plain"});

// HTMLのa要素を生成
const link = document.createElement('a');

// BlobオブジェクトをURLに変換
link.href = URL.createObjectURL(blob);

// ファイル名を指定する
link.download = 'Virus.txt';

// a要素をクリックする処理を行う
link.click();
}
}