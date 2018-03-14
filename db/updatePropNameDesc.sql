insert into propertyinfo(propertyname, propertydesc, userid)
values($1,$2,$3)
returning * 