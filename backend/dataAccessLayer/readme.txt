================ STEPS ==================
1. INSTALL mysql server:
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

STEP2 ========== START Mysql inside your wsl LOCAL HOST =============
- run this in a separate terminal: sudo /etc/init.d/mysql start

STEP3,4,5,6 =========================================================
- run file backend/dataAccessLayer/mySQLQueries/initcampusteatsdb.sql
=====================================================================
ANY HELP WITH SQL:
Please go to: https://devhints.io/mysql
