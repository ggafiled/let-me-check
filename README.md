# Google Apps Script Development Project Structure💯

# Let Me Check (ระบบแชทบอท)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger) |

ระบบแชทบอทที่จะช่วยให้คุณเช็คอินเข้าพื้นที่อัตโนมัติ บนแพลตฟอร์ม ไทยชนะ ได้อย่างง่ายดาย.

## Pre-process

ทำการเพิ่ม Property เพื่อเก็บค่าที่จะใช้ภายในโปรเจ็ค ดังนี้

| Property                 | ความหมาย                                     | ค่าที่เก็บ                                                                                                                                       |
| ------------------------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| LINE_MESSAGE_REPLY_URL   | ลิงค์สำหรับตอบกลับข้อความไปยังไลน์           | https://api.line.me/v2/bot/message/reply                                                                                                         |
| LINE_NOTIFY_URL          | ลิงค์สำหรับส่ง notify เข้ากลุ่ม              | https://notify-api.line.me/api/notify                                                                                                            |
| GOOGLE_SHEET_ID          | ไอดีของชีท                                   | นำมาจากลิงค์ที่หน้าโปรเจ็ค google sheet <img src="https://github.com/ggafiled/googlesheet_appscript_project_list/blob/master/img/expand-08.jpg"> |
| LINE_NOTIFY_TOKEN        | โทเคนของ Line notify                         | ใส่ค่าว่าง หรือ หากต้องการให้ทำการสร้างได้จาก [ลิงค์นี้](https://notify-bot.line.me/th/)                                                         |
| LINE_CHANEL_ACCESS_TOKEN | โทเคนสำหรับให้บอทใช้ส่งข้อความกลับไปยังกลุ่ม | ได้มาจากขั้นตอนที่ `4.                                                                                                                           |

## Installation

ทำการโหลดไฟล์โค้ดนี้ลงเครื่อง ด้วยคำสั่ง

````node
git clone https://github.com/ggafiled/let-me-check.git

// จากนั้นเข้าไปยังโฟลเดอร์โปรเจ็ค
cd googlesheet_appscript_project_list

// และติดตั้ง Library ที่จำเป็น
npm i -g @google/clasp
npm i

// เสร็จขั้นตอนข้างบนแล้วให้ทำการ Login เข้า Account Google ของเราเพื่อให้สิทธิ์ในการอัพโค้ดขึ้นคลาว์
clasp login

// หลังจากนั้นเปิดการอนุญาตอัพโค้ดที่ลิงค์นี้
https://script.google.com/home/usersettings


ที่ไฟล์ `html .clasp.json ` กรอกรหัสสคริปต์
หาได้จาก ![Expand](https://github.com/ggafiled/googlesheet_appscript_project_list/blob/master/img/expand-09.jpg)

```json5
{
  scriptId: 'นำรหัสสคริปต์ของโปรเจ็คเรามาใส่ตรงนี้',
  rootDir: './dist',
}
````

หลังจากตั้งค่าสิ่งที่ต้องการทั้งหมดแล้วให้ทำการอัพโค้ดขึ้น app script cloud ด้วยคำสั่ง

```node
npm install
npm run deploy:prod

```

# Copyright 🏛

[MIT](https://choosealicense.com/licenses/mit/)
