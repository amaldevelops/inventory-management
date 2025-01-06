#! /usr/bin/env node

const { Client } = require("pg");

require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS Product_Information(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
Category VARCHAR(300),
Item_Name VARCHAR(1000),
Manufacturer VARCHAR(300),
Model_No VARCHAR (300),
Product_Description VARCHAR (2000),
External_Product_URL VARCHAR (2000),
Image_URL VARCHAR (500)
);

INSERT INTO Product_Information(Category,Item_Name,Manufacturer,Model_No,Product_Description,External_Product_URL,Image_URL )
VALUES
(
'Watch',
'Casio AE1500WH-1A Unisex Black Digital Watch with Black Band ',
'CASIO',
'AE1500WH-1A',
'Daily Alarm, 100m Water Resistant, Black Resin, LED Backlight',
 'https://www.amazon.com.au/Casio-AE-1500WH-1AVDF-AE1500WH-1A-Black/dp/B0994Q7VJB/ref=pd_ci_mcx_pspc_dp_d_2_i_0?pd_rd_w=hwttO&content-id=amzn1.sym.c9d8026d-7c0e-4380-bf9e-ee6dc4550161&pf_rd_p=c9d8026d-7c0e-4380-bf9e-ee6dc4550161&pf_rd_r=VNRTJ7EN64H1G6RQJYY9&pd_rd_wg=LVBSO&pd_rd_r=3fc8baac-2f3b-4bac-88c1-1230a047612f',
 '/images/AE1500WH-1A.jpg'
 
 ),

('Watch',
'Casio W800H-1 Unisex Black Digital Watch with Black Band',
'CASIO',
'W800H-1',
'Matte Black Resin Case and Bezel and Band. Resin Glass, 100-meter water resistance, Dual time - 1/100-second stopwatch - Multi-function alarm - Full auto-calendar - LED backlight, Approx. battery life of 10 years',
'https://www.amazon.com.au/Casio-W-800H-1AV-Unisex-Digital-Sports/dp/B001ZYD23C/ref=pd_ci_mcx_pspc_dp_d_2_i_0?pd_rd_w=hYLtp&content-id=amzn1.sym.c9d8026d-7c0e-4380-bf9e-ee6dc4550161&pf_rd_p=c9d8026d-7c0e-4380-bf9e-ee6dc4550161&pf_rd_r=0X95J184FQB0JW1GRDKE&pd_rd_wg=uH4rs&pd_rd_r=1a23fcac-e0b0-48a6-86e5-31aad938cb4e',
'/images/CASIO-W800H-1.jpg'
 ),

(
 'Watch',
 'Casio Mens G-Shock Quartz Resin Sport Watch',
 'CASIO',
 'DW-9052-1VDR (G091)',
 'It Is Shock Resistant, 200 Meter Water Resistant, El Backlight With Afterglow, It Has Daily Alarm',
 'https://www.amazon.com.au/Casio-G-Shock-Black-Digital-Dw9052-1/dp/B000GAYQLI/ref=pd_ci_mcx_pspc_dp_d_2_i_0?pd_rd_w=ZGnLm&content-id=amzn1.sym.c9d8026d-7c0e-4380-bf9e-ee6dc4550161&pf_rd_p=c9d8026d-7c0e-4380-bf9e-ee6dc4550161&pf_rd_r=GTX97QB24KHYVFST26X4&pd_rd_wg=UnKBT&pd_rd_r=682d8674-892f-4f03-9167-cc2947d2bda7',
 '/images/DW-9052-1VDR.jpg'

),
(
'Phone',
'Google Pixel 9 Pro 128gb Hazel',
'Google',
'Pixel 9 Pro 128gb Hazel',
' Unlocked for All Carriers, Screen size: 6.3 Inches, Capacity:128Gb',
'https://www.amazon.com.au/dp/B0D8V3NTJH/ref=sr_aod_dp_img',
'/images/Pixel-9-Pro.jpg'
),

(
'Phone',
'Samsung Galaxy S24 Ultra AI Smartphone, 12GB RAM 512GB, Titanium Grey',
'Samsung',
'Galaxy S24 Ultra',
'Leap into a new era of smartphone technology on the new Galaxy S24 Series. Do more effortlessly with AI-assisted features including Live Translate, Photo Assist and Note Assist.',
'https://www.amazon.com.au/dp/B0CQM4R6RR?ref=emc_p_m_5_i_atc&th=1',
'/images/Galaxy-S24-Ultra.jpg'
),
(
'Phone',
'Moto g85 5G - Urban Grey',
'Motorola',
'Moto g85 5G',
'Stunning endless edge design, Cinematic 6.7 display + Dolby Atmos sound, Moto Secure and fingerprint on display',
'https://www.amazon.com.au/gp/product/B0DB1HFNZ4/ref=sw_img_1?smid=ANEGB3WVEVKZB&psc=1',
'/images/Moto-g85-5G.jpg'
);

CREATE TABLE IF NOT EXISTS Product_Inventory(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
product_Id INTEGER NOT NULL,
Quantity INT NOT NULL,
 Price DECIMAL(10,2) NOT NULL, 
 Customer_Reviews VARCHAR (5000),
 FOREIGN KEY (product_Id) REFERENCES Product_Information(id) ON DELETE CASCADE
);

INSERT INTO Product_Inventory(Product_Id, Quantity,Price,Customer_Reviews)
VALUES
(1,44,119.00,'Craig: Excellent watch... perfect choice for me... love it'),
(2,150,99.95,'BG: I purchased this watch to replace a W800H that I stupidly broke trying to force the strap pins out. I worn the first one for over 10 years as my surf watch. I smashed it into reefs in Indonesia, I had it in frigid icy cold oceans at the southern tip of New Zealand and extreme heat in the south pacific surfing heaving slabs.. it never, ever missed a beat. I am astounded at the beating this watch took over that decade. Its still sitting next to my computer, strapless, faithfully telling the time while the new one is on my wrist. Thanks Casio!'
),
(3,20,189.00,'I have had a couple of smart watches that really do not like the tradie work I do, being knocked around. Went for the Casio because they are always reliable, simple, easy. This one no different to the others I have had. Great service and price, delivered in record time.'
),
(4,8,1599.00,' One of the best phones'
),
(5,15,1849.00,'I love photography, and so when I upgrade my phone, the most important thing for me is the camera. Love the options in the default camera app, and really enjoy the AI features that are presented in this phone. To take full advantage of the AI capabilities, you do need to use Samsungs keyboard, phone app, SMS, etc, however Googles Gemini fits right in there if you prefer their apps. Great phone, solid battery life. No complaints from me.'
),
(6,50,399.00,'Honest much better than I expected, for a temporary phone, I am in love, might keep it for a while until I save up!'
);`;

async function main() {
  console.log("Seeding data to database.....");
  console.log(process.env.URI_PRODUCTION);

  const client = new Client({
    connectionString: `${process.env.URI_PRODUCTION}`,
    ssl: {
      rejectUnauthorized: false // Required for some cloud-hosted databases
    }
  });

  // const client = new Client({
  //   host: process.env.DATABASE_HOST,
  //   database: process.env.DATABASE_NAME,
  //   username: process.env.DATABASE_USER,
  //   password: process.env.DATABASE_PASSWORD,
  //   ssl: 'require',
  // })



  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Database Populated Successfully !");
}

main();
