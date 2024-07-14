#moving test cases
cp -avr /home/user/Desktop/user_repo/utility_tools/test /home/user/Desktop/user_repo/Certification_Assessment/Frontend/src/app

#executing test cases
cd /home/user/Desktop/user_repo/Certification_Assessment/Frontend && npm test

# moving report to utility_tools
mv -f /home/user/Desktop/user_repo/Certification_Assessment/Frontend/testReport.txt /home/user/Desktop/user_repo/utility_tools

#generating report

cd /home/user/Desktop/user_repo/utility_tools && node examReport.js
mv -f /home/user/Desktop/user_repo/utility_tools/user_output.json /home/user/Desktop/user_repo


#deleting test cases

rm -r /home/user/Desktop/user_repo/Certification_Assessment/Frontend/src/app/test

sleep 40
