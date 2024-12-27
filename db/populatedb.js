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
 './public/AE1500WH-1A.jpg'
 
 ),

('Watch',
'Casio W800H-1 Unisex Black Digital Watch with Black Band',
'CASIO',
'W800H-1',
'Matte Black Resin Case and Bezel and Band. Resin Glass, 100-meter water resistance, Dual time - 1/100-second stopwatch - Multi-function alarm - Full auto-calendar - LED backlight, Approx. battery life of 10 years',
'https://www.amazon.com.au/Casio-W-800H-1AV-Unisex-Digital-Sports/dp/B001ZYD23C/ref=pd_ci_mcx_pspc_dp_d_2_i_0?pd_rd_w=hYLtp&content-id=amzn1.sym.c9d8026d-7c0e-4380-bf9e-ee6dc4550161&pf_rd_p=c9d8026d-7c0e-4380-bf9e-ee6dc4550161&pf_rd_r=0X95J184FQB0JW1GRDKE&pd_rd_wg=uH4rs&pd_rd_r=1a23fcac-e0b0-48a6-86e5-31aad938cb4e',
'./public/CASIO W800H-1.jpg'
 ),

(
 'Watch',
 'Casio Mens G-Shock Quartz Resin Sport Watch',
 'CASIO',
 'DW-9052-1VDR (G091)',
 'It Is Shock Resistant, 200 Meter Water Resistant, El Backlight With Afterglow, It Has Daily Alarm',
 'https://www.amazon.com.au/Casio-G-Shock-Black-Digital-Dw9052-1/dp/B000GAYQLI/ref=pd_ci_mcx_pspc_dp_d_2_i_0?pd_rd_w=ZGnLm&content-id=amzn1.sym.c9d8026d-7c0e-4380-bf9e-ee6dc4550161&pf_rd_p=c9d8026d-7c0e-4380-bf9e-ee6dc4550161&pf_rd_r=GTX97QB24KHYVFST26X4&pd_rd_wg=UnKBT&pd_rd_r=682d8674-892f-4f03-9167-cc2947d2bda7',
 './public/DW-9052-1VDR.jpg'

),
(
'Phone',
'Google Pixel 9 Pro 128gb Hazel',
'Google',
'Pixel 9 Pro 128gb Hazel',
' Unlocked for All Carriers, Screen size: 6.3 Inches, Capacity:128Gb',
'https://www.amazon.com.au/dp/B0D8V3NTJH/ref=sr_aod_dp_img',
'./public/Pixel 9 Pro.jpg'
),

(
'Phone',
'Samsung Galaxy S24 Ultra AI Smartphone, 12GB RAM 512GB, Titanium Grey',
'Samsung',
'Galaxy S24 Ultra',
'Leap into a new era of smartphone technology on the new Galaxy S24 Series. Do more effortlessly with AI-assisted features including Live Translate, Photo Assist and Note Assist.',
'https://www.amazon.com.au/dp/B0CQM4R6RR?ref=emc_p_m_5_i_atc&th=1',
'./public/Galaxy S24 Ultra.jpg'
),
(
'Phone',
'Moto g85 5G - Urban Grey',
'Motorola',
'Moto g85 5G',
'Stunning endless edge design, Cinematic 6.7 display + Dolby Atmos sound,
    Moto Secure and fingerprint on display',
'https://www.amazon.com.au/gp/product/B0DB1HFNZ4/ref=sw_img_1?smid=ANEGB3WVEVKZB&psc=1',
'./public/Moto g85 5G.jpg'
);
`;

async function main() {
  console.log("Seeding data to database.....");

  const client = new Client({
    connectionString: `${process.env.URI_LOCAL_TESTING}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Database Populated Successfully !");
}

main();
