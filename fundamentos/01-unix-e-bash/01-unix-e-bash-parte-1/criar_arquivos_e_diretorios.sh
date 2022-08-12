mkdir unix_trybe && cd unix_trybe
touch trybe.txt > trybe_backup.txt
mv trybe.txt trybe_renomeado.txt
mkdir backup backup2
mv trybe_backup.txt backup2
rmdir backup
mv backup2 backup
pwd && ls -la
rm -rf backup
clear
