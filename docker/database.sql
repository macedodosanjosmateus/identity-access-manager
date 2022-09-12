CREATE DATABASE IF NOT EXISTS identity_access_manager;
CREATE USER 'iam'@'%' IDENTIFIED BY 'Secret*123';
GRANT ALL ON identity_access_manager.* TO 'iam'@'%' WITH GRANT OPTION;