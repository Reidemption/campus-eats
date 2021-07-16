Document: 
    https://dev.mysql.com/doc/refman/8.0/en/
    https://www.npmjs.com/package/mysql2
Installations:
    https://dev.mysql.com/doc/dev/connector-nodejs/8.0/
================ STEPS ==================
1. INSTALL mysql2 server and mysql library:
2. START Mysql inside your wsl LOCAL HOST 
3. CREATE DATABASE
4. USE DATABASE
5. CREATE TABLES with SCHEMAS
6. INSERT records
=====================================================================

STEP1 ================= INSTALL mysql server: =======================
PLease read this and start from <Secure Mysql Installation> section:
https://medium.com/@alef.duarte/cant-connect-to-local-mysql-server-through-socket-var-run-mysqld-mysqld-sock-155d580f3a06

** Note: If you have problem with mysql, start at the begining!
- at the <Cleaning the Backyard> section,
- the newest configuation file version is: mysql-apt-config_0.8.17-1_all
- please make sure to download the mysql-apt-config_0.8.17-1_all pakage
=> https://www.npmjs.com/package/mysql2

STEP2 ========== START Mysql inside your wsl LOCAL HOST =============
- run this in a separate terminal: 
    sudo /etc/init.d/mysql start
- then:
    sudo mysql

STEP3,4,5,6 =========================================================
- run file backend/dataAccessLayer/mySQLQueries/initcampusteatsdb.sql

=====================================================================
ANY HELP WITH SQL:
Please go to: https://devhints.io/mysql

-For error: 
Error: 
    ER_NOT_SUPPORTED_AUTH_MODE: 
    Client does not support authentication protocol requested by server; consider upgrading MySQL client -- SECOND ANSWER
https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server

==> run this on MysqlServer
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;