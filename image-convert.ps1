Set-Location './src/assets'
Get-ChildItem -Recurse -Filter *.webp | Remove-Item -Force
Get-ChildItem -Recurse -Filter *.png | ForEach-Object { & 'C:\Program Files\WebP\bin\cwebp.exe' $_.FullName -o "$($_.DirectoryName)\$($_.BaseName).webp" }
Get-ChildItem -Recurse -Filter *.jpg | ForEach-Object { & 'C:\Program Files\WebP\bin\cwebp.exe' $_.FullName -o "$($_.DirectoryName)\$($_.BaseName).webp" }
Set-Location '../../'