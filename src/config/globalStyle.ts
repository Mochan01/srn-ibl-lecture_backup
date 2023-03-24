import { createGlobalStyle } from "styled-components";
import { createAssetUri } from "../utils";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "UDDigiKyokashoN-M" !important;
  src: url(${createAssetUri("UDDigiKyokashoN-M001.woff")}) format("woff");
  unicode-range: U+20-7e, U+a0-a3, U+a5, U+a7-a8, U+ac, U+b0-b4, U+b6-b7, U+bf,
    U+c4, U+c7, U+d1, U+d6-d7, U+dc, U+df-e2, U+e4, U+e7-ef, U+f1-f4, U+f6-f7,
    U+f9-fc;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M002.woff")}) format("woff");
  unicode-range: U+4edd, U+ff01, U+ff03-ff06, U+ff08-ff0c, U+ff0e-ff3b,
    U+ff3d-ff5d, U+ff61-ff9f, U+ffe3, U+ffe5;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M003.woff")}) format("woff");
  unicode-range: U+3000-3003, U+3005-3015, U+301c, U+3041-3093, U+309b-309e,
    U+30a1-30f6, U+30fb-30fe;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M004.woff")}) format("woff");
  unicode-range: U+401, U+410-44f, U+451, U+2010, U+2015-2016, U+2018-2019,
    U+201c-201d, U+2020-2021, U+2025-2026, U+2030, U+2032-2033, U+203b, U+2103,
    U+212b, U+2190-2193, U+21d2, U+21d4, U+2200, U+2202-2203, U+2207-2208,
    U+220b, U+2212, U+221a, U+221d-221e, U+2220, U+2227-222c, U+2234-2235,
    U+223d, U+2252, U+2260-2261, U+2266-2267, U+226a-226b, U+2282-2283,
    U+2286-2287, U+22a5, U+2312, U+2500-2503, U+250c, U+250f-2510, U+2513-2514,
    U+2517-2518, U+251b-251d, U+2520, U+2523-2525, U+2528, U+252b-252c,
    U+252f-2530, U+2533-2534, U+2537-2538, U+253b-253c, U+253f, U+2542, U+254b,
    U+25a0-25a1, U+25b2-25b3, U+25bc-25bd, U+25c6-25c7, U+25cb, U+25ce-25cf,
    U+25ef, U+2605-2606, U+2640, U+2642, U+266a, U+266d, U+266f;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M005.woff")}) format("woff");
  unicode-range: U+391-3a1, U+3a3-3a9, U+3b1-3c1, U+3c3-3c9, U+2014, U+203e,
    U+20ac, U+2116, U+2121, U+2160-216b, U+2170-217b, U+2211, U+221f, U+2225,
    U+222e, U+22bf, U+2460-2473, U+2600-2603, U+260e, U+261e, U+2776-277e,
    U+301d, U+301f-3020, U+3094-3096, U+30f7-30fa, U+322a-3233, U+3236-3237,
    U+3239, U+3251-325b, U+3299, U+32a4-32a8, U+3303, U+330d, U+3314, U+3318,
    U+3322-3323, U+3326-3327, U+332b, U+3336, U+333b, U+3349-334a, U+334d,
    U+3351, U+3357, U+337b-337e, U+338e-3390, U+339c-339e, U+33a0-33a2,
    U+33a4-33a5, U+33c4, U+33cb, U+33cd, U+ff02, U+ff07, U+ff0d, U+ff3c, U+ff5e,
    U+ffe0-ffe2;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M006.woff")}) format("woff");
  unicode-range: U+2c6, U+2dc, U+213b, U+2474-2490, U+249c-24b5, U+24ea,
    U+261c-261d, U+261f, U+27a1, U+2b05-2b07, U+3004, U+3036, U+3234-3235,
    U+3238, U+323a-3243, U+3291-3294, U+3296, U+3298, U+329d-329e, U+32a9-32b0,
    U+3300, U+3305, U+3315-3316, U+331e, U+332a, U+3331, U+3333, U+3339, U+3342,
    U+3347, U+334e, U+337f, U+3385-3389, U+3396-3398, U+339f, U+33a3, U+33a6,
    U+33b0-33b3, U+33c8, U+33cc, U+33d4, U+ffe4, U+ffe8;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M007.woff")}) format("woff");
  unicode-range: U+4e00, U+4e09-4e0b, U+4e0d, U+4e16, U+4e2d, U+4e3b, U+4e5d,
    U+4e8b-4e8c, U+4e94, U+4eba, U+4eca, U+4ee3, U+4ee5, U+4f1a, U+4f53, U+4f55,
    U+4f5c, U+4f7f, U+4fe1, U+5148, U+5165, U+5168, U+516b-516d, U+5175, U+5185,
    U+51fa, U+5206-5207, U+524d, U+529b, U+52d5, U+5316, U+5341, U+539f, U+53d6,
    U+53e3, U+5408, U+540c-540d, U+5411, U+5473, U+548c, U+54e1, U+554f, U+56db,
    U+56de, U+56fd, U+5730, U+5831, U+5834, U+58f0, U+5909, U+5916, U+591a,
    U+5927, U+5929-592a, U+5973, U+5b50, U+5b66, U+5b89, U+5b9a, U+5b9f, U+5bb6,
    U+5bfe, U+5c0f, U+5c11, U+5c4b, U+5c71, U+5ddd, U+5e73-5e74, U+5ea6, U+5f15,
    U+5f37, U+5f53, U+5f7c, U+5f8c, U+5fc3, U+601d, U+6027, U+60c5, U+610f,
    U+611f, U+6210, U+6226, U+6240, U+624b, U+6301, U+653f, U+6559, U+6570,
    U+6587, U+65b0, U+65b9, U+65e5, U+660e, U+6642, U+66f8, U+6700, U+6708,
    U+6728, U+672c, U+6765, U+6771, U+696d, U+6a5f, U+6b21, U+6b63, U+6b7b,
    U+6c0f, U+6c11, U+6c17, U+6c34, U+6c7a, U+6cbb, U+6cd5, U+6d77, U+7121,
    U+7269, U+73fe, U+7406, U+751f, U+7528, U+7530, U+7537, U+753b, U+754c,
    U+767a, U+7684, U+76ee, U+76f8, U+771f, U+77e5, U+793e, U+795e, U+79c1,
    U+7acb, U+7d4c, U+7d50, U+7f8e, U+8003, U+8005, U+805e, U+81ea, U+884c,
    U+885b, U+8868, U+8981, U+898b, U+89aa, U+8a00, U+8a18, U+8a71, U+8a9e,
    U+8eab, U+8ecd, U+8fd1, U+901a, U+9023, U+9053, U+90ce, U+90e8, U+91cd-91ce,
    U+91d1, U+9577, U+958b, U+9593, U+95a2, U+96c6, U+9762, U+9854, U+98df,
    U+9ad8;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M008.woff")}) format("woff");
  unicode-range: U+4e03, U+4e07, U+4e21, U+4e57, U+4e89, U+4e95, U+4ea4, U+4eac,
    U+4ed5-4ed6, U+4ed8, U+4ef6, U+4f1d, U+4f4f, U+4f9b, U+4fc2, U+4fdd, U+5143,
    U+5149, U+515a, U+5171, U+5186, U+521d, U+5224-5225, U+5229, U+5236, U+52a0,
    U+52a9, U+52d9, U+52dd, U+52e2, U+5317, U+5343, U+534a, U+53cd, U+53d7,
    U+53e4, U+53f0, U+53f3, U+5409, U+544a, U+547c-547d, U+54c1, U+56e3, U+571f,
    U+5728, U+57ce, U+58eb, U+58f2, U+591c, U+592b, U+597d, U+59cb, U+5b58,
    U+5b98, U+5ba4, U+5cf6, U+5e02, U+5e2b, U+5e30, U+5e38, U+5e83, U+5e97,
    U+5f0f, U+5f35, U+5f62, U+5f79, U+5f85, U+5f97, U+5fa1, U+5fc5, U+5fdc,
    U+60aa, U+60f3, U+611b, U+6238, U+6253, U+6307, U+652f, U+653e, U+6599,
    U+65ad, U+65cf, U+65e9, U+6620, U+6709, U+671d, U+671f, U+6751, U+677e,
    U+679c, U+6821, U+683c, U+697d, U+69d8, U+6a29, U+6b66, U+6b69, U+6b73,
    U+6b8b, U+6bba, U+6bcd, U+6c5f, U+6d3b, U+6d41, U+6df1, U+6e08, U+70b9,
    U+7136, U+7236, U+7279, U+72b6, U+7523, U+7531, U+753a, U+756a, U+75c5,
    U+767d-767e, U+76f4, U+7740, U+77f3, U+78ba, U+7a7a, U+7b11, U+7b2c, U+7c73,
    U+7d04, U+7d42, U+7d44, U+7d9a, U+7dcf, U+7dda, U+7f6e, U+7fa9, U+80fd,
    U+8272, U+82e5, U+843d, U+8449, U+85e4, U+8853, U+897f, U+8996, U+89e3,
    U+8a08, U+8a2d, U+8aac-8aad, U+8abf, U+8ad6, U+8b70, U+8cb7, U+8cc7, U+8cea,
    U+8d77, U+8db3, U+8eca, U+8fbc, U+8fd4, U+9001, U+9032, U+904b, U+904e,
    U+9055, U+9078, U+90fd, U+914d, U+9580, U+9662, U+969b, U+96fb, U+97f3,
    U+982d, U+984c, U+98a8, U+9996, U+99ac;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M009.woff")}) format("woff");
  unicode-range: U+4e0e, U+4e45, U+4e4b, U+4e88, U+4ecb, U+4efb, U+4f01, U+4f0a,
    U+4f4d, U+4f50, U+4f8b, U+4fa1, U+4ffa, U+5074, U+5099, U+50cd, U+50cf,
    U+50d5, U+512a, U+518d, U+5199, U+5272, U+533b, U+5357-5358, U+53c2, U+53cb,
    U+53ce, U+53ef, U+53f2, U+53f7, U+541b, U+5546, U+55b6, U+5668, U+56f3,
    U+578b, U+57fa, U+5883, U+5897, U+5931, U+5965, U+59bb, U+59ff, U+5a5a,
    U+5b57, U+5b88, U+5b97, U+5ba2, U+5bae, U+5bb3, U+5bb9, U+5bc4, U+5bdf,
    U+5bfa, U+5c06, U+5c40, U+5c45, U+5ca1, U+5dde, U+5de5-5de6, U+5dee, U+5dfb,
    U+5e9c, U+5ea7, U+5efa, U+5f71, U+5ff5, U+6025, U+606f, U+614b, U+623b,
    U+6280, U+6295, U+629c, U+62bc, U+632f, U+6483, U+6539, U+65c5, U+6625,
    U+666f, U+671b, U+672b, U+6761, U+67fb, U+6839, U+6848, U+69cb, U+6a2a,
    U+6a4b, U+6b4c, U+6b62, U+6bb5, U+6c42, U+6cc9, U+6ce8, U+6d25, U+6d3e,
    U+6d6e, U+6d88, U+6e05, U+6e21, U+6e80, U+6e90, U+6f14, U+706b, U+71b1,
    U+72ec, U+738b, U+7403, U+7533, U+7570, U+7687, U+770c, U+773c, U+793a,
    U+798f, U+79d1, U+7a2e, U+7a81, U+7b49, U+7b54, U+7b56, U+7b97, U+7d00,
    U+7d19, U+7d20, U+7d30, U+7d71, U+7d76, U+8001, U+8077, U+80b2, U+80cc,
    U+8239, U+826f, U+82b1, U+82b8, U+82e6, U+82f1, U+8535, U+8840, U+899a,
    U+89b3, U+8a3c, U+8a8d, U+8ab0, U+8ac7, U+8b58, U+8b66, U+8b77, U+8c37,
    U+8c61, U+8ca0, U+8d64, U+8d70, U+8def, U+8ee2, U+8ffd, U+9020, U+9054,
    U+9060, U+9152, U+91cf, U+964d, U+9650, U+968a, U+968e, U+96e2-96e3, U+9752,
    U+9818, U+983c, U+98db, U+9928, U+9999, U+9a13, U+9ed2;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M010.woff")}) format("woff");
  unicode-range: U+4e26, U+4e38, U+4e71, U+4ecf, U+4ef2, U+4f3c, U+4f4e, U+4f59,
    U+4fee, U+500b, U+5012, U+5024, U+5065, U+5144, U+5177, U+51b7, U+51e6,
    U+52b4, U+52b9, U+533a, U+5354, U+5371, U+53bb, U+53f8, U+5404, U+5468,
    U+559c, U+56f2, U+5712, U+5742, U+57df, U+5802, U+590f, U+5922, U+59d4,
    U+5a18, U+5a66, U+5b85, U+5bbf, U+5bc6, U+5bdd, U+5c0e, U+5c3e, U+5c55,
    U+5d0e, U+5e03, U+5e2d, U+5e2f, U+5e55, U+5e78, U+5e95, U+5ead, U+5eb7,
    U+5f93, U+5fa9, U+5fb3, U+5fd7, U+6050, U+6211, U+623f, U+62b1, U+62c5,
    U+6319, U+63a2, U+63a5, U+63cf-63d0, U+63f4, U+653b, U+6545, U+6575, U+6577,
    U+661f, U+662d, U+6697, U+66ae, U+670d, U+672a, U+6750, U+6797, U+682a,
    U+68ee, U+691c, U+6975, U+6b74, U+6bbf, U+6bce, U+6bd4, U+6c38, U+6ca2,
    U+6cb3, U+6ce2, U+6d0b, U+6e1b, U+6e29, U+6e96, U+6fc0, U+7247, U+72af,
    U+7387, U+74b0, U+7565, U+7591, U+7642, U+767b, U+76e3, U+7701, U+7814,
    U+7834, U+79c0, U+79cb, U+79d8, U+79fb, U+7a0b, U+7a0e, U+7a4d, U+7a76,
    U+7ae0, U+7aef, U+7af6, U+7ba1, U+7cbe, U+7cfb, U+7d75, U+7dd2, U+7de8,
    U+7e54, U+7fd2, U+8089, U+80f8, U+8170, U+8179, U+8208, U+821e, U+8336,
    U+8349, U+8457, U+85ac, U+8857, U+88c1, U+88c5, U+88cf, U+88fd, U+898f,
    U+89d2, U+8a2a, U+8a31, U+8a55, U+8a66, U+8a8c, U+8af8, U+8ca1, U+8cbb,
    U+8cde, U+8d8a, U+8efd, U+8f09, U+8fba, U+9000, U+9003, U+901f, U+9031,
    U+904a, U+907a, U+9244, U+9280, U+9332, U+9632, U+9678, U+967a, U+96a0,
    U+96d1, U+9759, U+975e, U+9769, U+97ff, U+9803, U+985e, U+98f2, U+9bae;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M011.woff")}) format("woff");
  unicode-range: U+4e91, U+4ea1, U+4ee4, U+4f11, U+5009, U+50b7, U+5104, U+5150,
    U+5178, U+5200, U+520a, U+5211, U+5217, U+523a-523b, U+5263, U+5287, U+5348,
    U+535a, U+5370, U+53b3, U+53ca, U+542b, U+5438, U+5584, U+56e0, U+56f0,
    U+56fa, U+5727, U+58c1, U+5915, U+592e, U+5947-5948, U+5999, U+5acc, U+5b87,
    U+5b8c, U+5bcc, U+5c02, U+5c04, U+5c64, U+5ca9, U+5cb8, U+5de8, U+5eab,
    U+5f01, U+5f1f, U+5f31, U+5f3e, U+5f66, U+5fae, U+5fd8, U+5fe0, U+6012,
    U+604b, U+6075, U+60b2, U+6255, U+6297-6298, U+6355, U+6368, U+6388, U+639b,
    U+63a8, U+6557, U+6563, U+6574, U+65bd, U+6613, U+6628, U+666e, U+6674,
    U+66b4, U+66f2, U+66ff, U+675f, U+677f, U+67c4, U+67d3, U+690d, U+6a19,
    U+6a21, U+6a39, U+6b32, U+6bdb, U+6c60, U+6cc1, U+6d45, U+6e2f, U+6e6f,
    U+70ba, U+713c, U+7167, U+7248, U+72ac, U+7384, U+7389, U+7532, U+7559,
    U+75c7, U+75db, U+76db, U+7720, U+7763, U+77ac, U+77ed, U+793c, U+79f0,
    U+7a93, U+7af9, U+7b4b, U+7bc0, U+7d14, U+7d1a, U+7d66, U+7d99, U+7e01,
    U+7f6a, U+7fbd, U+8033, U+8056, U+80a9, U+8131, U+8155, U+81e3, U+822c,
    U+83ef, U+8584, U+85e9, U+8846, U+8863, U+88ab, U+88dc, U+89e6, U+8a0a,
    U+8a0e, U+8a33, U+8ab2, U+8b1b, U+8c4a, U+8cac, U+8cb4, U+8d85, U+8de1,
    U+8e0f, U+8f2a, U+8fb2, U+8fce, U+8feb, U+8ff0, U+9006, U+9014, U+91cc,
    U+9589, U+95d8, U+962a, U+963f, U+9663-9664, U+967d, U+969c, U+96c4, U+96e8,
    U+96ea, U+9707, U+97d3, U+984d, U+9858, U+990a, U+99c6, U+9a5a, U+9aa8,
    U+9aea, U+9ce5, U+9cf4, U+9ebb, U+9ed9, U+9f62;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M012.woff")}) format("woff");
  unicode-range: U+4e01, U+4e08, U+4e5f, U+4e73, U+4e92, U+4eee, U+4ef0, U+4f0f,
    U+4f38, U+4f9d, U+4fbf, U+500d, U+5019, U+501f, U+50be, U+5100, U+5145,
    U+51ac, U+5247, U+5275, U+529f, U+52e4, U+5305, U+5360, U+539a, U+53e5,
    U+53eb, U+5410, U+5426, U+5439, U+543e, U+54f2, U+57f7, U+5800, U+58ca,
    U+5949, U+59c9, U+5b6b, U+5b9d, U+5ba3, U+5be9, U+5c0a, U+5c31, U+5c4a,
    U+5c5e, U+5d29, U+5df1, U+5e0c, U+5e1d, U+5e79, U+5e7c, U+5e81, U+5e8a,
    U+5ec3, U+5ef6, U+5f25, U+5f8b, U+5f92, U+5fb4, U+5feb, U+6016, U+60a3,
    U+60d1, U+61b2, U+61b6, U+624d, U+6279, U+627f, U+62e0-62e1, U+635c, U+63a1,
    U+63db, U+63e1, U+63fa, U+643a, U+64ae, U+64cd, U+6551, U+65e7, U+6614,
    U+663c, U+667a, U+66dc, U+66f4, U+6749, U+679a, U+679d, U+67f3, U+6804,
    U+6838, U+6b20, U+6b27, U+6b6f, U+6c88, U+6cb9, U+6cca, U+6ce3, U+6d17,
    U+6d5c, U+6d66, U+6df7, U+6e2c, U+6e7e, U+6ec5, U+6f22, U+6fc3, U+702c,
    U+7159, U+7206, U+7518, U+76ae, U+76ca, U+76d7, U+76df, U+77e2, U+7802,
    U+7956, U+7981, U+7b46, U+7bc9, U+7c21, U+7d05, U+7d0d, U+7d39, U+7d61,
    U+7dad, U+7de0, U+7df4, U+7e04, U+7e70, U+7fa4, U+7fcc, U+8074, U+8133,
    U+81f3-81f4, U+822a, U+8302, U+8352, U+8377, U+878d, U+88d5, U+8907, U+8972,
    U+8a34, U+8a69, U+8a70, U+8a98, U+8c6a, U+8ca9, U+8cc0, U+8f38, U+8f9e,
    U+8ff7, U+9045, U+9063, U+9069, U+907f, U+90a3, U+90f7, U+9178, U+91e3,
    U+9283, U+93e1, U+95a3, U+9670, U+96a3, U+96f2, U+9732, U+9806, U+98ef,
    U+99c5, U+9a12, U+9b3c, U+9b54, U+9b5a, U+9e7f, U+9ec4, U+9f3b;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M013.woff")}) format("woff");
  unicode-range: U+4e39, U+4e43, U+4e80, U+4e86, U+4e9c, U+4ec1, U+4ed9, U+4f2f,
    U+4f34, U+4f8d, U+4fb5, U+4fca, U+505c, U+50ac, U+50b5, U+50da, U+50e7,
    U+5230, U+5238, U+526f, U+52c7, U+52d8, U+5352, U+5373, U+53c8, U+53cc,
    U+53e9, U+5442, U+5507, U+5510, U+5747, U+574a, U+57a3, U+57cb, U+585a,
    U+5869, U+596a, U+5974, U+5982, U+59b9, U+5a01, U+5ac1, U+5b63, U+5b99,
    U+5bd2, U+5bff, U+5c0b, U+5c3b, U+5c3d, U+5c48, U+5de1, U+5e33, U+5e45,
    U+5e72, U+5fb9, U+5fcd, U+602a, U+6065, U+609f, U+60a9, U+611a, U+6162-6163,
    U+616e, U+6176, U+61d0, U+61f8, U+6271, U+6291, U+62db, U+62dd, U+63b2,
    U+63ee, U+640d, U+6458, U+656c, U+658e, U+65ac, U+65d7, U+65e6, U+6607,
    U+6669, U+66f9, U+672d, U+676f, U+6885, U+68d2, U+6bd2, U+6c57, U+6c5a,
    U+6c96, U+6cbc, U+6cbf, U+6d6a, U+6d74, U+6d99, U+6db2, U+6e09, U+6e56,
    U+6f5c, U+6f6e, U+706f, U+707d, U+718a, U+71c3, U+725b, U+72c2, U+72d9,
    U+72ed, U+732b, U+7372, U+75b2, U+7686, U+76e4, U+770b, U+773a, U+7832,
    U+7968, U+796d, U+7a32, U+7a3f, U+7a74, U+7adc, U+7ae5, U+7bb1, U+7bc4,
    U+7c60, U+7dca, U+7e2e, U+7e3e, U+7e41, U+7f85, U+808c, U+80de, U+8107,
    U+811a, U+819d, U+81d3, U+81ed, U+820c, U+820e, U+821f, U+8266, U+83dc,
    U+864e, U+866b, U+885d, U+888b, U+88c2, U+8a3a, U+8a73, U+8acb, U+8b00,
    U+8b1d, U+8c46, U+8ca7-8ca8, U+8cb8, U+8ddd, U+8e8d, U+8ed2, U+8f1d, U+8f9b,
    U+9084, U+90f5, U+9154, U+91c8, U+91dd, U+9234, U+92ad, U+95c7, U+9686,
    U+96c5, U+970a, U+9802, U+9805, U+9830, U+98fe, U+99c4, U+9f8d;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M014.woff")}) format("woff");
  unicode-range: U+4e18, U+4e7e, U+4ead, U+4f73, U+4f75, U+4fc3, U+4fd7, U+507d,
    U+508d, U+5146, U+514d, U+517c, U+518a, U+524a, U+5264, U+5289, U+52aa,
    U+52c9, U+52df, U+5302, U+5320, U+5353, U+5374, U+53d4, U+541e, U+54b2,
    U+54c0, U+552f, U+5531, U+5642, U+5653, U+5750, U+5857, U+5893, U+594f,
    U+5951, U+596e, U+59d3, U+59eb, U+5b09, U+5b54, U+5b5d, U+5b64, U+5b8f,
    U+5bdb, U+5c01, U+5c1a, U+5cf0, U+5d07, U+5e7b, U+5e7e, U+5eca, U+5efb,
    U+5f18, U+5f69, U+5f80-5f81, U+6069, U+6094, U+60a0, U+614e, U+618e, U+6212,
    U+629e, U+62b5, U+62d2, U+62f6, U+6311, U+6328, U+6392, U+6398, U+63a7,
    U+63da, U+6469, U+654f, U+6589, U+65e2, U+660c, U+6696, U+670b, U+6717,
    U+6790, U+67d4, U+67f1, U+67f4, U+685c, U+68c4, U+6905, U+6982, U+6c37,
    U+6c99, U+6ca1, U+6ce5, U+6d69, U+6de1, U+6dfb, U+6e0b, U+6ed1, U+6ede,
    U+6f01, U+6fa4, U+6fe1, U+708e, U+70ad, U+70c8, U+719f, U+7235, U+7267,
    U+732e, U+7344, U+73cd, U+7551, U+7573, U+7709, U+786c, U+795d, U+7a42,
    U+7b20, U+7c4d, U+7c89, U+7cf8, U+7d1b, U+7d22, U+7db1-7db2, U+7dd1, U+7f72,
    U+8010, U+809d, U+80a1, U+80a5, U+8102, U+8105, U+8108, U+8150, U+81e8,
    U+829d, U+8358, U+83ca, U+85a9, U+865a, U+88f8, U+8986, U+8997, U+8a13,
    U+8a17, U+8a87, U+8a95, U+8aa0, U+8aa4, U+8cab, U+8cbf, U+8cca, U+8cdb,
    U+8cfc, U+8da3, U+8e0a, U+8f03, U+8f29, U+900f, U+902e, U+9047, U+90a6,
    U+90aa, U+90b8, U+90e1, U+92ed, U+9685, U+96c7, U+9756, U+9808, U+9810,
    U+9867, U+98fc, U+99d0, U+9a0e, U+9b42, U+9b45, U+9db4, U+9e97;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M015.woff")}) format("woff");
  unicode-range: U+4e1e, U+4ff3, U+502b, U+5049, U+5075-5076, U+511f, U+514b,
    U+5176, U+5192, U+51c4, U+51cd, U+51dd, U+5203, U+5237, U+525b, U+525d,
    U+52e7, U+5339, U+5375, U+53ec, U+5446, U+5449, U+545f, U+5589, U+558b,
    U+55ab, U+5606, U+5609, U+5674, U+5699, U+570f, U+5782, U+5805, U+5854,
    U+585e, U+58c7, U+58ee, U+5a46, U+5b22, U+5bc2, U+5be7, U+5bf8, U+5c3a,
    U+5c90, U+5cb3, U+5d8b, U+5e3d, U+5e84, U+5e8f, U+5eb5, U+5ef7, U+5f13,
    U+5f6b, U+5fd9, U+6068, U+60dc, U+60e8, U+614c, U+6249, U+62cd, U+62ed,
    U+62fe, U+636e, U+6383, U+638c, U+63aa, U+63c3, U+6442, U+6451, U+64ab,
    U+659c, U+65e8, U+65ec, U+662f, U+664b, U+6676, U+6687, U+6691, U+6731,
    U+673a, U+674e, U+6762, U+67a0, U+6842, U+68b0, U+68da, U+6b53, U+6b8a,
    U+6b96, U+6c41, U+6cf0, U+6cf3, U+6d29, U+6d44, U+6daf, U+6dbc, U+6e9c,
    U+6eb6, U+6f02, U+6f0f, U+6f2b, U+6f70, U+6f84, U+7070, U+7126, U+716e,
    U+731b, U+7434, U+74f6, U+76bf, U+78e8, U+790e, U+7948, U+7950, U+7985,
    U+7a3c-7a3d, U+7a4f, U+7b52, U+7c92, U+7ca7, U+7cd6, U+7d0b, U+7d2b, U+7dbf,
    U+7de9, U+7e1b, U+7e26, U+7f70, U+7fd4, U+7ffc, U+80c6, U+81a8, U+81b3,
    U+82b3, U+83cc, U+846c, U+8650, U+8896, U+89a7, U+8a5e, U+8a89, U+8b0e,
    U+8b72, U+8c8c, U+8c9e, U+8caf, U+8cc3, U+8ce2, U+8d08, U+8df3, U+8e74,
    U+8eb0, U+8fb0, U+9019, U+9038, U+9042, U+906d, U+9177, U+9298, U+934b,
    U+9375, U+938c, U+9396, U+93ae, U+9451, U+9665, U+968f, U+96f7, U+9700,
    U+9727, U+9774, U+9801, U+9811, U+9837, U+9855, U+99d2, U+9df9, U+9ea6;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M016.woff")}) format("woff");
  unicode-range: U+4e4f, U+4f0d, U+504f, U+5098, U+5132, U+5197, U+51a0, U+51e1,
    U+51f6, U+52a3, U+52b1, U+5351, U+540e, U+54c9, U+5553, U+55a7, U+5629,
    U+572d, U+582a, U+584a, U+587e, U+5937, U+5983, U+598a, U+5bb0, U+5bb4,
    U+5c09, U+5c3f, U+5c65, U+5ce0, U+5d50, U+5de3, U+5de7, U+5e06, U+5e61,
    U+5e7d, U+5eb6, U+5f90, U+6052, U+60a6, U+60da, U+6109, U+6170, U+6182,
    U+622f, U+62ab, U+62bd, U+62c9, U+62d3, U+62d9, U+62ec, U+631f, U+633f,
    U+6414, U+64a4, U+64b2, U+64e6, U+65bc, U+66a6, U+66fe, U+6795, U+67b6,
    U+6817, U+6843, U+6850, U+68a8, U+68cb, U+68df, U+69cd, U+6b64, U+6bb4,
    U+6d1e, U+6d32, U+6d78, U+6df3, U+6df5, U+6e67, U+6e7f, U+6edd, U+6f20,
    U+6f54, U+6f5f, U+6f64, U+7089, U+722a, U+723a, U+7272, U+72a0, U+72e9,
    U+72fc, U+732a, U+733f, U+7363, U+73e0, U+73ed, U+751a, U+75be, U+7656,
    U+76c6, U+76fe, U+7761, U+7768, U+78c1, U+7949, U+7965, U+7984, U+79d2,
    U+79e9, U+7a1a, U+7aae, U+7b48, U+7bc7, U+7be0, U+7c3f, U+7c8b, U+7c97-7c98,
    U+7ce7, U+7d17, U+7d5e, U+7dbe, U+7e6b, U+7f8a, U+7ffb, U+8015, U+80c3,
    U+80e1, U+816b, U+8178, U+819a, U+819c, U+8210, U+8217, U+828b, U+82bd,
    U+82d7, U+82db, U+83d3, U+845b, U+84b8, U+84bc, U+84c4, U+84cb, U+8526,
    U+85dd, U+8607, U+862d, U+86c7, U+86ee, U+8776, U+8870, U+88fe, U+8a93,
    U+8b19, U+8ca2, U+8cb0, U+8cbc, U+8ced, U+8ec0, U+8ef8, U+8f14, U+8fb1,
    U+90c1, U+90ca, U+9262, U+9271, U+9285, U+932f, U+9640, U+965b, U+9673,
    U+9676, U+9694, U+984e, U+99b4, U+99d5, U+99ff, U+9b4f, U+9d28, U+9f13;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M017.woff")}) format("woff");
  unicode-range: U+4e59, U+4e5e, U+4eae, U+4f10, U+5091, U+5270, U+52c3, U+537f,
    U+5384, U+53e1, U+53f1, U+540a, U+541f, U+5448, U+546a, U+5504, U+553e,
    U+559a, U+55aa, U+55b0, U+564c, U+56c1, U+576a, U+57f9, U+5824, U+583a,
    U+5840-5841, U+58a8, U+58fa, U+5954, U+5996, U+5a20, U+5b8b, U+5b9b, U+5bee,
    U+5c16, U+5ce1, U+5d16, U+5e4c, U+5e63, U+5f26, U+5f70, U+5f84, U+5faa,
    U+6020, U+602f, U+606d, U+6070, U+60e3, U+6148, U+61a4, U+61c7, U+61f2,
    U+6216, U+621a, U+6247, U+628a, U+62d8, U+62f3, U+6349, U+63c9, U+64c1,
    U+6562, U+6566, U+65cb, U+6602, U+6606, U+6627, U+6643, U+6681, U+6734,
    U+67af, U+6851, U+6881, U+68b6, U+68f2, U+690e, U+697c, U+6a3d, U+6b04,
    U+6b3a, U+6b6a, U+6c70, U+6ce1, U+6d1b, U+6deb, U+6e26, U+6e9d, U+6ea2,
    U+6ef4, U+6f2c, U+6f31, U+6fc1, U+6fef, U+7261-7262, U+731f, U+74e6, U+755c,
    U+758e, U+75ab, U+75d5, U+75f4, U+7652, U+77b3, U+77db, U+77e9, U+7815,
    U+7881, U+7940, U+79e6, U+7aba, U+7b1b, U+7b26, U+7b87, U+7bb8, U+7d10,
    U+7d33, U+7d79, U+7dba, U+7def, U+7e2b, U+7e4a, U+7f36, U+7fc1, U+80aa,
    U+80ba, U+80f4, U+817f, U+8276, U+83c5, U+83e9, U+83f1, U+84b2, U+84ee,
    U+85cd, U+865c, U+8700, U+8861, U+8881, U+895f, U+8987, U+8a1f, U+8ae6,
    U+8b21, U+8b5c, U+8c5a, U+8c9d, U+8d99, U+8ecc, U+8edf, U+8fbb, U+9022,
    U+904d, U+90ed, U+9175, U+919c, U+920d, U+9326, U+935b, U+9418, U+95a5,
    U+963b, U+9644, U+9675, U+9699, U+96c0, U+96f0, U+983b, U+98e2, U+98fd,
    U+9905, U+99b3, U+99c8, U+9ad9, U+9b31, U+9b8e, U+9d8f, U+9ebf;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M018.woff")}) format("woff");
  unicode-range: U+4eab, U+4ec7, U+4f0e, U+4f3a, U+4f46, U+4faf, U+4ff5, U+502d,
    U+50b3, U+5112, U+514e, U+5208, U+52c5, U+52f2, U+53ea, U+547b, U+54b3,
    U+5538, U+5598, U+559d, U+55c5, U+55e3, U+56da, U+570b, U+57fc, U+5835,
    U+5875, U+58b3, U+58cc, U+5968, U+59a5, U+59a8, U+59ac, U+59be, U+59d1,
    U+59dc, U+5a92, U+5ac9, U+5b5f, U+5b9c, U+5c3c, U+5cac, U+5df3, U+5dfe,
    U+5e25, U+5e87, U+5f04, U+5fcc, U+6028, U+60f9, U+6115, U+6155, U+61a7,
    U+6234, U+6276, U+6367, U+642d, U+64ad, U+6590, U+6597, U+66ab, U+66c7,
    U+66d6, U+66fd, U+6756, U+67a2, U+67cf-67d0, U+67ff, U+683d, U+6876, U+689d,
    U+695a, U+6bbb, U+6bc5, U+6c72, U+6c7d, U+6cb8, U+6dc0, U+6e07, U+6ecb,
    U+6ef2, U+6f06, U+6f15, U+708a, U+70cf, U+711a, U+71c8, U+71e5, U+71ed,
    U+723d, U+72d0, U+74a7, U+75fa, U+7626, U+76ba, U+76c3, U+7891, U+7897,
    U+78ef, U+79bf, U+7a00, U+7a9f, U+7aaa, U+7aaf, U+7aff, U+7b39, U+7b51,
    U+7be4, U+7c9b, U+7d3a, U+7db4, U+7dbb, U+7f75, U+8096, U+8098, U+80a2,
    U+80af, U+80ce, U+82af, U+82d1, U+830e, U+83ab, U+8429, U+8463, U+8499,
    U+8511, U+852d, U+854e, U+85a6, U+85ab, U+8702, U+871c, U+8912, U+8956,
    U+8a02, U+8a50, U+8a60, U+8a63, U+8a6b, U+8a6e, U+8acf, U+8aed, U+8afe,
    U+8b83, U+8b90, U+8cd1, U+8ce0, U+8d05, U+8d66, U+8d74, U+8df5, U+8fbf,
    U+906e, U+9077, U+912d, U+914c, U+916c, U+9192, U+91dc, U+925b, U+92fc,
    U+9320, U+9591, U+961c, U+9688, U+96b7, U+96bb, U+96f6, U+971e, U+9813,
    U+990c, U+9a19, U+9a30, U+9ab8, U+9aed, U+9b6f, U+9ce9, U+9d5c, U+9e93,
    U+20b9f;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M019.woff")}) format("woff");
  unicode-range: U+4e14, U+4e3c, U+4ed4, U+4f3d, U+4f51, U+4fae, U+4fb6, U+4fe3,
    U+4ff1, U+50b2, U+50c5, U+5102, U+51b4, U+51fd, U+5243, U+5256, U+52ff,
    U+533f, U+53a8, U+53ad, U+53d9, U+53db, U+53f6, U+540f, U+5420, U+543b,
    U+548e, U+54bd, U+5506, U+5632, U+57a2, U+57c3, U+5815, U+589c, U+5984,
    U+5993, U+59d0, U+5a3c, U+5a7f, U+5bb5, U+5bc5, U+5cef, U+5dba, U+5e16,
    U+5ee3, U+5f0a, U+5ffd, U+60b6, U+60bc, U+6101, U+6144, U+6168, U+6190-6191,
    U+61a9, U+62d0, U+62d7, U+632b, U+63c6, U+642c, U+64ec, U+65ed, U+66f3,
    U+673d, U+674f, U+675c, U+67f5, U+6803, U+685f, U+6897, U+68af, U+68fa,
    U+694a, U+6960, U+69cc, U+69fd, U+6a3a, U+6a58, U+6b86, U+6c5d, U+6ccc,
    U+6d12, U+6d2a, U+6dcb, U+6e13, U+6e15, U+6eba, U+7027, U+7169, U+717d,
    U+724c, U+7259, U+727d, U+72fd, U+7336, U+7345, U+73b2, U+73ca, U+7409,
    U+7435-7436, U+745e, U+7460, U+74dc, U+7525, U+754f, U+7554, U+757f, U+760d,
    U+764c, U+76f2, U+771e, U+7729, U+7738, U+7766, U+77ad, U+77bc, U+7826,
    U+786b, U+79b0, U+7a14, U+7a40, U+7a6b, U+7a7f, U+7b25, U+7c1e, U+7c3e,
    U+7cde, U+7d2f, U+7d46, U+7f60, U+7fa8, U+8061, U+814e, U+81a3, U+81c6,
    U+81e5, U+8235, U+8247, U+82a5, U+82d4, U+831c, U+8328, U+832b, U+837b-837c,
    U+853d, U+8587, U+8594, U+8599, U+85aa, U+85ea, U+85fb, U+868a, U+8766,
    U+87f9, U+881f, U+88b4, U+88df, U+88e1, U+88f3, U+8a1d, U+8a3b, U+8a72,
    U+8adc, U+8aeb, U+8aee, U+8cc4, U+8cdc, U+8e2a, U+8e5f, U+8e87, U+8e8a,
    U+8f3f, U+8f44, U+8f5f, U+8fc5, U+8fe6, U+9010, U+901d, U+9065, U+914e,
    U+9162, U+91b8, U+91d8, U+92f3, U+932c, U+95b2, U+96db, U+9798, U+97ad,
    U+9838, U+9913, U+9ac4, U+9be8, U+9cf3, U+9dd7, U+9df2, U+9f20;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M020.woff")}) format("woff");
  unicode-range: U+4e9b, U+4ea8, U+4f47, U+4fef, U+5016, U+5023, U+5118, U+5141,
    U+51a5, U+51b6, U+51c6, U+51cc, U+51f0, U+5239, U+52fe, U+5347, U+5378,
    U+53c9, U+5484, U+54e2, U+55a9, U+55df, U+567a, U+5806, U+58d5, U+58f1,
    U+5957, U+5962, U+59e6, U+59fb, U+5a25, U+5a2f, U+5a9a, U+5ae1, U+5be1,
    U+5bf5, U+5c4d, U+5c51, U+5c6f, U+5cd9, U+5ce8, U+5d4c, U+5d6f, U+5eb8,
    U+5ec9, U+5ed3, U+60e7, U+6284, U+62b9, U+62f7, U+633a, U+633d, U+6372,
    U+637b, U+63a0, U+643e, U+647a, U+6492, U+64a5, U+6518, U+6523, U+6591,
    U+65fa, U+660f, U+6652, U+66f0, U+66fc, U+676d, U+6813, U+6841, U+6893,
    U+693f, U+698a, U+698e, U+69fb, U+6a0b, U+6a2b, U+6a80, U+6a9c, U+6ad3,
    U+6afb, U+6b89, U+6dd1, U+6e4a, U+6fe0, U+6fe4, U+704c, U+7058, U+7092,
    U+714e, U+71d5, U+723e, U+72d7, U+72f8, U+7325, U+73a9, U+745c, U+7526,
    U+755d, U+7560, U+75d9, U+76e7, U+7791, U+7825, U+785d, U+78d0, U+7901,
    U+7947, U+798d, U+79df, U+79e4, U+7a92, U+7b95, U+7ca5, U+7cfe, U+7d21,
    U+7dcb, U+7e1e, U+7e55, U+7e8f, U+7f9e, U+7fe0, U+7ff3, U+800c, U+8017,
    U+8036, U+809a, U+80b4, U+8151, U+8154, U+817a, U+81c0, U+81fc, U+8218,
    U+8236-8237, U+8258, U+8299, U+82a6, U+82ad, U+8305, U+8389, U+840c, U+840e,
    U+842c, U+8461, U+8466, U+8475, U+8513, U+8523, U+8549, U+8569, U+85c1,
    U+8679, U+86cd, U+86d9, U+87ba, U+87ec, U+87fb, U+887f, U+8888, U+895e,
    U+8b33, U+8b39, U+8caa, U+8e35, U+8ecb, U+8fc2, U+901e, U+9041, U+9059,
    U+905c, U+9061, U+918d, U+9190, U+91ac, U+91c7, U+9264, U+92d2, U+930f,
    U+93a7, U+93d1, U+9583, U+95a4, U+966a, U+96bc, U+96c1, U+96cc, U+971c,
    U+9784, U+978d, U+97fb, U+9909, U+9910, U+9945, U+9bc9, U+9d3b, U+9eb5,
    U+fa11;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M021.woff")}) format("woff");
  unicode-range: U+4e11, U+4e32, U+4e4d, U+4f5b, U+4f86, U+4fc4, U+4fe0, U+4ff8,
    U+5005, U+5036, U+50fb, U+515c, U+51a8, U+51dc, U+51e0, U+51f1, U+51f8-51f9,
    U+520e, U+52ab, U+5315, U+536f, U+53e2, U+54a5, U+555c, U+555e, U+55da,
    U+55dc, U+55e4, U+5687, U+5703, U+5751, U+5766, U+57d2, U+5830, U+5861,
    U+589f, U+5b0c, U+5bc7, U+5cfb, U+5dbd, U+5dcc, U+5deb, U+5df4, U+5df7,
    U+5e40, U+5edf, U+5f14, U+5f1b, U+5f27, U+5f77, U+60df, U+6167, U+619a,
    U+622e, U+6309, U+634f, U+6377, U+639f, U+63ac, U+63c4, U+63f6, U+646f,
    U+64b0, U+64e2, U+65af, U+6666, U+66a2, U+66dd, U+6775, U+67d1, U+6816,
    U+68a2, U+68f9, U+6900, U+696f, U+6abb, U+6adb, U+6b23, U+6b3d, U+6b4e,
    U+6bef, U+6c4e, U+6c50, U+6cab, U+6e3e, U+6e5b, U+6f38, U+6feb, U+6ff1,
    U+707c, U+7109, U+7149, U+714c, U+721b, U+725d, U+725f, U+7396, U+745b,
    U+7483, U+752b, U+75bc, U+75e2, U+766a, U+77a0, U+77a5, U+78a7, U+792b,
    U+7960, U+79b1, U+7a1c, U+7b8b, U+7c95, U+7c9f, U+7cca, U+7d68, U+7db8,
    U+7dfb, U+7e61, U+7e82, U+7f77, U+7f79, U+803d, U+805a, U+80da, U+80e4,
    U+8106, U+810a, U+8338, U+834a, U+8404, U+847a, U+8494, U+86db, U+8718,
    U+8882, U+8910, U+8944, U+8a1b, U+8a23, U+8a54, U+8a85, U+8ad2, U+8b01-8b02,
    U+8b5a, U+8cd3, U+8ce4, U+8ce6, U+8d0b, U+8de8, U+8e44, U+8f1b, U+8f62,
    U+8fa3, U+907c-907d, U+9091, U+9127, U+9306, U+936c, U+95ca, U+9744, U+978b,
    U+985a, U+98f4, U+9952, U+9a52, U+9af7, U+9b41, U+9bad, U+9bdb, U+9c39,
    U+9c3b, U+9c57, U+9cf6, U+9d09, U+9e1e, U+9eb4, U+9ece;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M022.woff")}) format("woff");
  unicode-range: U+4e4e, U+4e8e, U+4e98, U+4ea6, U+4ec4, U+4f43, U+5026, U+5039,
    U+505a, U+50ad, U+50d1, U+5191, U+52d2, U+535c, U+5398, U+53a9, U+5475,
    U+54a4, U+54ac, U+54e8, U+54ed, U+54fa, U+557c, U+55ac, U+5614, U+5617,
    U+56ca, U+5821, U+5955, U+5978, U+59ea, U+5a9b, U+5b55, U+5b78, U+5ba5,
    U+5bd3, U+5c24, U+5c41, U+5c53, U+5c5b, U+5c79, U+5d14, U+5d69, U+5f45,
    U+5f6c, U+601c, U+604d, U+606b, U+6089, U+60b4, U+60b8, U+60f0, U+61ab,
    U+61ae, U+61be, U+61ff, U+620a, U+621f, U+6241, U+626e, U+6289, U+634c,
    U+65a1, U+65a5, U+65a7, U+6727, U+6853, U+68b5, U+6912, U+6953, U+69b4,
    U+69d9, U+6a47, U+6a8e, U+6b3e, U+6b7f, U+6bb7, U+6bc0, U+6bd8, U+6c3e,
    U+6c81, U+6c8c, U+6c93, U+6cc4, U+6cea, U+6df9, U+6e1a, U+7015, U+703e,
    U+7114, U+71be, U+7280, U+72c4, U+72e1, U+734f, U+745a, U+75b5, U+75b9,
    U+75d2, U+75e9, U+7624, U+779e, U+77ef, U+78da, U+798e, U+7a62, U+7a83,
    U+7ae6, U+7aea, U+7b19, U+7b75, U+7bdd, U+7c82, U+7ce0, U+7d18, U+7d43,
    U+7d62, U+7e0b, U+8006, U+805f, U+806f, U+8073, U+808b, U+809b, U+80b1,
    U+811b, U+814b, U+818f, U+81cd, U+8205, U+821c, U+8233, U+8278, U+8304,
    U+8309, U+8339, U+8340, U+8431, U+8471, U+84ec, U+8521, U+8543, U+857e,
    U+8606, U+8654, U+8695, U+86ed, U+8805, U+8823, U+88d4, U+8aa6, U+8ae7,
    U+8b80, U+8cc2, U+8d14, U+8da8, U+8dbe, U+8dea, U+8eb1, U+8ebe, U+8fc4,
    U+900d, U+9017, U+9075, U+90e4, U+9249, U+932b, U+947f, U+968b, U+96cd,
    U+9761, U+9870, U+98af, U+9949, U+99a8, U+9ba8, U+9bab, U+9d6c, U+9e9f,
    U+9f4b;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M023.woff")}) format("woff");
  unicode-range: U+4ea5, U+4f98, U+5072, U+5147, U+5180, U+51db, U+51ea, U+524c,
    U+52c1, U+5321, U+53a0, U+5403, U+5477, U+54b8, U+55c4, U+5631, U+5634,
    U+56c3, U+5713, U+5718, U+57e0, U+57f4, U+582f, U+58be, U+58dc, U+58ec,
    U+5944, U+5a62, U+5b95, U+5c60, U+5cb1, U+5df2, U+5e37, U+5eff, U+5f17,
    U+5f3c, U+5f4c, U+5f57, U+5f59, U+5fa8, U+6063, U+608d, U+60c7, U+60e0,
    U+61c9, U+6258, U+62f5, U+6369, U+637a, U+638f, U+64f2, U+652a-652b, U+6583,
    U+6670, U+6688, U+6703, U+6714, U+6736, U+6753, U+67da, U+67e9, U+6846,
    U+6854, U+68cd, U+68d8, U+690b, U+6955, U+699c, U+69c7, U+6ac3, U+6c40,
    U+6d8e, U+6db8, U+6dee, U+6e20, U+6e25, U+6e58, U+6ef8, U+6f3f, U+6faa,
    U+6fb1, U+7099, U+70ac, U+70b8, U+7164, U+7199, U+71d0, U+71d7, U+71e6,
    U+71fb, U+71ff, U+733e, U+73c2, U+7433, U+74e2, U+7587, U+758b, U+75e3,
    U+75f0, U+7647, U+776b, U+777e, U+77e7, U+786f, U+7887, U+78a9, U+795f,
    U+7a84, U+7aa9, U+7ac8, U+7b08, U+7b67, U+7b94, U+7c00, U+7c2a, U+7cfa,
    U+7d72, U+7d9c, U+7dec, U+7f3a, U+7ff0, U+8000, U+8058, U+8070, U+8087,
    U+8129, U+8139, U+81a0, U+81b5, U+81bf, U+81fa, U+8207, U+821b, U+8292,
    U+82eb, U+8490, U+84c9, U+84d1, U+8557, U+856a, U+85c9, U+86c6, U+86cb,
    U+8755, U+87a2, U+880d, U+8822, U+8877, U+88a2, U+88b1, U+890c, U+892a,
    U+8966, U+8977, U+8abc, U+8b10, U+8b17, U+8c79, U+8cb6, U+8cc8, U+8cfd,
    U+8d73, U+8e72, U+8e99, U+8eeb, U+8f2f, U+8f4d, U+8f9f, U+8fed, U+9021,
    U+903c, U+9081, U+9087, U+9119, U+91e7, U+929a, U+929c, U+92cf, U+92f8,
    U+9310, U+9328, U+95bb, U+9716, U+976d, U+986b, U+9957, U+99c1, U+9a55,
    U+9aef, U+9b22, U+9b28, U+9b92, U+9c0a, U+9e7c, U+9ebe, U+9f0e, U+fa1f;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M024.woff")}) format("woff");
  unicode-range: U+4e15, U+4e19, U+4e56, U+4f1c, U+5080, U+5085, U+5121, U+51a4,
    U+51cb, U+51e7, U+51ed, U+524b, U+52be, U+5301, U+5308, U+5319, U+532a,
    U+543c, U+5480, U+5486, U+5556, U+565b, U+5664, U+56a5, U+5700, U+5851,
    U+5879, U+58fd, U+5925, U+594e, U+59e5, U+5a29, U+5a36, U+5b30, U+5b32,
    U+5b8d, U+5be6, U+5c39, U+5c4f, U+5d17, U+5d8c, U+5e47, U+5e5f, U+5e96,
    U+5ee0, U+5f7f, U+5f8a, U+5f98, U+5fb7, U+5fbd, U+6062, U+60a7, U+6147,
    U+6194, U+61ac, U+61c3, U+61e3, U+61fa, U+620c-620e, U+622a, U+6292, U+62ee,
    U+62ff, U+63a9, U+6426, U+6478, U+65a4, U+6715, U+6726, U+6777, U+67a1,
    U+6883, U+689f, U+6930, U+699b, U+69ae, U+6a05, U+6a84, U+6aae, U+6ac2,
    U+6b12, U+6bb2, U+6beb-6bec, U+6c6a, U+6c83, U+6d1f, U+6d59, U+6dd8, U+6e38,
    U+6ed4, U+6efe, U+6f09, U+6f32, U+6fb9, U+7006, U+701f, U+7078, U+70d9,
    U+70f9, U+7119, U+7184, U+71f5, U+7232, U+7252, U+731c, U+73c8, U+7425,
    U+7455, U+748b, U+7515, U+7576, U+7586, U+75d8, U+7693, U+76e5, U+77b0,
    U+77dc, U+77ee, U+78d4, U+7941, U+7953, U+79a6, U+79ae, U+79bd, U+7a1f,
    U+7a46, U+7ac4, U+7ad9, U+7afa, U+7b4f, U+7b92, U+7c50, U+7cae, U+7d2c,
    U+7d63, U+7d93, U+7e0a, U+7e23, U+7f8c, U+80f1, U+8171, U+8180, U+8201,
    U+826b, U+827e, U+82bb, U+82e7, U+839e, U+83d6, U+840a, U+865e, U+86c9,
    U+86e4, U+873b, U+87e0, U+8904, U+8ab9, U+8acd, U+8afa, U+8d04, U+8d16,
    U+8e42, U+8e81, U+8e85, U+8e91, U+9013, U+9089-908a, U+916a, U+91a4, U+91c9,
    U+9266, U+927e, U+9354, U+937e, U+958f, U+95a8, U+96eb, U+97a0, U+97ee,
    U+98c4, U+9b1a, U+9b44, U+9bd6, U+9c13, U+9c2f, U+9c48, U+9c52, U+9daf,
    U+9dfa, U+9e92, U+9eba, U+9f3e, U+9f67, U+9f95;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M025.woff")}) format("woff");
  unicode-range: U+4e58, U+4e99, U+4e9e, U+4ec0, U+4ec6, U+4f36, U+4f69, U+4f83,
    U+4f91, U+4fce, U+4fd0, U+4fd8, U+4fdf, U+5043, U+50de, U+50f9, U+5109,
    U+514c, U+5152, U+51c9, U+5269, U+527d, U+528d, U+52f3, U+52fa, U+5377,
    U+53df, U+54e9, U+54ee, U+5544, U+558a, U+55ae, U+562f, U+56b4, U+56bc,
    U+56ee, U+5708, U+57dc, U+5859, U+589e, U+58d8, U+58de, U+58ef, U+5958,
    U+5967, U+596c, U+5a03, U+5b43, U+5b5c, U+5be2, U+5be8, U+5bec, U+5c07-5c08,
    U+5c2d, U+5cfd, U+5d0b, U+5d1a, U+5dae, U+5dd6, U+5dfd, U+5e1b, U+5e36,
    U+5e9a, U+5eec, U+5ef3, U+5f10, U+5f48, U+5f6a, U+5f9e, U+5fa0, U+6015,
    U+6041, U+6043, U+6046, U+6055, U+606a, U+6084, U+608c, U+60e1, U+60fa,
    U+613c, U+61f7, U+61fc, U+6208, U+6230, U+6232, U+6248, U+629b, U+62c2,
    U+62d4, U+62dc, U+6357, U+63bb, U+6416, U+641c, U+649e, U+64bc, U+64e1,
    U+651d, U+6536, U+654d, U+6572, U+6582, U+660a, U+6635, U+66d9, U+675e,
    U+6787, U+67b7, U+67fe, U+6867, U+68a7, U+68b1, U+68b3, U+6962, U+6977,
    U+69c3, U+69ff, U+6a59, U+6cdb, U+6d85, U+6f11, U+6ffe, U+7155, U+722c,
    U+7240, U+7370, U+73c0, U+7422, U+7432, U+74bd, U+75b1, U+7621, U+7690,
    U+788d, U+79b9, U+79e3, U+7a63, U+7adf, U+7ae3, U+7b4d, U+7bad, U+7c7e,
    U+7dbd, U+7dde, U+7e37, U+7e6d, U+7fc5, U+81c2, U+8229, U+822b, U+82b9,
    U+82fa, U+83a2, U+846d, U+8655, U+86f8, U+86fe, U+87c7, U+8852, U+88c3,
    U+8a03, U+8a25, U+8af7, U+8b04, U+8b16, U+8b6c, U+8d6b, U+8dcb, U+8e93,
    U+8f61, U+8ff8, U+914b, U+9248, U+929b, U+92e4, U+932e, U+937c, U+9435,
    U+947d, U+9812, U+9824, U+983d, U+9903, U+991e, U+9998, U+99ad-99ae, U+99dd,
    U+99f1, U+9c3a, U+9ea9, U+9ef4;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M026.woff")}) format("woff");
  unicode-range: U+4f7c, U+4fa0, U+4fad, U+5265, U+5283, U+531d, U+5366, U+540b,
    U+5451, U+548b, U+5516, U+5618, U+5678, U+56a2, U+5764, U+5858, U+586b,
    U+58f7, U+5919, U+59f6, U+5a41, U+5b2c, U+5c61, U+5ca8, U+5efc, U+5f4a,
    U+6108, U+617e, U+63b4, U+63d6, U+649a, U+64b9, U+64fe, U+658c, U+6634,
    U+6644, U+664f, U+665d, U+665f, U+6668, U+6689, U+66c9, U+67c1, U+67ca,
    U+67d8, U+6802, U+681e, U+6822, U+6834, U+685d, U+689b, U+68bc, U+68c9,
    U+6919, U+691b, U+6934, U+6973, U+6994, U+6a02, U+6a17, U+6a1f, U+6a23,
    U+6a35, U+6a61, U+6a6b, U+6a7f, U+6aa2, U+6ae8, U+6b1d, U+6c23, U+6d35,
    U+6d38, U+6d6c, U+6d8c, U+6d9b-6d9c, U+6de8, U+6e8c, U+6ec9, U+6eef, U+6f23,
    U+6f45, U+6f81, U+6f97, U+6fd5, U+701e, U+7026, U+7028, U+7130, U+7194,
    U+71ce, U+71d2, U+722d, U+72db, U+72f9, U+7337, U+7378, U+73ea, U+7473,
    U+7476, U+7511, U+751c, U+7562, U+7566, U+7577, U+758a, U+758f, U+75d4,
    U+76c8, U+76dc, U+76e1, U+7827, U+783a, U+783f, U+7872, U+788e, U+7893,
    U+7895, U+7955, U+7962, U+7977, U+797f, U+79aa, U+79be, U+7a17, U+7a3b,
    U+7a4e, U+7a50, U+7a57, U+7a70, U+7a79, U+7ac3, U+7b86, U+7baa, U+7cb9,
    U+7da0, U+7dd6, U+7e31, U+7e96, U+7f9a, U+807d, U+81df, U+838a, U+83eb,
    U+8420, U+8568, U+8597, U+85b0, U+85cf, U+85e5, U+885e, U+88dd, U+89bd,
    U+8a62, U+8ac4, U+8b20, U+8b93, U+8ce3, U+8cf4, U+8f49, U+8fea, U+90de,
    U+9149, U+9187, U+9189, U+91c0, U+9291, U+9318, U+93ad, U+9444, U+9677,
    U+96aa, U+96dc, U+975c, U+980c, U+9817, U+986f, U+98dc, U+9a37, U+9a4d,
    U+9a57, U+9aee, U+9dc4, U+9ed1, U+9ed8, U+9edb, U+9f4a, U+f929, U+fa16,
    U+fa19-fa1b, U+fa22, U+fa26, U+fa46, U+fa4a;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M027.woff")}) format("woff");
  unicode-range: U+4e10, U+4e17, U+4e2a, U+4e31, U+4e36, U+4e3f, U+4e42, U+4e55,
    U+4e62, U+4e82, U+4e85, U+4e8a, U+4e9f-4ea0, U+4ea2, U+4eb0, U+4eb3, U+4eb6,
    U+4ec2, U+4ecd-4ece, U+4ed7, U+4ede-4edf, U+4eed, U+4ef7, U+4f09, U+4f30,
    U+4f57, U+4f5a, U+4f5d-4f5e, U+4f6f-4f70, U+4f76, U+4f7b, U+4f88, U+4f8f,
    U+4f96, U+4fab, U+4fd1, U+4fd4, U+4fda-4fdb, U+4fe4-4fe5, U+4ff6, U+4ffe,
    U+5006, U+500f, U+5011, U+5014, U+501a, U+5021, U+5025, U+5028-502a, U+502c,
    U+5047-5048, U+5050, U+5055-5056, U+506c, U+5078, U+509a, U+50b4, U+50c2,
    U+50c9-50ca, U+50d6, U+50e3, U+50e5, U+50ed-50ee, U+50f5, U+5101,
    U+5114-5116, U+511a, U+5137, U+513a-513c, U+513f-5140, U+5154, U+5162,
    U+5169-516a, U+516e, U+5182, U+5189, U+518c, U+518f-5190, U+5193,
    U+5195-5196, U+51a2, U+51a6, U+51a9-51ab, U+51b0-51b3, U+51b5, U+51bd,
    U+51c5, U+51d6, U+51e9, U+51f5, U+7bed, U+7c38, U+7c81, U+7c8d, U+7cce,
    U+7cdf, U+7dac, U+7e4b, U+7e4d, U+7f6b, U+7feb, U+807e, U+826e, U+82c5,
    U+82d3, U+834f, U+83b1, U+83df, U+83f0, U+844e, U+848b, U+849c, U+8500,
    U+851a, U+854a, U+85ae-85af, U+85f7, U+867b, U+86a4, U+86ce, U+8749, U+874b,
    U+877f, U+88b7, U+8a51, U+8acc, U+8b2c, U+8cce, U+8eaf, U+8fe9, U+9197,
    U+91c6, U+91e6, U+920e, U+9237, U+92ea, U+92f2, U+934d, U+9397, U+939a,
    U+9419, U+9438, U+9453, U+981a, U+982c, U+9834, U+985b, U+9a28, U+9baa,
    U+9bf5, U+9c0d, U+9c10, U+9c2d, U+9d07, U+9d0e, U+9d1b, U+9d2b-9d2c,
    U+9d60-9d61, U+9e78, U+9eb9, U+9ecd;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M028.woff")}) format("woff");
  unicode-range: U+51fe, U+5204, U+520b, U+5214, U+5227, U+522a, U+522e, U+5233,
    U+5244, U+524f, U+5254, U+525e, U+526a, U+5271, U+5273-5274, U+527f, U+5288,
    U+5291-5292, U+5294, U+52ac-52ad, U+52b5, U+52bc, U+52cd, U+52d7, U+52de,
    U+52e0, U+52e3, U+52e6, U+52f5, U+52f8-52f9, U+5306, U+530d, U+530f-5310,
    U+531a, U+5323, U+532f, U+5331, U+5333, U+5338, U+5340, U+5345-5346, U+5349,
    U+534d, U+535e, U+5369, U+536e, U+537b, U+5382, U+5396, U+53a5-53a6, U+53ae,
    U+53b0, U+53b6, U+53c3, U+53e8, U+53ed-53ee, U+53fa, U+5401, U+541d, U+5429,
    U+542c-542e, U+5436, U+543d, U+5440, U+544e, U+5470-5471, U+5476,
    U+548f-5490, U+5492, U+54a2, U+54a8, U+54ab, U+54af, U+54bc, U+54be, U+54c2,
    U+54c4, U+54c7-54c8, U+54d8, U+54e5-54e6, U+54fd, U+550f, U+5514, U+552e,
    U+5533, U+5539, U+5540, U+5545, U+554c, U+5557, U+555d, U+5563, U+557b,
    U+557e, U+5580, U+5583, U+5587, U+5599, U+559e-559f, U+55a8, U+55c7, U+55d4,
    U+55f7, U+55f9, U+55fd-55fe, U+5616, U+561b, U+5636, U+5638, U+564e, U+5650,
    U+566a-566c, U+5680, U+5686, U+568a, U+568f, U+5694, U+56a0, U+56ae, U+56b6,
    U+56c0, U+56c2, U+56c8, U+56ce, U+56d1, U+56d3, U+56d7-56d8, U+56f9, U+56ff,
    U+5704, U+5709, U+570d, U+5716, U+571c, U+5726, U+5737-5738, U+573b, U+5740,
    U+574e-574f, U+5761, U+5769, U+577f, U+5788-5789, U+5793, U+57a0, U+57a4,
    U+57aa, U+57b0, U+57b3, U+57c0, U+57c6, U+57d3-57d4, U+57d6, U+57e3,
    U+580a-580b, U+5819, U+581d, U+583d, U+584b, U+5852, U+5862, U+5870, U+5872,
    U+5885, U+58ab, U+58ae, U+58b8-58b9;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M029.woff")}) format("woff");
  unicode-range: U+58ba-58bb, U+58c5, U+58d1, U+58d3, U+58d7, U+58d9, U+58df,
    U+58e4-58e5, U+58f9, U+58fb-58fc, U+5902, U+590a, U+5910, U+5918, U+591b,
    U+592c-592d, U+5932, U+5938, U+593e, U+5950, U+595a, U+5960, U+5969, U+5981,
    U+598d, U+599b, U+599d, U+59a3, U+59b2, U+59c6, U+59d9-59da, U+59e8, U+5a09,
    U+5a11, U+5a1a, U+5a1c, U+5a1f, U+5a35, U+5a40, U+5a49, U+5a6a, U+5a6c,
    U+5abc-5abe, U+5ac2, U+5acb, U+5ad0, U+5ad6-5ad7, U+5ae3, U+5ae6, U+5ae9,
    U+5afa-5afb, U+5b0b, U+5b16, U+5b2a, U+5b36, U+5b3e, U+5b40, U+5b45, U+5b51,
    U+5b5a-5b5b, U+5b65, U+5b69, U+5b70-5b71, U+5b73, U+5b75, U+5b7a, U+5b80,
    U+5b83, U+5ba6, U+5bb8, U+5bc3, U+5bc9, U+5bd0, U+5bd4, U+5bde, U+5be4-5be5,
    U+5beb, U+5bf0, U+5bf3, U+5bf6, U+5c05, U+5c0d, U+5c13, U+5c20, U+5c22,
    U+5c28, U+5c38, U+5c46, U+5c4e, U+5c50, U+5c6c, U+5c6e, U+5c76, U+5c8c,
    U+5c91, U+5c94, U+5cab, U+5cb6-5cb7, U+5cbb-5cbc, U+5cbe, U+5cc5, U+5cc7,
    U+5ce9-5cea, U+5ced, U+5cfa, U+5d11, U+5d15, U+5d18-5d19, U+5d1b, U+5d1f,
    U+5d22, U+5d4b, U+5d4e, U+5d52, U+5d5c, U+5d6c, U+5d73, U+5d76, U+5d82,
    U+5d84, U+5d87, U+5d90, U+5d9d, U+5da2, U+5dac, U+5db7, U+5dbc, U+5dc9,
    U+5dcd, U+5dd2-5dd3, U+5ddb, U+5df5, U+5e0b, U+5e11, U+5e19-5e1a,
    U+5e43-5e44, U+5e4e, U+5e54, U+5e57, U+5e62, U+5e64, U+5e75-5e76, U+5e7a,
    U+5e7f, U+5ea0, U+5ec1-5ec2, U+5ec8, U+5ecf-5ed0, U+5ed6, U+5eda-5edb,
    U+5edd, U+5ee1-5ee2, U+5ee8-5ee9, U+5ef0-5ef1, U+5ef4, U+5ef8, U+5efe,
    U+5f03, U+5f09, U+5f0b-5f0d, U+5f11, U+5f16, U+5f29, U+5f2d, U+5f2f, U+5f38,
    U+5f41, U+5f4e, U+5f51, U+5f56, U+5f5c;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M030.woff")}) format("woff");
  unicode-range: U+5f5d, U+5f61, U+5f6d, U+5f73, U+5f82-5f83, U+5f87-5f88,
    U+5f91, U+5f99, U+5fad, U+5fbc, U+5fd6, U+5fdd, U+5fe4, U+5ff0-5ff1, U+5ff8,
    U+5ffb, U+5fff, U+600e-6010, U+6019, U+601b, U+6021, U+6026, U+6029, U+602b,
    U+6031, U+603a, U+6042, U+604a, U+6059-605a, U+605f-6060, U+6064, U+606c,
    U+6077, U+6081, U+6083, U+608b, U+6092, U+6096-6097, U+609a-609b, U+60b3,
    U+60b5, U+60bd, U+60c6, U+60d3, U+60d8, U+60f1, U+60f4, U+60f6-60f7, U+60fb,
    U+6100, U+6103, U+6106, U+610d-610e, U+6121, U+6127-6128, U+612c, U+6134,
    U+613d-613f, U+6142, U+614a, U+614d, U+6153, U+6158-615a, U+615d, U+615f,
    U+6165, U+616b, U+616f, U+6171, U+6173-6175, U+6177, U+6187, U+618a, U+6196,
    U+6199, U+61ba, U+61c6, U+61c8, U+61ca-61cd, U+61e6, U+61f4, U+61f6,
    U+61fd-61fe, U+6200, U+6209, U+6214, U+621b, U+621d-621e, U+6221, U+6233,
    U+624e, U+625b, U+625e, U+6260, U+6263, U+6268, U+627c, U+627e, U+6282-6283,
    U+6293-6294, U+6296, U+62ac, U+62bb, U+62c6-62c8, U+62ca, U+62cc, U+62cf,
    U+62d1, U+62ef, U+62f1, U+6302, U+6308, U+630c, U+6327, U+633e, U+634d,
    U+6350, U+636b, U+6376, U+6380, U+6389, U+638e, U+6396, U+63a3, U+63ab,
    U+63b5, U+63be, U+63c0, U+63d2, U+63e3, U+63e9, U+6406, U+640f, U+6413,
    U+6417, U+6428, U+6434, U+6436, U+644e, U+6467, U+6476, U+6488, U+6493,
    U+6495, U+64a9, U+64bb, U+64c2, U+64c5, U+64c7, U+64d2, U+64d4, U+64d8,
    U+64da, U+64e0, U+64e3, U+64e7, U+64ef, U+64f1, U+64f4, U+64f6, U+64fa,
    U+64fd, U+6500, U+6505, U+651c, U+6524, U+652c, U+6534-6535, U+6537;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M031.woff")}) format("woff");
  unicode-range: U+6538, U+6548, U+6555-6556, U+6558, U+655d-655e, U+6578,
    U+6588, U+659b, U+659f, U+65ab, U+65b7, U+65c1, U+65c3-65c4, U+65c6, U+65cc,
    U+65d2, U+65d9, U+65db, U+65e0-65e1, U+65f1, U+65fb, U+6603, U+661c, U+6636,
    U+663f, U+6641, U+6649, U+665e, U+6662, U+6664, U+6667, U+6683-6684, U+668e,
    U+6698, U+669d, U+66b8-66b9, U+66bc, U+66be, U+66c1, U+66c4, U+66da, U+66e0,
    U+66e6, U+66e9, U+66f5, U+66f7, U+670f, U+6716, U+671e, U+672e, U+6737-6738,
    U+673f, U+6741, U+6746, U+6759, U+6760, U+6763-6764, U+676a, U+6770,
    U+6772-6773, U+677c, U+6785, U+6789, U+678b-678c, U+67a6, U+67a9,
    U+67b3-67b4, U+67b8-67b9, U+67c6, U+67ce, U+67dd-67de, U+67e2, U+67e4,
    U+67e7, U+67ec, U+67ee-67ef, U+6829, U+682b, U+6832, U+6840, U+684d-684e,
    U+6859, U+6863, U+6874, U+6877, U+687e-687f, U+688d, U+688f, U+6894, U+68a0,
    U+68a6, U+68ad, U+68b9-68ba, U+68c6, U+68ca, U+68d4-68d5, U+68d7,
    U+68e0-68e1, U+68e3, U+68e7, U+68ef, U+6901, U+6904, U+6908, U+690c, U+690f,
    U+691a, U+6921-6923, U+6925-6926, U+6928, U+692a, U+6936, U+6939, U+693d,
    U+6954, U+6959, U+695c-695e, U+6961, U+696a-696b, U+696e, U+6974,
    U+6978-6979, U+697e, U+6981, U+6991, U+6995, U+69a0, U+69a7, U+69b1-69b2,
    U+69bb, U+69be-69bf, U+69c1, U+69ca, U+69ce, U+69d0, U+69d3, U+69dd-69de,
    U+69e7-69e8, U+69eb, U+69ed, U+69f2, U+69f9, U+6a0a, U+6a0c, U+6a12-6a14,
    U+6a1b, U+6a1e, U+6a22, U+6a2e, U+6a36, U+6a38, U+6a44, U+6a48, U+6a62,
    U+6a66, U+6a72;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M032.woff")}) format("woff");
  unicode-range: U+6a78, U+6a8d, U+6a90, U+6a97, U+6aa0, U+6aa3, U+6aaa, U+6aac,
    U+6ab3, U+6ab8, U+6ac1, U+6ad1, U+6ada, U+6ade-6adf, U+6aea, U+6afa, U+6b05,
    U+6b0a, U+6b16, U+6b1f, U+6b37-6b39, U+6b43, U+6b47, U+6b49, U+6b50, U+6b54,
    U+6b59, U+6b5b, U+6b5f, U+6b61, U+6b78-6b79, U+6b80, U+6b83-6b84, U+6b8d,
    U+6b95, U+6b98, U+6b9e, U+6ba4, U+6baa-6bab, U+6baf, U+6bb1, U+6bb3, U+6bbc,
    U+6bc6, U+6bcb, U+6bd3, U+6bdf, U+6bf3, U+6c08, U+6c13-6c14, U+6c1b, U+6c24,
    U+6c55, U+6c5e, U+6c62, U+6c68, U+6c73, U+6c7e, U+6c82, U+6c8d, U+6c90,
    U+6c92, U+6c9a-6c9b, U+6cae, U+6cb1, U+6cba, U+6cbd-6cbe, U+6cc5, U+6cd3,
    U+6cd7, U+6cd9, U+6cdd, U+6cef, U+6cf1, U+6d0c, U+6d19, U+6d2b, U+6d33,
    U+6d36, U+6d3d, U+6d5a, U+6d63-6d64, U+6d79, U+6d93, U+6d95, U+6db5,
    U+6dc5-6dc7, U+6dcc, U+6dd2, U+6dd5, U+6dd9, U+6dde, U+6de4, U+6de6, U+6dea,
    U+6dec, U+6dfa, U+6e0a, U+6e19, U+6e1d, U+6e1f, U+6e23-6e24, U+6e2b,
    U+6e2d-6e2e, U+6e3a, U+6e43, U+6e4d-6e4e, U+6e5f, U+6e6b, U+6e6e, U+6e72,
    U+6e76, U+6e82, U+6e8f, U+6e98, U+6e9f, U+6ea5, U+6eaa, U+6eaf, U+6eb2,
    U+6eb7, U+6ebd, U+6ec2, U+6ec4, U+6ecc, U+6ed3, U+6ed5, U+6eec, U+6ef7,
    U+6eff, U+6f13, U+6f3e, U+6f41, U+6f58, U+6f5b, U+6f66, U+6f6d, U+6f6f,
    U+6f74, U+6f78, U+6f7a, U+6f7c, U+6f80, U+6f82, U+6f86, U+6f8e, U+6f91,
    U+6fa1, U+6fa3, U+6fb3, U+6fc2, U+6fc6, U+6fd4, U+6fd8, U+6fdb, U+6fdf,
    U+6fec, U+6fee, U+6ff3, U+6ff6, U+6ffa, U+7001, U+7009, U+700b, U+700f,
    U+7011, U+7018, U+701a-701b, U+701d, U+7030, U+7032, U+7051, U+7063,
    U+70ae-70af, U+70b3, U+70cb, U+70dd, U+70df, U+70f1, U+70fd;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M033.woff")}) format("woff");
  unicode-range: U+711c, U+7156, U+7162, U+7165-7166, U+716c, U+7188, U+718f,
    U+7195, U+71a8, U+71ac, U+71b9, U+71c9, U+71d4, U+71df-71e0, U+71e7, U+71ec,
    U+71ee, U+71f9, U+71fc, U+720d, U+7210, U+7228, U+7230, U+723b-723c, U+723f,
    U+7246, U+724b, U+7258, U+7274, U+727e, U+7281-7282, U+7287, U+7292, U+7296,
    U+72a2, U+72a7, U+72b2, U+72b9, U+72c3, U+72c6, U+72ce, U+72d2, U+72e0,
    U+72e2, U+72f7, U+730a, U+7316-7317, U+731d, U+7329, U+732f, U+7334, U+734e,
    U+7357, U+7368, U+736a, U+7375, U+737a-737b, U+73b3, U+73bb, U+73ce, U+73de,
    U+73e5, U+73ee, U+73f1, U+73f8, U+7405, U+743a, U+743f, U+7441, U+7459,
    U+745f, U+7463-7464, U+7469-746a, U+746f-7470, U+747e, U+749e, U+74a2,
    U+74ca, U+74cf, U+74d4, U+74e0, U+74e3, U+74e7, U+74e9, U+74ee, U+74f0-74f2,
    U+74f7-74f8, U+7503-7505, U+750c-750e, U+7513, U+751e, U+752c, U+7538,
    U+753c, U+7544, U+7546, U+7549-754b, U+754d, U+755a-755b, U+7564, U+7567,
    U+7569, U+756b, U+756d, U+7574, U+7578, U+7582, U+7589, U+7594, U+759a,
    U+759d, U+75a3, U+75a5, U+75b3, U+75b8, U+75bd, U+75c2-75c3, U+75ca, U+75cd,
    U+75de, U+75f2-75f3, U+75fc, U+75fe-75ff, U+7601, U+7609, U+760b,
    U+761f-7620, U+7622, U+7627, U+7630, U+7634, U+763b, U+7646, U+7648, U+7658,
    U+765c, U+7661-7662, U+7667-7669, U+766c, U+7670, U+7672, U+7676, U+7678,
    U+767c, U+7680, U+7683, U+7688, U+768b, U+768e, U+7696, U+7699-769a, U+76b0,
    U+76b4, U+76b7-76b9, U+76c2, U+76cd, U+76d2, U+76d6, U+76de, U+76ea, U+76fb,
    U+7704, U+7707-7708, U+771b, U+7724-7726, U+7737;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M034.woff")}) format("woff");
  unicode-range: U+7747, U+775a-775b, U+7765, U+7779, U+777f, U+778b, U+778e,
    U+77b6, U+77b9, U+77bb, U+77bd, U+77bf, U+77c7, U+77cd, U+77d7, U+77da,
    U+77e3, U+77fc, U+780c, U+7812, U+7820, U+7845, U+7874, U+787c, U+7886,
    U+788c, U+789a, U+78a3, U+78aa, U+78af, U+78b5, U+78bc, U+78be, U+78c5-78c6,
    U+78ca-78cb, U+78d1, U+78e7, U+78ec, U+78f4, U+78fd, U+7907, U+7911-7912,
    U+7919, U+7926, U+792a, U+792c, U+7957, U+795a, U+797a, U+7980, U+798a,
    U+799d, U+79a7, U+79b3, U+79ba, U+79c9, U+79d5, U+79e1, U+79e7, U+79ec,
    U+7a08, U+7a0d, U+7a18-7a19, U+7a20, U+7a31, U+7a37, U+7a3e, U+7a43, U+7a49,
    U+7a61, U+7a69, U+7a7d, U+7a88, U+7a95-7a98, U+7ab0, U+7ab6, U+7abf, U+7ac5,
    U+7ac7, U+7aca, U+7acd, U+7acf, U+7ad2-7ad3, U+7ad5, U+7ada, U+7add,
    U+7ae1-7ae2, U+7aed, U+7af0, U+7af8, U+7b02, U+7b04, U+7b06, U+7b0a-7b0b,
    U+7b0f, U+7b18, U+7b1e, U+7b28, U+7b33, U+7b35-7b36, U+7b45, U+7b4c, U+7b50,
    U+7b5d, U+7b65, U+7b6c, U+7b6e, U+7b70-7b71, U+7b74, U+7b7a, U+7b8d, U+7b8f,
    U+7b98-7b9a, U+7b9c-7b9d, U+7b9f, U+7bb4, U+7bc1, U+7bc6, U+7bcb-7bcc,
    U+7bcf, U+7be5-7be6, U+7be9, U+7bf3, U+7bf6-7bf7, U+7c07, U+7c0d,
    U+7c11-7c14, U+7c17, U+7c1f, U+7c23, U+7c27, U+7c2b, U+7c37, U+7c3d, U+7c40,
    U+7c43, U+7c4c, U+7c4f, U+7c54, U+7c56, U+7c58, U+7c5f, U+7c64-7c65, U+7c6c,
    U+7c75, U+7c83, U+7c90, U+7ca1-7ca2, U+7ca4, U+7ca8, U+7cab, U+7cad,
    U+7cb1-7cb3, U+7cbd, U+7cc0, U+7cc2, U+7cc5, U+7cd2, U+7cd8, U+7cdc, U+7ce2,
    U+7cef, U+7cf2, U+7cf4;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M035.woff")}) format("woff");
  unicode-range: U+7cf6, U+7d02, U+7d06, U+7d0a, U+7d15, U+7d1c, U+7d2e, U+7d32,
    U+7d35, U+7d3f, U+7d45, U+7d4b, U+7d4e-7d4f, U+7d56, U+7d5b, U+7d6e, U+7d73,
    U+7d7d, U+7d89, U+7d8f, U+7d9b, U+7d9f, U+7da2-7da3, U+7dab, U+7dae-7db0,
    U+7db5, U+7dc7, U+7dd5, U+7dd8, U+7ddc-7ddd, U+7de1, U+7de4, U+7df2, U+7e05,
    U+7e09, U+7e12, U+7e1f, U+7e21-7e22, U+7e32, U+7e35, U+7e39-7e3b, U+7e3d,
    U+7e43, U+7e46, U+7e56, U+7e59-7e5a, U+7e5d-7e5e, U+7e66-7e67, U+7e69-7e6a,
    U+7e79, U+7e7b-7e7d, U+7e7f, U+7e83, U+7e88-7e89, U+7e8c, U+7e8e, U+7e90,
    U+7e92-7e94, U+7e9b-7e9c, U+7f38, U+7f45, U+7f4c-7f4e, U+7f50-7f51,
    U+7f54-7f55, U+7f58, U+7f5f, U+7f67-7f69, U+7f78, U+7f82-7f83, U+7f86-7f88,
    U+7f94, U+7f9d, U+7fa3, U+7fae-7faf, U+7fb2, U+7fb6, U+7fb8-7fb9, U+7fc6,
    U+7fca, U+7fd5, U+7fe1, U+7fe6, U+7fe9, U+7ff9, U+8004, U+800b, U+8012,
    U+8018-8019, U+801c, U+8021, U+8028, U+803b, U+803f, U+8046, U+804a, U+8052,
    U+8062, U+8068, U+8072, U+8076, U+8079, U+807f, U+8084-8086, U+8093,
    U+80ac-80ad, U+80c4, U+80d6, U+80d9, U+80db, U+80dd, U+80e5, U+80ef, U+80fc,
    U+8109, U+8123, U+812f, U+813e, U+8146, U+8153, U+815f, U+8165-8166, U+816e,
    U+8174, U+8182-8183, U+8188, U+818a, U+8193, U+8195, U+81a4, U+81a9, U+81b0,
    U+81b8, U+81ba, U+81bd-81be, U+81c8-81c9, U+81d1, U+81d8-81da, U+81e0,
    U+81e7, U+81fb, U+81fe, U+8202, U+8209-820a, U+820d, U+8212, U+8216, U+822e,
    U+8238, U+8240, U+8259-825a, U+825d, U+825f, U+8262, U+8264, U+8268, U+826a,
    U+8271, U+8277;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M036.woff")}) format("woff");
  unicode-range: U+828d, U+829f, U+82ab-82ac, U+82d2, U+82d9, U+82dc,
    U+82de-82df, U+82e1, U+82e3, U+82f3-82f4, U+82f9, U+82fb, U+8303, U+8306,
    U+8316-8318, U+8323, U+832f, U+8331-8332, U+8334-8335, U+8345, U+8350,
    U+8373, U+8375, U+8385, U+8387, U+838e, U+8393, U+8396, U+839a, U+839f-83a0,
    U+83a8, U+83aa, U+83b5, U+83bd, U+83c1, U+83ce, U+83d8, U+83e0, U+83f2,
    U+83f4, U+83f7, U+83fb, U+83fd, U+8403, U+8407, U+840b, U+840d, U+8413,
    U+8422, U+842a, U+8435, U+8438, U+843c, U+8446, U+8462, U+8469, U+846b,
    U+846e-846f, U+8477, U+8479, U+8482, U+8484, U+849f, U+84a1, U+84ad, U+84b9,
    U+84bb, U+84bf, U+84c1, U+84c6, U+84ca, U+84cd, U+84d0, U+84d6, U+84d9-84da,
    U+84f4, U+84fc, U+84ff, U+8506, U+8514-8515, U+8517-8518, U+851f, U+852c,
    U+8540-8541, U+8548, U+854b, U+8555, U+8558, U+855a, U+8563, U+856d, U+8577,
    U+8580, U+8588, U+858a, U+8590-8591, U+859b-859c, U+85a4, U+85a8,
    U+85b9-85ba, U+85d0, U+85d5, U+85dc, U+85f9-85fa, U+85fe, U+8602,
    U+860a-860b, U+8613, U+8616-8617, U+861a, U+8622, U+862f-8630, U+863f,
    U+864d, U+865f, U+8667, U+8671, U+868b-868c, U+8693, U+86a3, U+86a9-86ab,
    U+86af-86b0, U+86b6, U+86c4, U+86d4, U+86de-86df, U+86e9, U+86ec, U+86ef,
    U+86f9, U+86fb, U+8703, U+8706, U+8708-870a, U+870d, U+8711-8712, U+871a,
    U+8725, U+8729, U+8734, U+8737, U+873f, U+874c, U+874e, U+8753, U+8757,
    U+8759, U+875f-8760, U+8763, U+8768, U+876a, U+876e, U+8774, U+8778, U+8782,
    U+879f, U+87ab;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M037.woff")}) format("woff");
  unicode-range: U+87af, U+87b3, U+87bb, U+87bd, U+87c0, U+87c4, U+87c6, U+87cb,
    U+87d0, U+87d2, U+87ef, U+87f2, U+87f6-87f7, U+87fe, U+880e-880f, U+8811,
    U+8815-8816, U+8821, U+8827, U+8831, U+8836, U+8839, U+883b, U+8842, U+8844,
    U+884d, U+8859, U+8862, U+886b, U+8872, U+8875, U+887d-887e, U+888d, U+8892,
    U+8897, U+8899, U+889e, U+88a4, U+88ae, U+88b0, U+88b5, U+88bf, U+88c4,
    U+88d8-88d9, U+88e8, U+88f2, U+88f4, U+88f9, U+88fc, U+8902, U+890a, U+8913,
    U+891d-891e, U+8925, U+892b, U+8936, U+8938, U+893b, U+8941, U+8943,
    U+894c-894d, U+8960, U+8964, U+896a, U+896d, U+896f, U+8974, U+897e, U+8983,
    U+8988, U+898a, U+8993, U+8998, U+89a1, U+89a6, U+89a9, U+89ac, U+89af,
    U+89b2, U+89ba, U+89bf-89c0, U+89da, U+89dc-89dd, U+89e7, U+89f4, U+89f8,
    U+8a0c, U+8a10, U+8a16, U+8a36, U+8a41, U+8a46, U+8a48, U+8a52, U+8a5b,
    U+8a6c-8a6d, U+8a7c, U+8a82, U+8a84, U+8a91, U+8a9a, U+8aa1, U+8aa3, U+8aa5,
    U+8aa8, U+8ac2, U+8ada-8adb, U+8ade, U+8ae0-8ae2, U+8ae4, U+8af1, U+8af3,
    U+8b07, U+8b0c, U+8b14, U+8b1a, U+8b26, U+8b28, U+8b2b, U+8b3e, U+8b41,
    U+8b49, U+8b4c, U+8b4e-8b4f, U+8b56, U+8b5b, U+8b5f, U+8b6b, U+8b6f, U+8b71,
    U+8b74, U+8b7d, U+8b8a, U+8b8c, U+8b8e, U+8b92, U+8b96, U+8b99-8b9a, U+8c3a,
    U+8c3f, U+8c41, U+8c48, U+8c4c, U+8c4e, U+8c50, U+8c55, U+8c62, U+8c6b-8c6c,
    U+8c78, U+8c7a, U+8c7c, U+8c82, U+8c85, U+8c89-8c8a, U+8c8d-8c8e, U+8c94,
    U+8c98, U+8cad-8cae, U+8cb2-8cb3, U+8cbd, U+8cc1, U+8ccd, U+8cda,
    U+8cfa-8cfb, U+8d07, U+8d0a, U+8d0d;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M038.woff")}) format("woff");
  unicode-range: U+8d0f-8d10, U+8d13, U+8d67, U+8d6d, U+8d71, U+8d81, U+8dba,
    U+8dc2, U+8dcc, U+8dcf, U+8dd6, U+8dda-8ddb, U+8ddf, U+8de3, U+8deb, U+8dfc,
    U+8dff, U+8e08-8e09, U+8e10, U+8e1d-8e1f, U+8e30, U+8e34, U+8e47-8e4a,
    U+8e4c, U+8e50, U+8e55, U+8e59, U+8e60, U+8e63-8e64, U+8e76, U+8e7c, U+8e84,
    U+8e8b, U+8e94, U+8ea1, U+8eaa, U+8eac, U+8ec5-8ec6, U+8ec8, U+8edb, U+8ee3,
    U+8efb-8efc, U+8efe, U+8f05, U+8f0a, U+8f0c, U+8f12-8f13, U+8f15, U+8f19,
    U+8f1c, U+8f1f, U+8f26, U+8f33, U+8f39, U+8f3b, U+8f3e, U+8f42, U+8f45-8f46,
    U+8f4c, U+8f4e, U+8f57, U+8f5c, U+8f63-8f64, U+8f9c, U+8fa7-8fa8,
    U+8fad-8faf, U+8fb7, U+8fda, U+8fe2, U+8fe5, U+8fef, U+8ff4, U+8ff9-8ffa,
    U+9005, U+900b, U+900e, U+9011, U+9015-9016, U+9027, U+9035-9036, U+9039,
    U+903e, U+9049, U+904f-9052, U+9056, U+9058, U+905e, U+9068, U+906f, U+9072,
    U+9076, U+9080, U+9082-9083, U+908f, U+90a8, U+90af, U+90b1, U+90b5, U+90db,
    U+90e2, U+9102, U+9112, U+9130, U+9132, U+914a, U+9156, U+9158, U+9163,
    U+9165, U+9169, U+9172-9173, U+9182, U+918b, U+91a2, U+91aa-91ab, U+91af,
    U+91b4-91b5, U+91ba, U+91c1, U+91cb, U+91d0, U+91d6, U+91db, U+91df, U+91e1,
    U+91f5-91f6, U+91fc, U+91ff, U+9211, U+9214-9215, U+921e, U+9229, U+922c,
    U+923f, U+9245, U+924b, U+9250, U+9257, U+925a, U+925e, U+9293, U+9295-9296,
    U+92b7, U+92b9, U+92e9, U+92fa, U+9319-931a, U+9322-9323, U+9335,
    U+933a-933b, U+9344, U+9356, U+935c, U+9360, U+936e;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M039.woff")}) format("woff");
  unicode-range: U+9394, U+93ac, U+93b0, U+93b9, U+93c3, U+93c8, U+93d0,
    U+93d6-93d8, U+93dd, U+93e4-93e5, U+93e8, U+9403, U+9407, U+9410,
    U+9413-9414, U+941a, U+9421, U+942b, U+9436, U+943a, U+9441, U+9452,
    U+945a-945b, U+945e, U+9460, U+9462, U+946a, U+9470, U+9475, U+9477, U+947c,
    U+947e, U+9481, U+9582, U+9587, U+958a, U+9594, U+9596, U+9598-9599, U+95a0,
    U+95a7, U+95ad, U+95b9, U+95bc, U+95be, U+95c3, U+95cc-95cd, U+95d4-95d6,
    U+95dc, U+95e1-95e2, U+95e5, U+9621, U+9628, U+962e-962f, U+9642,
    U+964b-964c, U+964f, U+965c-965f, U+9666, U+966c, U+9672, U+968d, U+9695,
    U+9697-9698, U+96a7-96a8, U+96b0-96b2, U+96b4, U+96b6, U+96b8-96b9, U+96c9,
    U+96cb, U+96ce, U+96d5-96d6, U+96d9, U+96f9, U+9704, U+9706, U+9708,
    U+970d-970f, U+9711, U+9713, U+9719, U+9724, U+972a, U+9730, U+9738-9739,
    U+973d-973e, U+9742, U+9746, U+9748-9749, U+9760, U+9764, U+9766, U+9768,
    U+976b, U+9771, U+9779-977a, U+977c, U+9781, U+9785-9786, U+978f-9790,
    U+979c, U+97a3, U+97a6, U+97a8, U+97ab, U+97b3-97b4, U+97c3, U+97c6, U+97c8,
    U+97cb, U+97dc, U+97ed, U+97f2, U+97f5-97f6, U+980f, U+9821, U+9846, U+984b,
    U+984f, U+9871, U+9873-9874, U+98aa, U+98b1, U+98b6, U+98c3, U+98c6, U+98e9,
    U+98eb, U+98ed-98ee, U+9912, U+9914, U+9918, U+991d, U+9920-9921, U+9924,
    U+992c, U+992e, U+993d-993e, U+9942, U+994b-994c, U+9950-9951, U+9955,
    U+9997, U+99a5, U+99bc, U+99d1, U+99d8, U+99db, U+99df, U+99e2, U+99ed-99ee,
    U+99f2, U+99f8, U+99fb, U+9a01, U+9a05, U+9a0f, U+9a2b;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M040.woff")}) format("woff");
  unicode-range: U+9a3e, U+9a40, U+9a42-9a43, U+9a45, U+9a5b, U+9a5f, U+9a62,
    U+9a64-9a65, U+9a69-9a6b, U+9aad, U+9ab0, U+9abc, U+9ac0, U+9acf, U+9ad1,
    U+9ad3-9ad4, U+9ade-9adf, U+9ae2-9ae3, U+9ae6, U+9aeb, U+9af1, U+9af4,
    U+9afb, U+9b06, U+9b18, U+9b1f, U+9b23, U+9b25, U+9b27, U+9b29-9b2a,
    U+9b2e-9b2f, U+9b32, U+9b3b, U+9b43, U+9b4d-9b4e, U+9b51, U+9b58, U+9b74,
    U+9b83, U+9b91, U+9b93, U+9b96-9b97, U+9b9f-9ba0, U+9bb4, U+9bb9, U+9bc0,
    U+9bc6, U+9bca, U+9bcf, U+9bd1-9bd2, U+9bd4, U+9be1-9be4, U+9bf0-9bf2,
    U+9c04, U+9c06, U+9c08-9c09, U+9c0c, U+9c12, U+9c14-9c15, U+9c1b, U+9c21,
    U+9c24-9c25, U+9c2e, U+9c30, U+9c32, U+9c3e, U+9c46-9c47, U+9c5a, U+9c60,
    U+9c67, U+9c76, U+9c78, U+9ce7, U+9ceb-9cec, U+9cf0, U+9d03, U+9d06, U+9d08,
    U+9d12, U+9d15, U+9d1f, U+9d23, U+9d26, U+9d2a, U+9d3e-9d3f, U+9d41, U+9d44,
    U+9d46, U+9d48, U+9d50-9d51, U+9d59, U+9d5d-9d5e, U+9d64, U+9d6f, U+9d72,
    U+9d7a, U+9d87, U+9d89, U+9d9a, U+9da4, U+9da9, U+9dab, U+9db2, U+9db8,
    U+9dba-9dbb, U+9dc1-9dc2, U+9dc6, U+9dcf, U+9dd3, U+9dd9, U+9de6, U+9ded,
    U+9def, U+9df8, U+9dfd, U+9e1a-9e1b, U+9e75, U+9e79, U+9e7d, U+9e81, U+9e88,
    U+9e8b-9e8c, U+9e91, U+9e95, U+9e9d, U+9ea5, U+9eaa, U+9ead, U+9eb8, U+9ebc,
    U+9ecc, U+9ecf-9ed0, U+9ed4, U+9edc-9ede, U+9ee0, U+9ee5, U+9ee8, U+9eef,
    U+9ef6-9ef7, U+9ef9, U+9efb-9efd, U+9f07-9f08, U+9f15, U+9f21, U+9f2c,
    U+9f4e-9f4f, U+9f52, U+9f54, U+9f5f-9f61, U+9f63, U+9f66, U+9f6a, U+9f6c,
    U+9f72, U+9f76-9f77, U+9f9c-9f9d, U+9fa0;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M041.woff")}) format("woff");
  unicode-range: U+4e28, U+4ee1, U+4f00, U+4f03, U+4f56, U+4f8a, U+4f92, U+4f94,
    U+4f9a, U+4fc9, U+501e, U+5022, U+5040, U+5042, U+5046, U+5070, U+5094,
    U+514a, U+519d, U+5215, U+52a6, U+52af, U+52db, U+5300, U+5307, U+5324,
    U+5393, U+53b2, U+548a, U+549c, U+54a9, U+54ff, U+5586, U+57ac, U+57c7-57c8,
    U+590b, U+595b, U+595d, U+59a4, U+59f8, U+5b56, U+5bc0, U+5bd8, U+5c1e,
    U+5c62, U+5ca6, U+5cba, U+5d27, U+5d42, U+5d53, U+5d6d, U+5db8-5db9, U+5e77,
    U+5f34, U+5f67, U+5fde, U+608a, U+60d5, U+60f2, U+6130, U+6137, U+6198,
    U+62a6, U+63f5, U+6460, U+649d, U+64ce, U+6522, U+6600, U+6609, U+6615,
    U+661e, U+6624, U+6631, U+6659, U+6665, U+6673, U+66a0, U+66b2, U+66fa-66fb,
    U+6766, U+67bb, U+67c0, U+6801, U+6852, U+68c8, U+6968, U+69e2, U+6a73,
    U+6ae4, U+6bd6, U+6c5c, U+6c86, U+6d04, U+6d87, U+6dac, U+6dfc, U+6e5c,
    U+6f51, U+6f88, U+6ff5, U+7005, U+7085, U+70ab, U+710f, U+7146-7147, U+715c,
    U+71c1, U+71fe, U+72be, U+73c9, U+73d6, U+73e3, U+7407, U+7426, U+742a,
    U+742e, U+7462, U+7489, U+749f, U+7501, U+752f, U+756f, U+769b, U+769e,
    U+76a6, U+7746, U+7762, U+784e, U+7aeb, U+7b9e, U+7d48, U+7d5c, U+7e52,
    U+7e8a, U+7f47, U+8301, U+8362, U+83c7, U+8448, U+84b4, U+8559, U+88f5,
    U+891c, U+8a12, U+8a37, U+8a79, U+8aa7, U+8adf, U+8af6, U+8d12, U+9115,
    U+91b1, U+91d7, U+91e4-91e5, U+91ed, U+9210, U+9239-923a, U+923c, U+9240,
    U+9278, U+9288, U+92d3, U+92e0, U+92ff, U+9321, U+9325, U+9348, U+9370,
    U+93c6, U+93de, U+969d, U+9733, U+973b, U+974d, U+974f, U+9857, U+9865,
    U+999e, U+9a4e, U+9b72, U+9b75, U+9b8f, U+9c00, U+9d70, U+f9dc, U+fa0f-fa10,
    U+fa14-fa15, U+fa36, U+fa6a;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M042.woff")}) format("woff");
  unicode-range: U+2e8e, U+2e90, U+2e92-2e94, U+2e99, U+2e9b, U+2e9f-2ea0,
    U+2ec1, U+2ec4, U+2ed1, U+2ed8, U+2ee4, U+2ee8-2ee9, U+2eeb, U+2eed, U+2eef,
    U+2ef2, U+2f00-2f13, U+4efc, U+4f39, U+4fcd, U+4fff, U+50d8, U+50f4, U+5164,
    U+51be, U+51ec, U+529c, U+52c0, U+5372, U+53dd, U+5759, U+5765, U+58b2,
    U+5953, U+5963, U+59ba, U+5cf5, U+5dd0, U+5f21, U+605d, U+6085, U+60de,
    U+6111, U+6120, U+6213, U+654e, U+662e, U+663b, U+6657, U+6699, U+66bf,
    U+670e, U+6844, U+68cf, U+6998, U+6a30, U+6a46, U+6a7e, U+6ae2, U+6c3f,
    U+6c6f, U+6cda, U+6d6f, U+6d96, U+6dcf, U+6df2, U+6df8, U+6e27, U+6e39,
    U+6e3c, U+6ebf, U+6fb5, U+7007, U+70bb, U+7104, U+72b1, U+7324, U+7377,
    U+73bd, U+73d2, U+73f5, U+7429, U+7682, U+769c, U+7821, U+7864, U+787a,
    U+7930, U+7994, U+799b, U+7ad1, U+7ae7, U+7db7, U+7fa1, U+837f, U+83f6,
    U+84dc, U+853e, U+8553, U+856b, U+8807, U+8abe, U+8b53, U+8b7f, U+8cf0,
    U+8d76, U+8ecf, U+9067, U+91da, U+91de, U+91ee, U+9206, U+920a, U+924e,
    U+9251, U+9259, U+9267, U+9277, U+92a7, U+92d0, U+92d5, U+92d7, U+92d9,
    U+92e7, U+92f9, U+92fb, U+9302, U+931d-931e, U+9357, U+93a4, U+93f8, U+9431,
    U+9445, U+9448, U+9592, U+96af, U+9743, U+9751, U+9755, U+9927, U+9adc,
    U+9bb1, U+9bbb, U+9d6b, U+9e19, U+fa0e, U+fa12-fa13, U+fa17-fa18,
    U+fa1c-fa1e, U+fa20-fa21, U+fa23-fa25, U+fa27-fa2d;
}
@font-face {
  font-family: "UDDigiKyokashoN-M";
  src: url(${createAssetUri("UDDigiKyokashoN-M043.woff")}) format("woff");
  unicode-range: U+2f14-2f38, U+2f3a-2f66, U+2f68-2f70, U+2f72-2fa0, U+2fa2-2fc7,
    U+2fc9-2fd5, U+3d4e, U+67fa, U+6805, U+688e, U+8346, U+f992-f993, U+f999,
    U+f9c3, U+f9ec, U+21a1a, U+243d0, U+25874, U+28cdd, U+28ef6, U+2f80f,
    U+2f818, U+2f877, U+2f884, U+2f8d3, U+2f8dc, U+2f8ed, U+2f920;
}
.lectureFont * {
    font-family: "UDDigiKyokashoN-M";
}
`;
