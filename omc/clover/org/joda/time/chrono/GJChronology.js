var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":1157,"id":10353,"methods":[{"el":87,"sc":5,"sl":81},{"el":99,"sc":5,"sl":92},{"el":123,"sc":5,"sl":121},{"el":139,"sc":5,"sl":137},{"el":155,"sc":5,"sl":153},{"el":173,"sc":5,"sl":168},{"el":222,"sc":5,"sl":183},{"el":244,"sc":5,"sl":232},{"el":263,"sc":5,"sl":259},{"el":273,"sc":5,"sl":268},{"el":280,"sc":5,"sl":278},{"el":288,"sc":5,"sl":282},{"el":299,"sc":5,"sl":297},{"el":315,"sc":5,"sl":307},{"el":339,"sc":5,"sl":317},{"el":381,"sc":5,"sl":341},{"el":389,"sc":5,"sl":387},{"el":398,"sc":5,"sl":396},{"el":419,"sc":5,"sl":408},{"el":430,"sc":5,"sl":427},{"el":463,"sc":5,"sl":439},{"el":574,"sc":5,"sl":465},{"el":578,"sc":5,"sl":576},{"el":582,"sc":5,"sl":580},{"el":586,"sc":5,"sl":584},{"el":590,"sc":5,"sl":588}],"name":"GJChronology","sl":73},{"el":934,"id":10576,"methods":[{"el":616,"sc":9,"sl":614},{"el":627,"sc":9,"sl":624},{"el":653,"sc":9,"sl":636},{"el":657,"sc":9,"sl":655},{"el":665,"sc":9,"sl":659},{"el":673,"sc":9,"sl":667},{"el":677,"sc":9,"sl":675},{"el":685,"sc":9,"sl":679},{"el":689,"sc":9,"sl":687},{"el":693,"sc":9,"sl":691},{"el":697,"sc":9,"sl":695},{"el":715,"sc":9,"sl":699},{"el":719,"sc":9,"sl":717},{"el":723,"sc":9,"sl":721},{"el":754,"sc":9,"sl":725},{"el":777,"sc":9,"sl":756},{"el":781,"sc":9,"sl":779},{"el":785,"sc":9,"sl":783},{"el":793,"sc":9,"sl":787},{"el":801,"sc":9,"sl":795},{"el":805,"sc":9,"sl":803},{"el":812,"sc":9,"sl":808},{"el":816,"sc":9,"sl":814},{"el":820,"sc":9,"sl":818},{"el":837,"sc":9,"sl":822},{"el":843,"sc":9,"sl":839},{"el":860,"sc":9,"sl":845},{"el":865,"sc":9,"sl":862},{"el":877,"sc":9,"sl":867},{"el":892,"sc":9,"sl":879},{"el":907,"sc":9,"sl":894},{"el":912,"sc":9,"sl":909},{"el":917,"sc":9,"sl":914},{"el":925,"sc":9,"sl":919},{"el":933,"sc":9,"sl":927}],"name":"GJChronology.CutoverField","sl":597},{"el":1124,"id":10803,"methods":[{"el":952,"sc":9,"sl":950},{"el":963,"sc":9,"sl":959},{"el":975,"sc":9,"sl":970},{"el":991,"sc":9,"sl":982},{"el":1024,"sc":9,"sl":993},{"el":1057,"sc":9,"sl":1026},{"el":1077,"sc":9,"sl":1059},{"el":1097,"sc":9,"sl":1079},{"el":1115,"sc":9,"sl":1109},{"el":1123,"sc":9,"sl":1117}],"name":"GJChronology.ImpreciseCutoverField","sl":943},{"el":1155,"id":10929,"methods":[{"el":1138,"sc":9,"sl":1135},{"el":1142,"sc":9,"sl":1140},{"el":1146,"sc":9,"sl":1144},{"el":1150,"sc":9,"sl":1148},{"el":1154,"sc":9,"sl":1152}],"name":"GJChronology.LinkedDurationField","sl":1130}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
