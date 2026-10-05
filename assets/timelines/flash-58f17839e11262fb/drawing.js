// Original vectors and timeline: 정기수 교수님. Converted with FFDec 26.3.0.
var scalingGrids = {};
var boundRects = {};
function shape1(ctx,ctrans,frame,ratio,time){
	var pathData="M 4175 -1625 Q 4193 -1836 4225 -2014 4300 -2429 4406 -2429 4511 -2429 4585 -2014 4614 -1854 4632 -1668 L 4648 -1462 4649 -1448 4732 -1470 5274 -1614 5272 -1555 5269 -1505 4549 -1310 4545 -1454 4535 -1649 4515 -1905 Q 4477 -2308 4416 -2308 4356 -2308 4308 -1905 4292 -1772 4281 -1625 4274 -1536 4270 -1442 L 4270 -1432 4262 -1203 4260 -1023 4260 -1008 4260 -998 4260 -975 4260 -860 4263 -697 4266 -569 4267 -553 4271 -462 Q 4280 -257 4299 -88 L 4304 -49 Q 4322 102 4344 180 4368 265 4396 259 4437 249 4475 66 L 4503 -101 Q 4524 -246 4536 -422 L 4542 -523 4543 -530 4549 -675 4558 -678 4561 -679 4993 -821 5240 -902 5235 -801 5221 -797 4778 -652 4651 -611 4644 -502 4642 -474 4635 -389 Q 4616 -186 4585 -13 L 4554 137 Q 4490 402 4406 403 4373 402 4344 364 4277 275 4225 -13 L 4212 -92 Q 4185 -264 4170 -462 L 4164 -547 4164 -554 Q 4159 -625 4157 -698 4153 -777 4152 -860 L 4151 -999 4151 -1008 4151 -1013 4151 -1023 4153 -1203 4161 -1432 4162 -1442 Q 4167 -1537 4175 -1625";
	drawPath(ctx,pathData,false);
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	ctx.fill("evenodd");
	ctx.save();
	ctx.clip();
	ctx.transform(0.0418548583984375,9.1552734375E-4,-0.0038909912109375,0.1733245849609375,4584,-1068);
	var grd=ctx.createRadialGradient(0.0,0,0,0,0,16384);
	grd.addColorStop(0,tocolor(ctrans.apply([255,255,255,1])));
	grd.addColorStop(1,tocolor(ctrans.apply([0,0,0,1])));
	ctx.fillStyle = grd;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M 4732 -1470 L 4648 -1462";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,0,255,1]));
	ctx.lineWidth=1.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 4063 -1203 L 4063 -1023 4063 -860 4063 -723 M 4071 -1023 L 4071 -1203 4071 -1351 M 4071 -1023 L 4071 -860 4071 -721 M 4063 -1358 L 4063 -1203";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([255,0,0,1]));
	ctx.lineWidth=2.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 2609 -2448 Q 2706 -2306 2821 -2186 2901 -2102 2993 -2035 3174 -1903 3372 -1819 3564 -1736 3758 -1685 3913 -1645 4072 -1632 L 4175 -1625 M 4632 -1668 Q 4731 -1691 4828 -1724 L 4857 -1733 Q 5020 -1788 5174 -1871 5358 -1974 5523 -2116 5735 -2298 5906 -2480 M 4281 -1625 L 4454 -1637 4535 -1649 M 4262 -1203 L 4857 -1225 Q 5385 -1261 5918 -1353 M 4162 -1442 Q 3312 -1446 2448 -1723 M 4071 -1203 L 4063 -1203 Q 3246 -1215 2438 -1363 M 4063 -1023 L 4071 -1023 4151 -1023 M 4071 -860 L 4152 -860 M 4153 -1203 L 4071 -1203 M 4270 -1442 L 4545 -1454 M 4164 -554 L 3981 -541 Q 3791 -518 3608 -455 3429 -398 3262 -308 3077 -206 2912 -63 2700 119 2529 302 M 4778 -652 L 4857 -640 Q 5364 -554 5868 -343 M 4071 -860 L 4063 -860 Q 3245 -852 2428 -693 M 4267 -553 L 4363 -546 4542 -523 M 5827 270 Q 5729 127 5615 7 5534 -77 5443 -144 5261 -276 5064 -360 L 4857 -439 Q 4767 -470 4677 -493 L 4644 -502 M 4561 -679 L 4263 -697 M 4260 -860 L 4857 -833 4993 -821 M 5221 -797 Q 5573 -754 5925 -686 M 5272 -1555 Q 5623 -1629 5973 -1745 M 4260 -1023 L 5927 -1023 M 4157 -698 Q 3302 -697 2438 -343 M 2408 -1023 L 4063 -1023";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([255,0,255,1]));
	ctx.lineWidth=1.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 4175 -1625 Q 4193 -1836 4225 -2014 4300 -2429 4406 -2429 4511 -2429 4585 -2014 4614 -1854 4632 -1668 L 4648 -1462 4649 -1448 4732 -1470 5274 -1614 5272 -1555 5269 -1505 4549 -1310 4545 -1454 4535 -1649 4515 -1905 Q 4477 -2308 4416 -2308 4356 -2308 4308 -1905 4292 -1772 4281 -1625 4274 -1536 4270 -1442 L 4270 -1432 4262 -1203 4260 -1023 4260 -1008 4260 -998 4260 -975 4260 -860 4263 -697 4266 -569 4267 -553 4271 -462 Q 4280 -257 4299 -88 L 4304 -49 Q 4322 102 4344 180 4368 265 4396 259 4437 249 4475 66 L 4503 -101 Q 4524 -246 4536 -422 L 4542 -523 4543 -530 4549 -675 4558 -678 4561 -679 4993 -821 5240 -902 5235 -801 5221 -797 4778 -652 4651 -611 4644 -502 4642 -474 4635 -389 Q 4616 -186 4585 -13 L 4554 137 Q 4490 402 4406 403 4373 402 4344 364 4277 275 4225 -13 L 4212 -92 Q 4185 -264 4170 -462 L 4164 -547 4164 -554 Q 4159 -625 4157 -698 4153 -777 4152 -860 L 4151 -999 4151 -1008 4151 -1013 4151 -1023 4153 -1203 4161 -1432 4162 -1442 Q 4167 -1537 4175 -1625 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([102,102,102,1]));
	ctx.lineWidth=1.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -2143 -1896 L -2138 -1953 -2130 -2025 -2121 -2056 Q -2109 -2089 -2076 -2102 -2046 -2115 -2014 -2109 -1975 -2117 -1941 -2092 L -1932 -2077 Q -1922 -2057 -1925 -2030 L -1935 -1960 -1947 -1906 -1962 -1904 -2023 -1893 -2082 -1893 -2143 -1896";
	ctx.fillStyle=tocolor(ctrans.apply([255,255,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -1928 -2083 L -1893 -2054 Q -1873 -2037 -1858 -2013 L -1833 -1966 Q -1823 -1941 -1823 -1914 L -1822 -1839 -1824 -1763 Q -1826 -1726 -1836 -1691 L -1844 -1641 -1846 -1571 -1852 -1498 -1861 -1425 -1866 -1352 -1861 -1276 -1842 -1204 Q -1830 -1172 -1811 -1142 L -1767 -1087 -1720 -1041 -1675 -1004 -1653 -986 Q -1670 -1023 -1643 -1055 L -1597 -1102 Q -1566 -1129 -1531 -1136 L -1456 -1146 -1378 -1149 -1312 -1140 -1245 -1132 -1204 -1131 -1160 -1135 -1116 -1136 -1040 -1127 -968 -1109 Q -931 -1100 -902 -1076 L -854 -1025 Q -834 -997 -822 -965 -811 -936 -807 -904 -804 -875 -804 -846 -805 -811 -817 -774 -828 -740 -856 -720 L -827 -663 Q -814 -633 -817 -599 -820 -566 -829 -531 -838 -497 -861 -464 L -902 -415 -941 -382 Q -926 -353 -927 -319 -927 -291 -932 -262 L -950 -195 Q -962 -156 -986 -131 L -1036 -78 -1088 -24 -1126 6 -1140 14 -1166 126 -1178 150 -1226 220 Q -1249 257 -1284 282 L -1318 307 Q -1365 343 -1422 358 -1596 393 -1773 404 L -1849 402 -1922 402 -1992 402 -2068 398 -2142 392 -2205 387 -2278 380 -2335 367 -2408 347 -2481 329 -2633 314 -2708 315 -2785 318 -2859 320 -3001 329 -3001 -631 -2782 -650 Q -2746 -650 -2719 -674 L -2666 -724 -2615 -777 -2571 -834 -2534 -894 -2500 -957 -2469 -1024 -2441 -1093 -2409 -1161 -2373 -1224 -2335 -1287 -2296 -1350 -2269 -1400 -2248 -1457 -2238 -1507 -2222 -1579 -2206 -1650 -2194 -1715 -2183 -1769 Q -2177 -1805 -2161 -1839 L -2143 -1896 -2082 -1893 -2023 -1893 -1962 -1904 -1947 -1906 -1935 -1960 -1925 -2030 Q -1922 -2057 -1932 -2077 L -1928 -2083 M -2065 -1659 Q -2104 -1669 -2140 -1660 -2104 -1669 -2065 -1659 M -2045 -1738 L -2063 -1739 Q -2107 -1743 -2135 -1720 -2107 -1743 -2063 -1739 L -2045 -1738 M -1078 -1030 L -1090 -1017 -1118 -999 -1164 -986 -1229 -983 -1304 -978 -1379 -973 -1456 -973 -1532 -974 -1606 -974 -1653 -986 -1606 -974 -1532 -974 -1456 -973 -1379 -973 -1304 -978 -1229 -983 -1164 -986 -1118 -999 -1090 -1017 -1078 -1030 M -1276 -1010 Q -1283 -1034 -1280 -1063 -1276 -1106 -1245 -1132 -1276 -1106 -1280 -1063 -1283 -1034 -1276 -1010 M -1084 -636 Q -1068 -668 -1064 -704 -1059 -745 -1077 -780 -1095 -814 -1126 -836 -1095 -814 -1077 -780 -1059 -745 -1064 -704 -1068 -668 -1084 -636 M -1170 -233 Q -1112 -242 -1068 -267 L -1040 -288 -985 -338 -941 -382 -985 -338 -1040 -288 -1068 -267 Q -1112 -242 -1170 -233 M -1039 -594 L -1011 -615 Q -988 -629 -967 -645 L -921 -676 -856 -720 -921 -676 -967 -645 Q -988 -629 -1011 -615 L -1039 -594 M -1219 -16 Q -1197 -72 -1221 -128 -1197 -72 -1219 -16 M -1084 -356 Q -1080 -373 -1082 -391 -1086 -427 -1101 -461 -1086 -427 -1082 -391 -1080 -373 -1084 -356 M -1412 58 L -1351 57 -1288 48 -1216 30 -1140 14 -1216 30 -1288 48 -1351 57 -1412 58";
	ctx.fillStyle=tocolor(ctrans.apply([255,204,153,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -2135 -1720 Q -2107 -1743 -2063 -1739 L -2045 -1738 M -2140 -1660 Q -2104 -1669 -2065 -1659 M -1126 -836 Q -1095 -814 -1077 -780 -1059 -745 -1064 -704 -1068 -668 -1084 -636 M -1101 -461 Q -1086 -427 -1082 -391 -1080 -373 -1084 -356 M -1221 -128 Q -1197 -72 -1219 -16";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([255,255,255,1]));
	ctx.lineWidth=1.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M -2143 -1896 L -2138 -1953 -2130 -2025 -2121 -2056 Q -2109 -2089 -2076 -2102 -2046 -2115 -2014 -2109 -1975 -2117 -1941 -2092 L -1928 -2083 -1893 -2054 Q -1873 -2037 -1858 -2013 L -1833 -1966 Q -1823 -1941 -1823 -1914 L -1822 -1839 -1824 -1763 Q -1826 -1726 -1836 -1691 L -1844 -1641 -1846 -1571 -1852 -1498 -1861 -1425 -1866 -1352 -1861 -1276 -1842 -1204 Q -1830 -1172 -1811 -1142 L -1767 -1087 -1720 -1041 -1675 -1004 -1653 -986 Q -1670 -1023 -1643 -1055 L -1597 -1102 Q -1566 -1129 -1531 -1136 L -1456 -1146 -1378 -1149 -1312 -1140 -1245 -1132 -1204 -1131 -1160 -1135 -1116 -1136 -1040 -1127 -968 -1109 Q -931 -1100 -902 -1076 L -854 -1025 Q -834 -997 -822 -965 -811 -936 -807 -904 -804 -875 -804 -846 -805 -811 -817 -774 -828 -740 -856 -720 L -827 -663 Q -814 -633 -817 -599 -820 -566 -829 -531 -838 -497 -861 -464 L -902 -415 -941 -382 Q -926 -353 -927 -319 -927 -291 -932 -262 L -950 -195 Q -962 -156 -986 -131 L -1036 -78 -1088 -24 -1126 6 -1140 14 -1166 126 -1178 150 -1226 220 Q -1249 257 -1284 282 L -1318 307 Q -1365 343 -1422 358 -1596 393 -1773 404 L -1849 402 -1922 402 -1992 402 -2068 398 -2142 392 -2205 387 -2278 380 -2335 367 -2408 347 -2481 329 -2633 314 -2708 315 -2785 318 -2859 320 -3001 329 -3001 -631 -2782 -650 Q -2746 -650 -2719 -674 L -2666 -724 -2615 -777 -2571 -834 -2534 -894 -2500 -957 -2469 -1024 -2441 -1093 -2409 -1161 -2373 -1224 -2335 -1287 -2296 -1350 -2269 -1400 -2248 -1457 -2238 -1507 -2222 -1579 -2206 -1650 -2194 -1715 -2183 -1769 Q -2177 -1805 -2161 -1839 L -2143 -1896 -2082 -1893 -2023 -1893 -1962 -1904 -1947 -1906 -1935 -1960 -1925 -2030 Q -1922 -2057 -1932 -2077 L -1941 -2092 M -1245 -1132 Q -1276 -1106 -1280 -1063 -1283 -1034 -1276 -1010 M -1653 -986 L -1606 -974 -1532 -974 -1456 -973 -1379 -973 -1304 -978 -1229 -983 -1164 -986 -1118 -999 -1090 -1017 -1078 -1030 M -856 -720 L -921 -676 -967 -645 Q -988 -629 -1011 -615 L -1039 -594 M -941 -382 L -985 -338 -1040 -288 -1068 -267 Q -1112 -242 -1170 -233 M -1140 14 L -1216 30 -1288 48 -1351 57 -1412 58";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([102,102,102,1]));
	ctx.lineWidth=1.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 1114 -1984 Q 1159 -1733 1177 -1418 L 1803 -1584 1798 -1475 1078 -1280 Q 1069 -1605 1044 -1875 1005 -2278 945 -2278 884 -2278 836 -1875 789 -1485 788 -978 L 788 -968 788 -945 Q 788 -418 828 -58 867 302 925 289 982 275 1032 -71 1067 -314 1077 -645 L 1078 -645 1086 -648 1769 -872 1764 -771 1179 -581 Q 1162 -247 1114 17 1040 432 934 433 828 432 753 17 680 -392 679 -969 L 679 -978 679 -983 Q 679 -1569 753 -1984 828 -2399 934 -2399 1040 -2399 1114 -1984";
	drawPath(ctx,pathData,false);
	ctx.fillStyle=tocolor(ctrans.apply([0,0,0,1]));
	ctx.fill("evenodd");
	ctx.save();
	ctx.clip();
	ctx.transform(0.0418548583984375,9.1552734375E-4,-0.0038909912109375,0.1733245849609375,1112,-1038);
	var grd=ctx.createRadialGradient(0.0,0,0,0,0,16384);
	grd.addColorStop(0,tocolor(ctrans.apply([255,255,255,1])));
	grd.addColorStop(1,tocolor(ctrans.apply([0,0,0,1])));
	ctx.fillStyle = grd;
	ctx.fillRect(-16384,-16384,32768,32768);
	ctx.restore();
	var pathData="M -151 -978 L -139 -978";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([255,0,0,1]));
	ctx.lineWidth=3.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 589 -598 Q 580 -496 592 -403 603 -311 629 -193";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,102,255,1]));
	ctx.lineWidth=1.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 1114 -1984 Q 1159 -1733 1177 -1418 L 1803 -1584 1798 -1475 1078 -1280 Q 1069 -1605 1044 -1875 1005 -2278 945 -2278 884 -2278 836 -1875 789 -1485 788 -978 L 788 -968 788 -945 Q 788 -418 828 -58 867 302 925 289 982 275 1032 -71 1067 -314 1077 -645 L 1078 -645 1086 -648 1769 -872 1764 -771 1179 -581 Q 1162 -247 1114 17 1040 432 934 433 828 432 753 17 680 -392 679 -969 L 679 -978 679 -983 Q 679 -1569 753 -1984 828 -2399 934 -2399 1040 -2399 1114 -1984 Z";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([102,102,102,1]));
	ctx.lineWidth=1.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 1738 -1711 L 1232 -1580";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,102,255,1]));
	ctx.lineWidth=1.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 1729 -1661 L 1743 -1712 1706 -1749 1835 -1736 1729 -1661";
	ctx.fillStyle=tocolor(ctrans.apply([0,102,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 934 -2208 L 934 -2088 M 934 -1248 L 934 -1128 M 934 -1488 L 934 -1368 M 934 -1728 L 934 -1608 M 934 -1968 L 934 -1848 M 934 -1008 L 934 -957";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([102,102,102,1]));
	ctx.lineWidth=1.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 1328 -513 L 1825 -675";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,102,255,1]));
	ctx.lineWidth=1.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 1333 -563 L 1322 -512 1361 -477 1232 -483 1333 -563";
	ctx.fillStyle=tocolor(ctrans.apply([0,102,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 627 -556 L 584 -585 537 -561 589 -679 627 -556";
	ctx.fillStyle=tocolor(ctrans.apply([0,102,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -139 -978 L -97 -909 -290 -976 -100 -1051 -140 -979 -139 -978";
	ctx.fillStyle=tocolor(ctrans.apply([255,0,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 828 -978 L 898 -978 M -139 -978 L 645 -978";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([255,0,255,1]));
	ctx.lineWidth=3.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 2448 -394 L 2437 -343 2476 -308 2347 -314 2448 -394";
	ctx.fillStyle=tocolor(ctrans.apply([255,0,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 4194 -1854 Q 4140 -1896 4093 -1961 3967 -2139 3967 -2391 3967 -2643 4093 -2821 4221 -3000 4401 -3000 4580 -3000 4706 -2821 4833 -2643 4834 -2391 4833 -2139 4706 -1961 4658 -1894 4603 -1852 4562 -1821 4517 -1803 4462 -1783 4401 -1783 4343 -1783 4291 -1801 M 4227 -2053 L 4201 -2086 Q 4112 -2213 4112 -2393 4112 -2573 4201 -2701 4292 -2828 4418 -2828 4544 -2828 4633 -2701 4723 -2573 4723 -2393 4723 -2213 4633 -2086 4606 -2047 4576 -2020 4540 -1989 4501 -1973 4461 -1958 4418 -1958 4362 -1958 4313 -1983 M 4271 -2231 Q 4227 -2303 4228 -2400 4227 -2508 4279 -2583 4332 -2659 4406 -2658 4479 -2659 4531 -2583 4584 -2508 4584 -2400 4584 -2293 4531 -2218 4505 -2180 4473 -2161 4442 -2143 4406 -2142 4372 -2143 4343 -2158";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([255,0,255,1]));
	ctx.lineWidth=1.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 4268 -375 L 4340 -383 Q 4440 -383 4523 -329 4572 -298 4615 -249 L 4649 -205 Q 4778 -28 4778 225 4778 476 4649 654 4521 832 4340 832 4158 832 4030 654 3902 476 3902 225 3902 -28 4030 -205 4094 -295 4172 -339 M 4282 -186 L 4344 -194 Q 4432 -194 4502 -131 4532 -105 4559 -66 L 4583 -28 Q 4648 88 4649 244 4648 426 4559 554 4470 682 4344 682 4216 682 4126 554 4037 426 4038 244 4037 62 4126 -66 4158 -112 4195 -141 M 4301 -11 L 4321 -13 Q 4395 -13 4447 63 L 4465 92 Q 4499 159 4499 247 L 4494 315 Q 4482 380 4447 431 4395 507 4321 507 4247 507 4194 431 4142 355 4142 247 4142 139 4194 63 L 4224 28";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([255,0,255,1]));
	ctx.lineWidth=1.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 2439 -742 L 2424 -692 2460 -654 2332 -669 2439 -742";
	ctx.fillStyle=tocolor(ctrans.apply([255,0,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 2430 -1070 L 2407 -1024 2435 -980 2312 -1019 2430 -1070";
	ctx.fillStyle=tocolor(ctrans.apply([255,0,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 2476 -1401 L 2440 -1363 2455 -1313 2348 -1385 2476 -1401";
	ctx.fillStyle=tocolor(ctrans.apply([255,0,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 2513 -1746 L 2470 -1717 2475 -1664 2385 -1757 2513 -1746";
	ctx.fillStyle=tocolor(ctrans.apply([255,0,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 4066 -1353 L 4012 -1320 4065 -1469 4122 -1321 4066 -1353";
	ctx.fillStyle=tocolor(ctrans.apply([0,102,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 4068 -1343 L 4068 -713";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([0,102,255,1]));
	ctx.lineWidth=2.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

	var pathData="M 5935 -1737 L 5976 -1704 5846 -1704 5944 -1789 5936 -1740 5935 -1737";
	ctx.fillStyle=tocolor(ctrans.apply([255,0,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 5892 -1352 L 5927 -1314 5800 -1334 5909 -1403 5894 -1355 5892 -1352";
	ctx.fillStyle=tocolor(ctrans.apply([255,0,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 5890 -1026 L 5918 -982 5795 -1023 5915 -1073 5892 -1028 5890 -1026";
	ctx.fillStyle=tocolor(ctrans.apply([255,0,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 5889 -691 L 5905 -641 5797 -713 5926 -730 5892 -693 5889 -691";
	ctx.fillStyle=tocolor(ctrans.apply([255,0,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 5798 -375 L 5806 -323 5710 -410 5839 -408 5800 -376 5798 -375";
	ctx.fillStyle=tocolor(ctrans.apply([255,0,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 4171 103 L 4223 92 4142 193 4136 64 4170 101 4171 103";
	ctx.fillStyle=tocolor(ctrans.apply([255,0,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 4079 16 L 4130 5 4050 106 4044 -23 4078 14 4079 16";
	ctx.fillStyle=tocolor(ctrans.apply([255,0,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 3958 -84 L 4009 -95 3929 6 3923 -123 3957 -86 3958 -84";
	ctx.fillStyle=tocolor(ctrans.apply([255,0,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 4232 -2462 L 4181 -2449 4259 -2553 4269 -2424 4234 -2460 4232 -2462";
	ctx.fillStyle=tocolor(ctrans.apply([255,0,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 4135 -2547 L 4085 -2534 4162 -2638 4172 -2509 4137 -2545 4135 -2547";
	ctx.fillStyle=tocolor(ctrans.apply([255,0,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 4001 -2626 L 3951 -2613 4028 -2717 4038 -2588 4003 -2624 4001 -2626";
	ctx.fillStyle=tocolor(ctrans.apply([255,0,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 2680 -2419 L 2628 -2414 2609 -2364 2572 -2488 2680 -2419";
	ctx.fillStyle=tocolor(ctrans.apply([255,0,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 5846 -2481 L 5861 -2432 5914 -2422 5799 -2361 5846 -2481";
	ctx.fillStyle=tocolor(ctrans.apply([255,0,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 2548 212 L 2567 260 2620 267 2510 334 2548 212";
	ctx.fillStyle=tocolor(ctrans.apply([255,0,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 5850 233 L 5798 233 5773 281 5750 154 5850 233";
	ctx.fillStyle=tocolor(ctrans.apply([255,0,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
}

function shape2(ctx,ctrans,frame,ratio,time){
	var pathData="M 13 -440 L 31 -660 1515 -660 1515 384 1375 660 7 660 Q -4 427 -4 146 L -4 123 -4 113 Q -3 -183 13 -440";
	ctx.fillStyle=tocolor(ctrans.apply([136,136,255,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M -1515 -440 L -1191 -660 -93 -660 -114 -440 Q -133 -188 -133 108 L -133 113 -133 122 Q -133 412 -114 660 L -1515 660 -1515 -440";
	ctx.fillStyle=tocolor(ctrans.apply([255,136,136,1]));
	drawPath(ctx,pathData,false);
	ctx.fill("evenodd");
	var pathData="M 511 -660 L 631 -660 M 271 -660 L 391 -660 M 31 -660 L 151 -660 M 175 -440 L 55 -440 M 415 -440 L 295 -440 M 655 -440 L 535 -440 M 1471 -660 L 1512 -660 1448 -558 M 1515 -506 L 1515 -626 M 1231 -660 L 1351 -660 M 991 -660 L 1111 -660 M 1135 -440 L 1015 -440 M 1375 -200 L 1375 -80 M 1385 -456 L 1375 -440 1375 -320 M 1515 -26 L 1515 -146 M 1515 -266 L 1515 -386 M 1375 -440 L 1255 -440 M 751 -660 L 871 -660 M 895 -440 L 775 -440 M 1483 446 L 1515 384 1515 334 M 1515 214 L 1515 94 M 1375 40 L 1375 160 M 1375 280 L 1375 400 M 967 660 L 1087 660 M 1375 660 L 1429 552 M 1375 520 L 1375 640 M 1207 660 L 1327 660 M 487 660 L 607 660 M 247 660 L 367 660 M 7 660 L 127 660 M 727 660 L 847 660 M -1515 -200 L -1515 -80 M -1415 -508 L -1515 -440 -1515 -320 M -1314 -440 L -1434 -440 M -1074 -440 L -1194 -440 M -834 -440 L -954 -440 M -1103 -660 L -983 -660 M -1315 -576 L -1215 -644 M -594 -440 L -714 -440 M -354 -440 L -474 -440 M -114 -440 L -234 -440 M -143 -660 L -93 -660 M -383 -660 L -263 -660 M -623 -660 L -503 -660 M -863 -660 L -743 -660 M -215 660 L -114 660 M -455 660 L -335 660 M -695 660 L -575 660 M -935 660 L -815 660 M -1175 660 L -1055 660 M -1415 660 L -1295 660 M -1515 520 L -1515 640 M -1515 280 L -1515 400 M -1515 40 L -1515 160";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([102,102,102,1]));
	ctx.lineWidth=1.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

}

function sprite3(ctx,ctrans,frame,ratio,time){
	var clips = [];
	var frame_cnt = 40;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0001068115234375,0.0,0.0,1.0002593994140625,4274.0,-1063.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,0)),1,0,0,time);
			break;
		case 1:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0001068115234375,0.0,0.0,1.000244140625,4274.0,-1063.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,9)),1,0,0,time);
			break;
		case 2:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.000091552734375,0.0,0.0,1.0002288818359375,4274.0,-1063.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,18)),1,0,0,time);
			break;
		case 3:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.000091552734375,0.0,0.0,1.000213623046875,4274.0,-1063.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,27)),1,0,0,time);
			break;
		case 4:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.000091552734375,0.0,0.0,1.0001983642578125,4274.0,-1063.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,37)),1,0,0,time);
			break;
		case 5:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0000762939453125,0.0,0.0,1.0001983642578125,4274.0,-1063.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,46)),1,0,0,time);
			break;
		case 6:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0000762939453125,0.0,0.0,1.00018310546875,4274.0,-1063.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,55)),1,0,0,time);
			break;
		case 7:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.00006103515625,0.0,0.0,1.0001678466796875,4274.0,-1063.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,64)),1,0,0,time);
			break;
		case 8:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.00006103515625,0.0,0.0,1.000152587890625,4274.0,-1063.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,73)),1,0,0,time);
			break;
		case 9:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.00006103515625,0.0,0.0,1.0001373291015625,4274.0,-1063.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,82)),1,0,0,time);
			break;
		case 10:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0000457763671875,0.0,0.0,1.0001220703125,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,92)),1,0,0,time);
			break;
		case 11:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0000457763671875,0.0,0.0,1.0001068115234375,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,101)),1,0,0,time);
			break;
		case 12:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0000457763671875,0.0,0.0,1.000091552734375,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,110)),1,0,0,time);
			break;
		case 13:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.000030517578125,0.0,0.0,1.0000762939453125,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,119)),1,0,0,time);
			break;
		case 14:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.000030517578125,0.0,0.0,1.00006103515625,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,128)),1,0,0,time);
			break;
		case 15:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0000152587890625,0.0,0.0,1.00006103515625,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,137)),1,0,0,time);
			break;
		case 16:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0000152587890625,0.0,0.0,1.0000457763671875,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,147)),1,0,0,time);
			break;
		case 17:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0000152587890625,0.0,0.0,1.000030517578125,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,156)),1,0,0,time);
			break;
		case 18:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0,0.0,0.0,1.0000152587890625,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,165)),1,0,0,time);
			break;
		case 19:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0,0.0,0.0,1.0,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,174)),1,0,0,time);
			break;
		case 20:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0,0.0,0.0,1.0,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,174)),1,0,0,time);
			break;
		case 21:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0,0.0,0.0,1.0,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,174)),1,0,0,time);
			break;
		case 22:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0,0.0,0.0,1.0,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,174)),1,0,0,time);
			break;
		case 23:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0,0.0,0.0,1.0,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,174)),1,0,0,time);
			break;
		case 24:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0,0.0,0.0,1.0,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,174)),1,0,0,time);
			break;
		case 25:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0,0.0,0.0,1.0,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,174)),1,0,0,time);
			break;
		case 26:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0,0.0,0.0,1.0,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,174)),1,0,0,time);
			break;
		case 27:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0,0.0,0.0,1.0,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,174)),1,0,0,time);
			break;
		case 28:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0,0.0,0.0,1.0,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,174)),1,0,0,time);
			break;
		case 29:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0,0.0,0.0,1.0,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,174)),1,0,0,time);
			break;
		case 30:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0,0.0,0.0,1.0,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,174)),1,0,0,time);
			break;
		case 31:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0,0.0,0.0,1.0,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,174)),1,0,0,time);
			break;
		case 32:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0,0.0,0.0,1.0,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,174)),1,0,0,time);
			break;
		case 33:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0,0.0,0.0,1.0,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,174)),1,0,0,time);
			break;
		case 34:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0,0.0,0.0,1.0,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,174)),1,0,0,time);
			break;
		case 35:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0,0.0,0.0,1.0,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,174)),1,0,0,time);
			break;
		case 36:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0,0.0,0.0,1.0,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,174)),1,0,0,time);
			break;
		case 37:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0,0.0,0.0,1.0,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,174)),1,0,0,time);
			break;
		case 38:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0,0.0,0.0,1.0,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,174)),1,0,0,time);
			break;
		case 39:
			place("shape1",canvas,ctx,[1.0,0.0,0.0,1.0,0.0,0.0],ctrans,1,0,0,time);
			place("shape2",canvas,ctx,[1.0,0.0,0.0,1.0,4274.0,-1062.0],ctrans.merge(new cxform(0,0,0,0,256,256,256,174)),1,0,0,time);
			break;
	}
}

