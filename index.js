function welcome() {
    console.clear();
    console.log('=================================================================================================================');
    console.log('= Your Node JS Container has been setup. You may now upload your files using SFTP or the web based file manager =');
    console.log('=================================================================================================================');
}
welcome();
setInterval(welcome, 30000);
