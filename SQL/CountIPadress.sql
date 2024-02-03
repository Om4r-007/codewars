SELECT id , last::inet - first::inet as ips_between 
FROM ip_addresses;