function shape4(ctx,ctrans,frame,ratio,time){
	var pathData="M 4090 1625 L 3320 1145";
	var scaleMode = "NORMAL";
	ctx.strokeStyle=tocolor(ctrans.apply([102,102,102,1]));
	ctx.lineWidth=1.0;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	drawPath(ctx,pathData,true,scaleMode);

}

function font5(ctx,ch,textColor){
	defaultFill = textColor;
	switch(ch){
		case "B":
			var pathData="M 155 -44 L 241 -340 280 -342 Q 363 -342 401 -307 438 -273 438 -211 438 -131 378 -84 317 -37 239 -37 L 155 -44 M 253 -378 L 330 -638 376 -644 Q 444 -644 475 -615 506 -587 506 -535 506 -467 455 -422 404 -377 300 -377 L 253 -378 M 152 -659 L 152 -659 168 -659 Q 206 -659 220 -648 234 -637 234 -619 234 -598 218 -546 L 97 -135 Q 77 -67 65 -48 56 -34 36 -26 22 -19 -17 -18 L -23 0 225 0 353 -8 Q 411 -20 452 -46 492 -71 518 -117 544 -163 544 -214 544 -259 515 -297 486 -335 425 -358 520 -381 563 -428 605 -475 605 -534 605 -572 581 -606 557 -640 510 -659 462 -678 401 -678 L 159 -678 152 -659";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "I":
			var pathData="M 253 -18 L 253 -18 196 -26 Q 182 -31 176 -39 169 -48 169 -61 L 185 -133 303 -542 Q 321 -605 333 -624 345 -642 367 -652 L 415 -659 420 -678 158 -678 152 -659 204 -654 224 -641 230 -619 Q 230 -593 215 -542 L 97 -133 Q 80 -72 63 -49 53 -34 31 -25 L -25 -18 -32 0 247 0 253 -18";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "r":
			var pathData="M 54 -424 L 57 -406 96 -410 122 -402 Q 130 -396 130 -387 130 -364 114 -310 L 21 0 98 0 114 -63 138 -131 Q 153 -173 174 -206 222 -284 264 -333 290 -365 303 -372 L 319 -376 329 -372 333 -359 Q 335 -344 344 -336 352 -329 363 -329 386 -329 398 -351 415 -381 415 -414 415 -433 405 -442 396 -452 379 -452 354 -452 313 -418 242 -359 154 -209 L 226 -452 54 -424";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
	}
}

