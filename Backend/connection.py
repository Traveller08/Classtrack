from passlib.hash import sha512_crypt
password=sha512_crypt.encrypt("pass123")
print(password)