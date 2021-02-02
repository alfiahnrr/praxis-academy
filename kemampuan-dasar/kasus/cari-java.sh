1. Buka Notepad.
2. Tulis script dibawah ini.
    param ( [string]$SourceExe, [string]$DestinationPath )
    $WshShell = New-Object -comObject WScript.Shell
    $Shortcut = $WshShell.CreateShortcut($SourceExe)
    $Shortcut.TargetPath = $DestinationPath
    $Shortcut.Save() 
3. Save dengan nama yang mudah (karena nantinya akan digunakan pada perintah di PowerShell), sebut saja Set-Shortcut dan berikan akhiran .ps1.
4. Pindahkan script ke direktori sistem (C:\Windows\System32). Hal ini agar kamu dapat mengeksekusi perintah nircmd langsung tanpa perlu berpindah directory PowerShell.
5. Buka PowerShell as Administrator.
6. (Opsional) Masukan perintah dibawah ini agar PowerShell dapat menjalankan script. Lalu ketikan A.
7. Set-ExecutionPolicy RemoteSigned
    Berikut format sintaks yang dimasukan untuk membuat shortcut.
    Set-ShortCut [Tujuan shortcut] [Target file atau folder]
    Misalnya jika ingin membuat shortcut terhadap aplikasi Calculator. Kamu bisa memasukan perintah berikut.
    Set-Shortcut "C:\Users\kikiaa\Desktop\Kalkulator.lnk" "C:\Windows\System32\calc.exe"
8. Done.
9. Setelah proses selesai, maka akan terbuat sebuah shortcut baru sesuai dengan nama aplikasi yang kamu buat.