function text6(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([51,51,51,1]));
	ctx.save();
	ctx.transform(0.390625,0.0,0.0,0.390625,0.0,360.0);
	font5(ctx,"B",textColor);
	ctx.restore();
}

function text7(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([51,51,51,1]));
	ctx.save();
	ctx.transform(0.390625,0.0,0.0,0.390625,0.0,360.0);
	font5(ctx,"r",textColor);
	ctx.restore();
}

function text8(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([51,51,51,1]));
	ctx.save();
	ctx.transform(0.390625,0.0,0.0,0.390625,0.0,360.0);
	font5(ctx,"I",textColor);
	ctx.restore();
}

function font9(ctx,ch,textColor){
	defaultFill = textColor;
	switch(ch){
		case "N":
			var pathData="M -13 -678 L -13 -659 31 -655 76 -634 120 -589 120 -117 Q 120 -60 109 -44 91 -18 48 -18 L 24 -18 24 0 260 0 260 -18 236 -18 Q 197 -18 178 -39 164 -55 164 -117 L 164 -535 611 11 629 11 629 -560 Q 629 -617 640 -633 658 -659 701 -659 L 725 -659 725 -678 489 -678 489 -659 513 -659 Q 553 -659 571 -638 585 -623 585 -560 L 585 -169 171 -678 -13 -678";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
		case "S":
			var pathData="M 470 -693 L 451 -693 Q 446 -670 438 -662 430 -654 417 -654 405 -654 377 -667 317 -693 263 -693 176 -693 120 -640 64 -588 64 -515 64 -473 83 -438 102 -403 139 -374 L 263 -296 369 -232 Q 398 -210 412 -185 426 -159 426 -134 426 -89 390 -56 353 -23 291 -23 237 -23 192 -47 146 -71 124 -107 102 -144 89 -217 L 71 -217 71 16 89 16 Q 93 -8 100 -15 107 -23 120 -23 L 182 -7 246 11 301 16 Q 395 16 455 -40 515 -96 515 -173 515 -213 496 -250 477 -287 443 -314 408 -342 313 -393 196 -455 165 -493 144 -518 144 -549 144 -590 178 -621 212 -653 264 -653 310 -653 353 -630 396 -606 419 -566 442 -526 451 -459 L 470 -459 470 -693";
			ctx.fillStyle=defaultFill;
			drawPath(ctx,pathData,false);
			ctx.fill("evenodd");
			break;
	}
}

