var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":1480,"id":0,"methods":[{"el":96,"sc":5,"sl":94},{"el":112,"sc":5,"sl":107},{"el":128,"sc":5,"sl":123},{"el":142,"sc":5,"sl":139},{"el":153,"sc":5,"sl":151},{"el":165,"sc":5,"sl":163},{"el":179,"sc":5,"sl":177},{"el":194,"sc":5,"sl":192},{"el":206,"sc":5,"sl":204},{"el":220,"sc":5,"sl":218},{"el":235,"sc":5,"sl":233},{"el":257,"sc":5,"sl":255},{"el":282,"sc":5,"sl":280},{"el":304,"sc":5,"sl":302},{"el":318,"sc":5,"sl":316},{"el":334,"sc":5,"sl":332},{"el":351,"sc":5,"sl":349},{"el":362,"sc":5,"sl":360},{"el":379,"sc":5,"sl":375},{"el":404,"sc":5,"sl":402},{"el":423,"sc":5,"sl":414},{"el":443,"sc":5,"sl":438},{"el":470,"sc":5,"sl":464},{"el":499,"sc":5,"sl":490},{"el":518,"sc":5,"sl":512},{"el":535,"sc":5,"sl":530},{"el":558,"sc":5,"sl":552},{"el":572,"sc":5,"sl":570},{"el":585,"sc":5,"sl":583},{"el":602,"sc":5,"sl":600},{"el":627,"sc":5,"sl":621},{"el":651,"sc":5,"sl":645},{"el":675,"sc":5,"sl":669},{"el":699,"sc":5,"sl":693},{"el":713,"sc":5,"sl":711},{"el":726,"sc":5,"sl":724},{"el":743,"sc":5,"sl":741},{"el":768,"sc":5,"sl":762},{"el":792,"sc":5,"sl":786},{"el":816,"sc":5,"sl":810},{"el":840,"sc":5,"sl":834},{"el":859,"sc":5,"sl":850},{"el":872,"sc":5,"sl":869},{"el":883,"sc":5,"sl":881},{"el":899,"sc":5,"sl":894},{"el":916,"sc":5,"sl":914},{"el":932,"sc":5,"sl":930},{"el":948,"sc":5,"sl":946},{"el":964,"sc":5,"sl":962},{"el":980,"sc":5,"sl":978},{"el":1002,"sc":5,"sl":1000},{"el":1018,"sc":5,"sl":1016},{"el":1039,"sc":5,"sl":1037},{"el":1055,"sc":5,"sl":1053},{"el":1071,"sc":5,"sl":1069},{"el":1087,"sc":5,"sl":1085},{"el":1098,"sc":5,"sl":1096},{"el":1107,"sc":5,"sl":1105},{"el":1116,"sc":5,"sl":1114},{"el":1125,"sc":5,"sl":1123},{"el":1134,"sc":5,"sl":1132},{"el":1143,"sc":5,"sl":1141},{"el":1152,"sc":5,"sl":1150},{"el":1161,"sc":5,"sl":1159},{"el":1170,"sc":5,"sl":1168},{"el":1179,"sc":5,"sl":1177},{"el":1188,"sc":5,"sl":1186}],"name":"DateMidnight","sl":78},{"el":1479,"id":239,"methods":[{"el":1239,"sc":9,"sl":1235},{"el":1247,"sc":9,"sl":1244},{"el":1256,"sc":9,"sl":1252},{"el":1266,"sc":9,"sl":1264},{"el":1275,"sc":9,"sl":1273},{"el":1285,"sc":9,"sl":1283},{"el":1294,"sc":9,"sl":1292},{"el":1311,"sc":9,"sl":1309},{"el":1327,"sc":9,"sl":1325},{"el":1345,"sc":9,"sl":1343},{"el":1362,"sc":9,"sl":1360},{"el":1379,"sc":9,"sl":1377},{"el":1395,"sc":9,"sl":1393},{"el":1415,"sc":9,"sl":1413},{"el":1428,"sc":9,"sl":1426},{"el":1438,"sc":9,"sl":1436},{"el":1447,"sc":9,"sl":1445},{"el":1457,"sc":9,"sl":1455},{"el":1467,"sc":9,"sl":1465},{"el":1477,"sc":9,"sl":1475}],"name":"DateMidnight.Property","sl":1219}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
