const _0x2c93=['RoleID','create','**]\x20:\x20','toLowerCase','Promote','Logs','3fLvgRr','RED','CommandDesc','delete','PriorityChangedColor','users','channels','Channel','LogsEmbed','Delete','channel','1442325seadyj','promote','Priority\x20Mid','Color','Blue','../modules/handlers/EventHandler','Deleting\x20Modmail','content','CloseCommand','339044hNYhob','Department','Your\x20ticket\x20is\x20now\x20being\x20closed.\x20Thank\x20you\x20for\x20reaching\x20out\x20to\x20us!','Command','Department2','get','awaitReactions','has','admin','Declined','Staff','React\x20with\x20%EMOJI%','Promote\x20a\x20Modmail\x20to\x20another\x20Department','Priority','MailEmbed','PriorityMid','set','setDescription','%AUTHOR%\x20has\x20created\x20a\x20new\x20Modmail\x20%MAILCHANNEL%','Start','%PRIO1%','SupportRole','CategoryID','addFields','Embeds','includes','Emoji','guild','send','\x20or\x20','bot','displayAvatarURL','Name','PromotedColor','PriorityHigh','overwritePermissions','%PRIO3%','MessageSended','Close\x20a\x20Modmail','MessageEmbed','Title','../modules/utils','%USER%','username','message','[**','react','PriorityChanged','replace','You\x20have\x20successfully\x20declined\x20sending\x20the\x20message\x20**%MESSAGE%**','setAuthor','to\x20contact\x20our\x20%DEP3ROLE%\x20Team','%PRIO1%\x20%PRIO2%\x20%PRIO3%\x20are\x20valid\x20options','name','155219fbboeB','setTitle','UseDepartments','hasPermission','%MESSAGE%','Department1','PriorityCommand','PingDepartmentOnCreate','3️⃣','%PRIO2%','Support','Set\x20priority\x20as\x20channeltopic\x20(can\x20be\x20done\x20every\x2010min)','setTopic','modmail','tag','%DEP3ROLE%','Department3','LogsChannelID','SEND_MESSAGES','Priority\x20Low','Promoted','%DEP1ROLE%','../modules/CustomConfig.js','RejectEmoji','5610FlbVCy','cache','find','join','Are\x20you\x20sure\x20you\x20would\x20like\x20to\x20send\x20**%MESSAGE%**\x20to\x20our\x20Team?','member','684582YHMYWG','2️⃣','roles','BLUE','1iCzSPx','PermissionRole','0x0099ff','2733xoOBtD','text','30uWUYoc','GuildID','type','PriorityLow','emoji','Desc','AnswerEmbed','I\x20am\x20now\x20deleting\x20the\x20Modmail','parentID','Departments','../modules/handlers/CommandHandler','59262ClNZNh','61ZctnSd','%AUTHOR%','setColor','nopermission','AcceptEmoji','Commands','VIEW_CHANNEL','./addon_configs/modMail.yml','\x20close\x20promote\x20priority','members','%MAILCHANNEL%','%DEP2ROLE%','1️⃣','guilds','Priority\x20High','value','author','PromoteCommand','slice','User','%EMOJI%','%USER%\x27s\x20modmail\x20has\x20been\x20deleted.'];function _0x455b(_0x562af2,_0x2c9b97){_0x562af2=_0x562af2-0x96;let _0x2c930b=_0x2c93[_0x562af2];return _0x2c930b;}const _0xf13446=_0x455b;(function(_0x1db015,_0x85edfa){const _0x4230e3=_0x455b;while(!![]){try{const _0x20e1b6=-parseInt(_0x4230e3(0xf8))+-parseInt(_0x4230e3(0xe8))*-parseInt(_0x4230e3(0x129))+parseInt(_0x4230e3(0xe4))+parseInt(_0x4230e3(0xde))*parseInt(_0x4230e3(0xf9))+parseInt(_0x4230e3(0xeb))*parseInt(_0x4230e3(0xed))+-parseInt(_0x4230e3(0xc6))*-parseInt(_0x4230e3(0x115))+-parseInt(_0x4230e3(0x120));if(_0x20e1b6===_0x85edfa)break;else _0x1db015['push'](_0x1db015['shift']());}catch(_0x380578){_0x1db015['push'](_0x1db015['shift']());}}}(_0x2c93,0x648f8));const EventHandler=require(_0xf13446(0x125)),CommandHandler=require(_0xf13446(0xf7)),{Discord}=require(_0xf13446(0xb9)),Utils=require(_0xf13446(0xb9)),Embed=Utils['Embed'];module['exports']=async _0x51e566=>{const _0x391431=_0xf13446,_0x4c5702=require(_0x391431(0xdc)),_0x2736e3=new _0x4c5702(_0x391431(0x100),{'CategoryID':'','AcceptEmoji':'👍','RejectEmoji':'👎','GuildID':'','LogsChannelID':'','Command':_0x391431(0xd3),'CommandDesc':'Manage\x20modmails','CloseCommand':'close','PromoteCommand':_0x391431(0x121),'PriorityCommand':'priority','PingDepartmentOnCreate':!![],'PermissionRole':'Staff','SupportRole':_0x391431(0x9a),'UseDepartments':!![],'Departments':{'Department1':{'Emoji':_0x391431(0x105),'RoleID':'','Name':''},'Department2':{'Emoji':_0x391431(0xe5),'RoleID':'','Name':''},'Department3':{'Emoji':_0x391431(0xce),'RoleID':'','Name':''}},'Priority':{'PriorityLow':_0x391431(0xd9),'PriorityMid':_0x391431(0x122),'PriorityHigh':_0x391431(0x107)},'Embeds':{'Start':{'Title':_0x391431(0xd0),'Desc':_0x391431(0xe2),'Color':_0x391431(0xe7)},'MessageSended':{'Title':_0x391431(0xd0),'Desc':'Your\x20message\x20**%MESSAGE%**\x20has\x20been\x20sent.','Color':_0x391431(0xe7)},'LogsEmbed':{'Title':'New\x20Modmail','Desc':_0x391431(0xa2),'Color':'BLUE'},'MailEmbed':{'Title':_0x391431(0xd0),'Color':_0x391431(0x124)},'AnswerEmbed':{'Title':_0x391431(0xd0),'Color':_0x391431(0xe7)},'Department':{'Title':'Choose\x20a\x20department','Color':_0x391431(0xe7),'Department1':{'name':'React\x20with\x20%EMOJI%','value':'to\x20contact\x20our\x20%DEP1ROLE%\x20Team'},'Department2':{'name':_0x391431(0x9b),'value':'to\x20contact\x20our\x20%DEP2ROLE%\x20Team'},'Department3':{'name':'React\x20with\x20%EMOJI%','value':_0x391431(0xc3)}},'Declined':{'Title':'Support','Desc':_0x391431(0xc1),'Color':_0x391431(0x116)},'Commands':{'PromoteCommand':{'Title':_0x391431(0x113),'Desc':'%DEP1ROLE%\x20%DEP2ROLE%\x20%DEP3ROLE%\x20are\x20valid\x20options','Color':_0x391431(0xe7),'Promoted':_0x391431(0xda),'PromotedColor':'0x0099ff'},'PriorityCommand':{'Title':_0x391431(0x9d),'Desc':_0x391431(0xc4),'Color':_0x391431(0xe7),'PriorityChanged':'Changed\x20Priority','PriorityChangedColor':_0x391431(0xea)},'Delete':{'Channel':{'Title':_0x391431(0x126),'Desc':_0x391431(0xf4),'Color':_0x391431(0x116)},'User':{'Title':_0x391431(0xd0),'Desc':_0x391431(0x12b),'Color':_0x391431(0x116)},'Logs':{'Title':'Modmail\x20deleted','Desc':_0x391431(0x10e),'Color':_0x391431(0x116)}}}}}),_0xfecf93=new Map();CommandHandler[_0x391431(0xa0)]({'name':''+_0x2736e3[_0x391431(0x12c)],'run':async(_0x470000,_0x5e78e2,_0xe3ff92,{prefixUsed:_0x58d1c5,commandUsed:_0x4f77cd})=>{const _0x197959=_0x391431;_0x5e78e2[_0x197959(0x118)]();if(!Utils['hasPermission'](_0x5e78e2[_0x197959(0xe3)],_0x2736e3[_0x197959(0xe9)]))return _0x5e78e2[_0x197959(0x11f)]['send'](Embed({'preset':_0x197959(0xfc)}));const _0x65027a=_0x470000[_0x197959(0x106)][_0x197959(0xdf)][_0x197959(0x12e)](_0x2736e3['GuildID']),_0x3f7883=_0x65027a[_0x197959(0x11b)][_0x197959(0xdf)][_0x197959(0x12e)](_0x2736e3['LogsChannelID']);if(!_0xe3ff92[0x0])return _0x5e78e2['channel'][_0x197959(0xac)](Embed({'title':_0x2736e3[_0x197959(0x12c)]+'\x20Help','color':'BLUE','fields':[{'name':_0x197959(0xb6),'value':''+_0x58d1c5+_0x2736e3[_0x197959(0x128)],'inline':!![]},{'name':_0x197959(0x9c),'value':''+_0x58d1c5+_0x2736e3['PromoteCommand']+'\x20'+_0x2736e3[_0x197959(0xf6)][_0x197959(0xcb)][_0x197959(0xb0)]+_0x197959(0xad)+_0x2736e3[_0x197959(0xf6)][_0x197959(0x12d)][_0x197959(0xb0)]+'\x20or\x20'+_0x2736e3[_0x197959(0xf6)][_0x197959(0xd6)][_0x197959(0xb0)],'inline':![]},{'name':_0x197959(0xd1),'value':''+_0x58d1c5+_0x2736e3[_0x197959(0xcc)]+'\x20'+_0x2736e3[_0x197959(0x9d)][_0x197959(0xf0)]+'\x20or\x20'+_0x2736e3[_0x197959(0x9d)][_0x197959(0x9f)]+_0x197959(0xad)+_0x2736e3[_0x197959(0x9d)][_0x197959(0xb2)],'inline':![]}]}));switch(_0xe3ff92[0x0]){case _0x2736e3['CloseCommand']:if(!Utils[_0x197959(0xc9)](_0x5e78e2[_0x197959(0xe3)],_0x2736e3[_0x197959(0xe9)]))return _0x5e78e2['channel']['send'](Embed({'preset':_0x197959(0xfc)}));if(_0x5e78e2[_0x197959(0x11f)]['parentID']!=_0x2736e3[_0x197959(0xa6)])return;if(_0x5e78e2[_0x197959(0x11f)]['id']===_0x2736e3[_0x197959(0xd7)])return;if(_0x5e78e2[_0x197959(0xab)]['id']===_0x65027a['id']&&_0x5e78e2[_0x197959(0x11f)]['parentID']===_0x2736e3[_0x197959(0xa6)]){const _0x2824ff=_0x65027a[_0x197959(0x102)][_0x197959(0xdf)]['get'](_0x5e78e2[_0x197959(0x11f)]['name']);if(!_0x2824ff)return;_0x5e78e2[_0x197959(0x11f)][_0x197959(0xac)](new Discord['MessageEmbed']()[_0x197959(0xc7)](_0x2736e3[_0x197959(0xa8)]['Commands'][_0x197959(0x11e)][_0x197959(0x11c)][_0x197959(0xb8)])['setColor'](_0x2736e3[_0x197959(0xa8)][_0x197959(0xfe)][_0x197959(0x11e)][_0x197959(0x11c)]['Color'])['setDescription'](_0x2736e3[_0x197959(0xa8)][_0x197959(0xfe)][_0x197959(0x11e)][_0x197959(0x11c)][_0x197959(0xf2)])),setTimeout(()=>{const _0x4c7019=_0x197959;_0x470000['users'][_0x4c7019(0xdf)][_0x4c7019(0x12e)](_0x5e78e2[_0x4c7019(0x11f)][_0x4c7019(0xc5)])[_0x4c7019(0xac)](new Discord[(_0x4c7019(0xb7))]()['setTitle'](_0x2736e3['Embeds'][_0x4c7019(0xfe)][_0x4c7019(0x11e)][_0x4c7019(0x10c)][_0x4c7019(0xb8)])[_0x4c7019(0xfb)](_0x2736e3[_0x4c7019(0xa8)][_0x4c7019(0xfe)][_0x4c7019(0x11e)][_0x4c7019(0x10c)][_0x4c7019(0x123)])[_0x4c7019(0xa1)](_0x2736e3[_0x4c7019(0xa8)][_0x4c7019(0xfe)][_0x4c7019(0x11e)][_0x4c7019(0x10c)][_0x4c7019(0xf2)])),_0x5e78e2[_0x4c7019(0x11f)]['delete']()['then'](_0x8cbc1a=>{const _0x471286=_0x4c7019;_0x3f7883[_0x471286(0xac)](new Discord[(_0x471286(0xb7))]()[_0x471286(0xc7)](_0x2736e3[_0x471286(0xa8)][_0x471286(0xfe)][_0x471286(0x11e)][_0x471286(0x114)][_0x471286(0xb8)])['setColor'](_0x2736e3[_0x471286(0xa8)][_0x471286(0xfe)]['Delete']['Logs']['Color'])['setDescription'](_0x2736e3[_0x471286(0xa8)][_0x471286(0xfe)]['Delete'][_0x471286(0x114)][_0x471286(0xf2)][_0x471286(0xc0)](_0x471286(0xba),''+_0x470000[_0x471286(0x11a)]['cache'][_0x471286(0x12e)](_0x8cbc1a['name'])[_0x471286(0xd4)])));});},0x1d4c);}break;case _0x2736e3['PromoteCommand']:if(!Utils[_0x197959(0xc9)](_0x5e78e2[_0x197959(0xe3)],_0x2736e3[_0x197959(0xe9)]))return _0x5e78e2[_0x197959(0x11f)][_0x197959(0xac)](Embed({'preset':_0x197959(0xfc)}));if(_0x5e78e2[_0x197959(0x11f)][_0x197959(0xf5)]!=_0x2736e3[_0x197959(0xa6)])return;if(_0x5e78e2['channel']['id']===_0x2736e3['LogsChannelID'])return;const _0x1523b5=_0x65027a[_0x197959(0x102)][_0x197959(0xdf)][_0x197959(0x12e)](_0x5e78e2[_0x197959(0x11f)]['name']);if(!_0x1523b5)return;let _0x14fc4f=_0xe3ff92[_0x197959(0x10b)](0x1)[_0x197959(0xe1)]('\x20')[_0x197959(0x112)]();if(!_0xe3ff92[0x1])return _0x5e78e2['channel'][_0x197959(0xac)](Embed({'title':_0x2736e3[_0x197959(0xa8)]['Commands']['PromoteCommand'][_0x197959(0xb8)],'color':_0x2736e3[_0x197959(0xa8)][_0x197959(0xfe)][_0x197959(0x10a)][_0x197959(0x123)],'description':_0x2736e3[_0x197959(0xa8)][_0x197959(0xfe)][_0x197959(0x10a)]['Desc']['replace'](_0x197959(0xdb),_0x2736e3['Departments'][_0x197959(0xcb)]['Name'])['replace'](_0x197959(0x104),_0x2736e3[_0x197959(0xf6)]['Department2']['Name'])[_0x197959(0xc0)](_0x197959(0xd5),_0x2736e3[_0x197959(0xf6)][_0x197959(0xd6)]['Name'])}));if(_0x14fc4f==_0x2736e3['Departments']['Department1'][_0x197959(0xb0)][_0x197959(0x112)]())_0x5e78e2[_0x197959(0x11f)][_0x197959(0xb3)]([{'id':_0x65027a['id'],'deny':[_0x197959(0xff)]},{'id':_0x2736e3[_0x197959(0xf6)][_0x197959(0xcb)]['RoleID'],'allow':[_0x197959(0xff),_0x197959(0xd8)]}]),_0x5e78e2['channel'][_0x197959(0xac)](Embed({'title':_0x2736e3[_0x197959(0xa8)][_0x197959(0xfe)][_0x197959(0x10a)][_0x197959(0xda)],'color':_0x2736e3[_0x197959(0xa8)]['Commands'][_0x197959(0x10a)][_0x197959(0xb1)]}));else{if(_0x14fc4f==_0x2736e3[_0x197959(0xf6)][_0x197959(0x12d)][_0x197959(0xb0)]['toLowerCase']())_0x5e78e2['channel'][_0x197959(0xb3)]([{'id':_0x65027a['id'],'deny':[_0x197959(0xff)]},{'id':_0x2736e3[_0x197959(0xf6)][_0x197959(0x12d)][_0x197959(0x10f)],'allow':[_0x197959(0xff),_0x197959(0xd8)]}]),_0x5e78e2[_0x197959(0x11f)][_0x197959(0xac)](Embed({'title':_0x2736e3[_0x197959(0xa8)][_0x197959(0xfe)][_0x197959(0x10a)][_0x197959(0xda)],'color':_0x2736e3[_0x197959(0xa8)]['Commands'][_0x197959(0x10a)][_0x197959(0xb1)]}));else _0x14fc4f==_0x2736e3[_0x197959(0xf6)]['Department3'][_0x197959(0xb0)]['toLowerCase']()&&(_0x5e78e2['channel']['overwritePermissions']([{'id':_0x65027a['id'],'deny':[_0x197959(0xff)]},{'id':_0x2736e3[_0x197959(0xf6)][_0x197959(0xd6)]['RoleID'],'allow':['VIEW_CHANNEL',_0x197959(0xd8)]}]),_0x5e78e2['channel']['send'](Embed({'title':_0x2736e3[_0x197959(0xa8)]['Commands'][_0x197959(0x10a)][_0x197959(0xda)],'color':_0x2736e3[_0x197959(0xa8)]['Commands']['PromoteCommand'][_0x197959(0xb1)]})));}break;case _0x2736e3[_0x197959(0xcc)]:if(!Utils[_0x197959(0xc9)](_0x5e78e2[_0x197959(0xe3)],_0x2736e3['PermissionRole']))return _0x5e78e2[_0x197959(0x11f)][_0x197959(0xac)](Embed({'preset':_0x197959(0xfc)}));if(_0x5e78e2['channel'][_0x197959(0xf5)]!=_0x2736e3[_0x197959(0xa6)])return;if(_0x5e78e2[_0x197959(0x11f)]['id']===_0x2736e3[_0x197959(0xd7)])return;const _0x59852e=_0x65027a[_0x197959(0x102)][_0x197959(0xdf)][_0x197959(0x12e)](_0x5e78e2[_0x197959(0x11f)][_0x197959(0xc5)]);if(!_0x59852e)return;let _0x144545=_0xe3ff92[_0x197959(0x10b)](0x1)[_0x197959(0xe1)]('\x20')[_0x197959(0x112)]();if(!_0xe3ff92[0x1])return _0x5e78e2[_0x197959(0x11f)][_0x197959(0xac)](Embed({'title':_0x2736e3[_0x197959(0xa8)]['Commands']['PriorityCommand'][_0x197959(0xb8)],'color':_0x2736e3[_0x197959(0xa8)][_0x197959(0xfe)][_0x197959(0xcc)]['Color'],'description':_0x2736e3[_0x197959(0xa8)][_0x197959(0xfe)][_0x197959(0xcc)][_0x197959(0xf2)][_0x197959(0xc0)](_0x197959(0xa4),_0x2736e3[_0x197959(0x9d)][_0x197959(0xf0)])[_0x197959(0xc0)](_0x197959(0xcf),_0x2736e3[_0x197959(0x9d)][_0x197959(0x9f)])[_0x197959(0xc0)](_0x197959(0xb4),_0x2736e3[_0x197959(0x9d)][_0x197959(0xb2)])}));_0x144545===_0x2736e3[_0x197959(0x9d)][_0x197959(0xf0)][_0x197959(0x112)]()&&(_0x5e78e2[_0x197959(0x11f)][_0x197959(0xd2)](_0x2736e3[_0x197959(0xcc)]+'\x20'+_0x2736e3[_0x197959(0x9d)][_0x197959(0xf0)][_0x197959(0x112)]()),_0x5e78e2[_0x197959(0x11f)][_0x197959(0xac)](Embed({'title':_0x2736e3[_0x197959(0xa8)][_0x197959(0xfe)][_0x197959(0xcc)]['PriorityChanged'],'color':_0x2736e3[_0x197959(0xa8)][_0x197959(0xfe)]['PriorityCommand'][_0x197959(0x119)]})));_0x144545===_0x2736e3[_0x197959(0x9d)][_0x197959(0x9f)][_0x197959(0x112)]()&&(_0x5e78e2[_0x197959(0x11f)][_0x197959(0xd2)](_0x2736e3[_0x197959(0xcc)]+'\x20'+_0x2736e3[_0x197959(0x9d)]['PriorityMid'][_0x197959(0x112)]()),_0x5e78e2[_0x197959(0x11f)][_0x197959(0xac)](Embed({'title':_0x2736e3[_0x197959(0xa8)][_0x197959(0xfe)][_0x197959(0xcc)][_0x197959(0xbf)],'color':_0x2736e3[_0x197959(0xa8)][_0x197959(0xfe)]['PriorityCommand'][_0x197959(0x119)]})));_0x144545===_0x2736e3[_0x197959(0x9d)][_0x197959(0xb2)][_0x197959(0x112)]()&&(_0x5e78e2['channel'][_0x197959(0xd2)](_0x2736e3[_0x197959(0xcc)]+'\x20'+_0x2736e3[_0x197959(0x9d)][_0x197959(0xb2)]),_0x5e78e2[_0x197959(0x11f)][_0x197959(0xac)](Embed({'title':_0x2736e3[_0x197959(0xa8)][_0x197959(0xfe)][_0x197959(0xcc)][_0x197959(0xbf)],'color':_0x2736e3[_0x197959(0xa8)][_0x197959(0xfe)]['PriorityCommand'][_0x197959(0x119)]})));}},'description':''+_0x2736e3[_0x391431(0x117)],'usage':_0x2736e3[_0x391431(0x12c)]+_0x391431(0x101),'aliases':[],'type':_0x391431(0x98)}),EventHandler[_0x391431(0xa0)](_0x391431(0xbc),async(_0x2d6073,_0x59842d)=>{const _0x6c14cd=_0x391431;if(_0x59842d['author'][_0x6c14cd(0xae)])return;const _0x4c0b2c=_0x2d6073[_0x6c14cd(0x106)]['cache'][_0x6c14cd(0x12e)](_0x2736e3[_0x6c14cd(0xee)]),_0x4bc2e8=_0x4c0b2c[_0x6c14cd(0x11b)]['cache'][_0x6c14cd(0x12e)](_0x2736e3['LogsChannelID']);if(_0x59842d[_0x6c14cd(0x11f)][_0x6c14cd(0xef)]==='dm'){if(!_0xfecf93[_0x6c14cd(0x97)](_0x59842d[_0x6c14cd(0x109)]['id'])){const _0x3a1893=!!_0x4c0b2c['channels'][_0x6c14cd(0xdf)][_0x6c14cd(0xe0)](_0x33a65e=>_0x33a65e[_0x6c14cd(0xc5)]===_0x59842d['author']['id']),_0x24749f=new Discord[(_0x6c14cd(0xb7))]()[_0x6c14cd(0xc7)](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0xa3)][_0x6c14cd(0xb8)])[_0x6c14cd(0xa1)](_0x2736e3['Embeds'][_0x6c14cd(0xa3)][_0x6c14cd(0xf2)][_0x6c14cd(0xc0)](_0x6c14cd(0xca),_0x59842d['content']))[_0x6c14cd(0xfb)](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0xa3)]['Color']),_0x4a6085=await _0x59842d[_0x6c14cd(0x11f)][_0x6c14cd(0xac)](_0x24749f);await _0x4a6085['react'](_0x2736e3[_0x6c14cd(0xfd)]),await _0x4a6085[_0x6c14cd(0xbe)](_0x2736e3[_0x6c14cd(0xdd)]);try{const _0x3d2023=(_0x41e9c0,_0x3d2305)=>[_0x2736e3[_0x6c14cd(0xfd)],_0x2736e3[_0x6c14cd(0xdd)]][_0x6c14cd(0xa9)](_0x41e9c0[_0x6c14cd(0xf1)][_0x6c14cd(0xc5)])&&!_0x3d2305[_0x6c14cd(0xae)],_0x287017=await _0x4a6085[_0x6c14cd(0x96)](_0x3d2023,{'max':0x1}),_0x5226dc=_0x287017[_0x6c14cd(0x12e)](_0x2736e3[_0x6c14cd(0xfd)])||_0x287017['get'](_0x2736e3[_0x6c14cd(0xdd)]);if(_0x5226dc[_0x6c14cd(0xf1)][_0x6c14cd(0xc5)]===_0x2736e3[_0x6c14cd(0xfd)]){if(_0x3a1893===!![]){const _0x2edb76=await _0x4c0b2c[_0x6c14cd(0x11b)][_0x6c14cd(0xdf)][_0x6c14cd(0xe0)](_0x14de00=>_0x14de00[_0x6c14cd(0xc5)]===_0x59842d[_0x6c14cd(0x109)]['id']),_0x401a5e=new Discord[(_0x6c14cd(0xb7))]()[_0x6c14cd(0xc7)](_0x2736e3['Embeds']['MessageSended'][_0x6c14cd(0xb8)])[_0x6c14cd(0xfb)](_0x2736e3[_0x6c14cd(0xa8)]['MessageSended']['Color'])[_0x6c14cd(0xa1)](_0x2736e3[_0x6c14cd(0xa8)]['MessageSended'][_0x6c14cd(0xf2)][_0x6c14cd(0xc0)]('%MESSAGE%',_0x59842d[_0x6c14cd(0x127)]));_0x59842d[_0x6c14cd(0x109)]['send'](_0x401a5e);const _0xe0dd63=new Discord[(_0x6c14cd(0xb7))]()['setTitle'](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0x9e)][_0x6c14cd(0xb8)])['setColor'](_0x2736e3[_0x6c14cd(0xa8)]['MailEmbed'][_0x6c14cd(0x123)])[_0x6c14cd(0xc2)](_0x59842d['author'][_0x6c14cd(0xd4)],_0x59842d[_0x6c14cd(0x109)]['displayAvatarURL']())[_0x6c14cd(0xa1)](_0x6c14cd(0xbd)+_0x59842d[_0x6c14cd(0x109)][_0x6c14cd(0xbb)]+'**]\x20:\x20'+_0x59842d[_0x6c14cd(0x127)]);await _0x2edb76[_0x6c14cd(0xac)](_0xe0dd63);}else{if(_0x3a1893===![]){if(!_0x2736e3[_0x6c14cd(0xc8)]){const _0x48d576=_0x4c0b2c['roles'][_0x6c14cd(0xdf)][_0x6c14cd(0xe0)](_0x4478b6=>_0x4478b6[_0x6c14cd(0xc5)]===_0x2736e3['SupportRole'])||_0x4c0b2c['roles'][_0x6c14cd(0xdf)][_0x6c14cd(0x12e)](_0x2736e3[_0x6c14cd(0xa5)]),_0xfa30bd=await _0x4c0b2c[_0x6c14cd(0x11b)][_0x6c14cd(0x110)](_0x59842d[_0x6c14cd(0x109)]['id'],{'type':_0x6c14cd(0xec),'parent':''+_0x2736e3[_0x6c14cd(0xa6)],'permissionOverwrites':[{'id':_0x4c0b2c['id'],'deny':[_0x6c14cd(0xff)]},{'id':''+_0x48d576['id'],'allow':[_0x6c14cd(0xff),_0x6c14cd(0xd8)]}]});_0x4bc2e8[_0x6c14cd(0xac)](new Discord[(_0x6c14cd(0xb7))]()[_0x6c14cd(0xc7)](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0x11d)][_0x6c14cd(0xb8)])[_0x6c14cd(0xfb)](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0x11d)][_0x6c14cd(0x123)])[_0x6c14cd(0xa1)](_0x2736e3[_0x6c14cd(0xa8)]['LogsEmbed'][_0x6c14cd(0xf2)][_0x6c14cd(0xc0)]('%AUTHOR%',''+_0x59842d[_0x6c14cd(0x109)][_0x6c14cd(0xd4)])[_0x6c14cd(0xc0)](_0x6c14cd(0x103),''+_0xfa30bd)));const _0x2c1f4e=new Discord[(_0x6c14cd(0xb7))]()[_0x6c14cd(0xc7)](_0x2736e3[_0x6c14cd(0xa8)]['MessageSended'][_0x6c14cd(0xb8)])['setColor'](_0x2736e3[_0x6c14cd(0xa8)]['MessageSended'][_0x6c14cd(0x123)])['setDescription'](_0x2736e3[_0x6c14cd(0xa8)]['MessageSended']['Desc'][_0x6c14cd(0xc0)]('%MESSAGE%',''+_0x59842d[_0x6c14cd(0x127)]));_0x59842d[_0x6c14cd(0x109)][_0x6c14cd(0xac)](_0x2c1f4e);_0x2736e3[_0x6c14cd(0xcd)]&&_0xfa30bd[_0x6c14cd(0xac)](''+_0x48d576);const _0x425a5a=new Discord[(_0x6c14cd(0xb7))]()[_0x6c14cd(0xc7)](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0x9e)][_0x6c14cd(0xb8)])[_0x6c14cd(0xfb)](_0x2736e3['Embeds'][_0x6c14cd(0x9e)][_0x6c14cd(0x123)])[_0x6c14cd(0xc2)](_0x59842d[_0x6c14cd(0x109)]['tag'],_0x59842d[_0x6c14cd(0x109)][_0x6c14cd(0xaf)]())[_0x6c14cd(0xa1)]('[**'+_0x59842d[_0x6c14cd(0x109)][_0x6c14cd(0xbb)]+_0x6c14cd(0x111)+_0x59842d['content']);await _0xfa30bd['send'](_0x425a5a);return;}const _0x2b2848=new Discord[(_0x6c14cd(0xb7))]()['setTitle'](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0x12a)][_0x6c14cd(0xb8)])[_0x6c14cd(0xa7)]({'name':_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0x12a)]['Department1'][_0x6c14cd(0xc5)][_0x6c14cd(0xc0)](_0x6c14cd(0x10d),_0x2736e3[_0x6c14cd(0xf6)][_0x6c14cd(0xcb)][_0x6c14cd(0xaa)]),'value':_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0x12a)][_0x6c14cd(0xcb)][_0x6c14cd(0x108)][_0x6c14cd(0xc0)](_0x6c14cd(0xdb),_0x2736e3['Departments']['Department1'][_0x6c14cd(0xb0)])},{'name':_0x2736e3[_0x6c14cd(0xa8)]['Department']['Department2'][_0x6c14cd(0xc5)][_0x6c14cd(0xc0)](_0x6c14cd(0x10d),_0x2736e3[_0x6c14cd(0xf6)][_0x6c14cd(0x12d)][_0x6c14cd(0xaa)]),'value':_0x2736e3['Embeds']['Department']['Department2'][_0x6c14cd(0x108)]['replace']('%DEP2ROLE%',_0x2736e3[_0x6c14cd(0xf6)][_0x6c14cd(0x12d)]['Name'])},{'name':_0x2736e3[_0x6c14cd(0xa8)]['Department'][_0x6c14cd(0xd6)][_0x6c14cd(0xc5)]['replace'](_0x6c14cd(0x10d),_0x2736e3[_0x6c14cd(0xf6)][_0x6c14cd(0xd6)][_0x6c14cd(0xaa)]),'value':_0x2736e3['Embeds'][_0x6c14cd(0x12a)][_0x6c14cd(0xd6)]['value']['replace'](_0x6c14cd(0xd5),_0x2736e3['Departments'][_0x6c14cd(0xd6)][_0x6c14cd(0xb0)])})['setColor'](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0x12a)][_0x6c14cd(0x123)]),_0x1aabd3=await _0x59842d[_0x6c14cd(0x11f)][_0x6c14cd(0xac)](_0x2b2848);await _0x1aabd3['react'](_0x2736e3[_0x6c14cd(0xf6)][_0x6c14cd(0xcb)][_0x6c14cd(0xaa)]),await _0x1aabd3[_0x6c14cd(0xbe)](_0x2736e3[_0x6c14cd(0xf6)][_0x6c14cd(0x12d)][_0x6c14cd(0xaa)]),await _0x1aabd3[_0x6c14cd(0xbe)](_0x2736e3[_0x6c14cd(0xf6)][_0x6c14cd(0xd6)][_0x6c14cd(0xaa)]);const _0x426c90=(_0xd3e259,_0x49b5ed)=>[_0x2736e3[_0x6c14cd(0xf6)][_0x6c14cd(0xcb)]['Emoji'],_0x2736e3[_0x6c14cd(0xf6)][_0x6c14cd(0x12d)][_0x6c14cd(0xaa)],_0x2736e3[_0x6c14cd(0xf6)][_0x6c14cd(0xd6)][_0x6c14cd(0xaa)]][_0x6c14cd(0xa9)](_0xd3e259[_0x6c14cd(0xf1)][_0x6c14cd(0xc5)])&&!_0x49b5ed['bot'],_0x3fed47=await _0x1aabd3['awaitReactions'](_0x426c90,{'max':0x1}),_0x593e17=_0x3fed47[_0x6c14cd(0x12e)](_0x2736e3['Departments'][_0x6c14cd(0xcb)]['Emoji'])||_0x3fed47[_0x6c14cd(0x12e)](_0x2736e3[_0x6c14cd(0xf6)][_0x6c14cd(0x12d)][_0x6c14cd(0xaa)])||_0x3fed47[_0x6c14cd(0x12e)](_0x2736e3[_0x6c14cd(0xf6)][_0x6c14cd(0xd6)][_0x6c14cd(0xaa)]);if(_0x593e17[_0x6c14cd(0xf1)][_0x6c14cd(0xc5)]===_0x2736e3['Departments']['Department1'][_0x6c14cd(0xaa)]){const _0x2d1bce=_0x4c0b2c[_0x6c14cd(0xe6)]['cache'][_0x6c14cd(0x12e)](_0x2736e3[_0x6c14cd(0xf6)][_0x6c14cd(0xcb)][_0x6c14cd(0x10f)]),_0x192f63=await _0x4c0b2c[_0x6c14cd(0x11b)][_0x6c14cd(0x110)](_0x59842d[_0x6c14cd(0x109)]['id'],{'type':'text','parent':_0x2736e3[_0x6c14cd(0xa6)],'permissionOverwrites':[{'id':_0x4c0b2c['id'],'deny':[_0x6c14cd(0xff)]},{'id':_0x2736e3[_0x6c14cd(0xf6)][_0x6c14cd(0xcb)][_0x6c14cd(0x10f)],'allow':['VIEW_CHANNEL',_0x6c14cd(0xd8)]}]});_0x4bc2e8['send'](new Discord[(_0x6c14cd(0xb7))]()['setTitle'](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0x11d)][_0x6c14cd(0xb8)])[_0x6c14cd(0xfb)](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0x11d)]['Color'])['setDescription'](_0x2736e3['Embeds'][_0x6c14cd(0x11d)][_0x6c14cd(0xf2)][_0x6c14cd(0xc0)](_0x6c14cd(0xfa),''+_0x59842d[_0x6c14cd(0x109)]['tag'])[_0x6c14cd(0xc0)](_0x6c14cd(0x103),''+_0x192f63)));const _0x1936c9=new Discord[(_0x6c14cd(0xb7))]()[_0x6c14cd(0xc7)](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0xb5)][_0x6c14cd(0xb8)])[_0x6c14cd(0xfb)](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0xb5)][_0x6c14cd(0x123)])[_0x6c14cd(0xa1)](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0xb5)][_0x6c14cd(0xf2)]['replace'](_0x6c14cd(0xca),''+_0x59842d[_0x6c14cd(0x127)]));_0x59842d[_0x6c14cd(0x109)][_0x6c14cd(0xac)](_0x1936c9);_0x2736e3[_0x6c14cd(0xcd)]&&_0x192f63[_0x6c14cd(0xac)](''+_0x2d1bce);const _0x3e141f=new Discord[(_0x6c14cd(0xb7))]()[_0x6c14cd(0xc7)](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0x9e)][_0x6c14cd(0xb8)])[_0x6c14cd(0xfb)](_0x2736e3['Embeds'][_0x6c14cd(0x9e)]['Color'])[_0x6c14cd(0xc2)](_0x59842d[_0x6c14cd(0x109)][_0x6c14cd(0xd4)],_0x59842d[_0x6c14cd(0x109)][_0x6c14cd(0xaf)]())[_0x6c14cd(0xa1)](_0x6c14cd(0xbd)+_0x59842d['author'][_0x6c14cd(0xbb)]+_0x6c14cd(0x111)+_0x59842d['content']);await _0x192f63['send'](_0x3e141f);}else{if(_0x593e17[_0x6c14cd(0xf1)][_0x6c14cd(0xc5)]===_0x2736e3[_0x6c14cd(0xf6)][_0x6c14cd(0x12d)][_0x6c14cd(0xaa)]){const _0x5f1cda=_0x4c0b2c[_0x6c14cd(0xe6)][_0x6c14cd(0xdf)][_0x6c14cd(0x12e)](_0x2736e3[_0x6c14cd(0xf6)][_0x6c14cd(0x12d)][_0x6c14cd(0x10f)]),_0x50e0f8=await _0x4c0b2c[_0x6c14cd(0x11b)]['create'](_0x59842d[_0x6c14cd(0x109)]['id'],{'type':'text','parent':_0x2736e3[_0x6c14cd(0xa6)],'permissionOverwrites':[{'id':_0x4c0b2c['id'],'deny':[_0x6c14cd(0xff)]},{'id':_0x2736e3[_0x6c14cd(0xf6)][_0x6c14cd(0x12d)][_0x6c14cd(0x10f)],'allow':[_0x6c14cd(0xff),_0x6c14cd(0xd8)]}]});_0x4bc2e8[_0x6c14cd(0xac)](new Discord[(_0x6c14cd(0xb7))]()['setTitle'](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0x11d)]['Title'])[_0x6c14cd(0xfb)](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0x11d)]['Color'])[_0x6c14cd(0xa1)](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0x11d)][_0x6c14cd(0xf2)]['replace'](_0x6c14cd(0xfa),''+_0x59842d[_0x6c14cd(0x109)]['tag'])[_0x6c14cd(0xc0)](_0x6c14cd(0x103),''+_0x50e0f8)));const _0x4314c0=new Discord[(_0x6c14cd(0xb7))]()['setTitle'](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0xb5)][_0x6c14cd(0xb8)])[_0x6c14cd(0xfb)](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0xb5)][_0x6c14cd(0x123)])[_0x6c14cd(0xa1)](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0xb5)][_0x6c14cd(0xf2)][_0x6c14cd(0xc0)](_0x6c14cd(0xca),''+_0x59842d[_0x6c14cd(0x127)]));_0x59842d[_0x6c14cd(0x109)][_0x6c14cd(0xac)](_0x4314c0);_0x2736e3[_0x6c14cd(0xcd)]&&_0x50e0f8[_0x6c14cd(0xac)](''+_0x5f1cda);const _0x285091=new Discord[(_0x6c14cd(0xb7))]()[_0x6c14cd(0xc7)](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0x9e)]['Title'])['setColor'](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0x9e)]['Color'])[_0x6c14cd(0xc2)](_0x59842d[_0x6c14cd(0x109)]['tag'],_0x59842d[_0x6c14cd(0x109)]['displayAvatarURL']())[_0x6c14cd(0xa1)](_0x6c14cd(0xbd)+_0x59842d['author'][_0x6c14cd(0xbb)]+'**]\x20:\x20'+_0x59842d['content']);await _0x50e0f8['send'](_0x285091);}else{if(_0x593e17[_0x6c14cd(0xf1)][_0x6c14cd(0xc5)]===_0x2736e3[_0x6c14cd(0xf6)]['Department3'][_0x6c14cd(0xaa)]){const _0xa7dcf4=_0x4c0b2c[_0x6c14cd(0xe6)]['cache'][_0x6c14cd(0x12e)](_0x2736e3['Departments'][_0x6c14cd(0xd6)][_0x6c14cd(0x10f)]),_0xc30a5d=await _0x4c0b2c[_0x6c14cd(0x11b)][_0x6c14cd(0x110)](_0x59842d[_0x6c14cd(0x109)]['id'],{'type':_0x6c14cd(0xec),'parent':_0x2736e3[_0x6c14cd(0xa6)],'permissionOverwrites':[{'id':_0x4c0b2c['id'],'deny':[_0x6c14cd(0xff)]},{'id':_0x2736e3[_0x6c14cd(0xf6)][_0x6c14cd(0xd6)][_0x6c14cd(0x10f)],'allow':[_0x6c14cd(0xff),'SEND_MESSAGES']}]});_0x4bc2e8[_0x6c14cd(0xac)](new Discord[(_0x6c14cd(0xb7))]()[_0x6c14cd(0xc7)](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0x11d)][_0x6c14cd(0xb8)])[_0x6c14cd(0xfb)](_0x2736e3[_0x6c14cd(0xa8)]['LogsEmbed']['Color'])['setDescription'](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0x11d)][_0x6c14cd(0xf2)][_0x6c14cd(0xc0)](_0x6c14cd(0xfa),''+_0x59842d['author'][_0x6c14cd(0xd4)])[_0x6c14cd(0xc0)]('%MAILCHANNEL%',''+_0xc30a5d)));const _0x137a2a=new Discord[(_0x6c14cd(0xb7))]()[_0x6c14cd(0xc7)](_0x2736e3[_0x6c14cd(0xa8)]['MessageSended'][_0x6c14cd(0xb8)])[_0x6c14cd(0xfb)](_0x2736e3['Embeds']['MessageSended']['Color'])[_0x6c14cd(0xa1)](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0xb5)][_0x6c14cd(0xf2)][_0x6c14cd(0xc0)](_0x6c14cd(0xca),''+_0x59842d[_0x6c14cd(0x127)]));_0x59842d[_0x6c14cd(0x109)][_0x6c14cd(0xac)](_0x137a2a);_0x2736e3[_0x6c14cd(0xcd)]&&_0xc30a5d[_0x6c14cd(0xac)](''+_0xa7dcf4);const _0x4ff46b=new Discord['MessageEmbed']()[_0x6c14cd(0xc7)](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0x9e)]['Title'])[_0x6c14cd(0xfb)](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0x9e)][_0x6c14cd(0x123)])[_0x6c14cd(0xc2)](_0x59842d[_0x6c14cd(0x109)][_0x6c14cd(0xd4)],_0x59842d[_0x6c14cd(0x109)][_0x6c14cd(0xaf)]())[_0x6c14cd(0xa1)](_0x6c14cd(0xbd)+_0x59842d[_0x6c14cd(0x109)]['username']+_0x6c14cd(0x111)+_0x59842d[_0x6c14cd(0x127)]);await _0xc30a5d[_0x6c14cd(0xac)](_0x4ff46b);}}}}}}else _0x5226dc[_0x6c14cd(0xf1)][_0x6c14cd(0xc5)]===_0x2736e3['RejectEmoji']&&_0x59842d[_0x6c14cd(0x109)][_0x6c14cd(0xac)](new Discord[(_0x6c14cd(0xb7))]()[_0x6c14cd(0xc7)](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0x99)]['Title'])[_0x6c14cd(0xfb)](_0x2736e3['Embeds'][_0x6c14cd(0x99)]['Color'])[_0x6c14cd(0xa1)](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0x99)][_0x6c14cd(0xf2)][_0x6c14cd(0xc0)](_0x6c14cd(0xca),''+_0x59842d[_0x6c14cd(0x127)])));}catch(_0x576685){_0xfecf93['delete'](_0x59842d[_0x6c14cd(0x109)]['id']);}}}if(!_0x59842d[_0x6c14cd(0xab)])return;if(_0x59842d['channel'][_0x6c14cd(0xf5)]!=_0x2736e3[_0x6c14cd(0xa6)])return;const _0x4beb3a=_0x2d6073[_0x6c14cd(0x11a)][_0x6c14cd(0xdf)][_0x6c14cd(0x12e)](_0x59842d['channel'][_0x6c14cd(0xc5)]);if(_0x59842d[_0x6c14cd(0x127)]['includes'](_0x2736e3[_0x6c14cd(0x12c)]))return;const _0x1abbc5=new Discord[(_0x6c14cd(0xb7))]()[_0x6c14cd(0xc7)](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0xf3)]['Title'])[_0x6c14cd(0xfb)](_0x2736e3[_0x6c14cd(0xa8)][_0x6c14cd(0xf3)][_0x6c14cd(0x123)])[_0x6c14cd(0xc2)](_0x59842d[_0x6c14cd(0x109)][_0x6c14cd(0xd4)],_0x59842d[_0x6c14cd(0x109)][_0x6c14cd(0xaf)]())[_0x6c14cd(0xa1)](_0x6c14cd(0xbd)+_0x59842d[_0x6c14cd(0x109)][_0x6c14cd(0xbb)]+_0x6c14cd(0x111)+_0x59842d['content']);_0x4beb3a[_0x6c14cd(0xac)](_0x1abbc5);});};