function text10(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([51,51,51,1]));
	ctx.save();
	ctx.transform(0.390625,0.0,0.0,0.390625,0.0,360.0);
	font9(ctx,"N",textColor);
	ctx.restore();
}

function text11(ctx,ctrans,frame,ratio,time){
	var textColor = tocolor(ctrans.apply([51,51,51,1]));
	ctx.save();
	ctx.transform(0.390625,0.0,0.0,0.390625,0.0,360.0);
	font9(ctx,"S",textColor);
	ctx.restore();
}

function main(ctx,ctrans,frame,ratio,time){
	ctx.save();
	ctx.transform(1,0,0,1,0.0,0.0);
	var clips = [];
	var frame_cnt = 1;
	frame = frame % frame_cnt;
	switch(frame){
		case 0:
			place("sprite3",canvas,ctx,[0.05,0.0,0.0,0.05,158.5,158.4],ctrans,1,(0+time)%40,0,time);
			place("shape4",canvas,ctx,[0.05,0.0,0.0,0.05,0.0,0.0],ctrans,1,0,0,time);
			place("text6",canvas,ctx,[0.05,0.0,0.0,0.05,155.95,109.35],ctrans,1,0,0,time);
			place("text7",canvas,ctx,[0.05,0.0,0.0,0.05,153.15,45.45],ctrans,1,0,0,time);
			place("text8",canvas,ctx,[0.05,0.0,0.0,0.05,235.9,130.3],ctrans,1,0,0,time);
			place("text10",canvas,ctx,[0.05,0.0,0.0,0.05,280.55,96.3],ctrans,1,0,0,time);
			place("text11",canvas,ctx,[0.05,0.0,0.0,0.05,439.2,96.3],ctrans,1,0,0,time);
			break;
	}
	ctx.restore();
}

