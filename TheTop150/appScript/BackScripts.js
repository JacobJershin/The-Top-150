function myFunction() {}
var App = SpreadsheetApp //this is just kinda needed for any kind of App Script aplication, it sets up our spreadsheet in the directory of my google drive
var SS = App.getActiveSpreadsheet()  //SS is a set up variable that calls for the spread sheet so we can do things with it in later lines

var ListPage = SS.getSheetByName("test")
var API_Sheet = SS.getSheetByName("test2") //this is so cringe lmao ok well here we go
var LeaderBoard = SS.getSheetByName("test3")

/*
index = 1
while (index < 151) {
  var LevelSyntax = ListPage.getRange(index, 3).getValues()  
    
  API_Sheet.getRange(index, 1).setValue("var ")
  API_Sheet.getRange(index, 2).setValue(LevelSyntax)
  API_Sheet.getRange(index, 4).setValue(index)
  index++
  console.log(index)
}
index = 1
while (index < 151) {
  var LevelSyntax = ListPage.getRange(index, 3).getValues()  
    
  API_Sheet.getRange(151, index + index + index + index).setValue('"')
  API_Sheet.getRange(151, index + index + index + index + 1).setValue(LevelSyntax)
  API_Sheet.getRange(151, index + index + index + index + 2).setValue('"')
  API_Sheet.getRange(151, index + index + index + index + 3).setValue(",")
  index += 1
  console.log(index)
}
index = 1
while (index < 151) {
  var LevelSyntax = ListPage.getRange(index, 4).getValues()  
    
  API_Sheet.getRange(152, index + index + index + index).setValue('"')
  API_Sheet.getRange(152, index + index + index + index + 1).setValue(LevelSyntax)
  API_Sheet.getRange(152, index + index + index + index + 2).setValue('"')
  API_Sheet.getRange(152, index + index + index + index + 3).setValue(",")
  index += 1
  console.log(index)
}
  */

/*
index = 1
while (index < 207) {
  var Points = LeaderBoard.getRange(index, 1).getValues()  
  var Names = LeaderBoard.getRange(index, 2).getValues()  
    
  API_Sheet.getRange(153, index + index + index + index + index + index).setValue('"')
  API_Sheet.getRange(153, index + index + index + index + index + index + 1).setValue(Names)
  API_Sheet.getRange(153, index + index + index + index + index + index + 2).setValue('"')
  API_Sheet.getRange(153, index + index + index + index + index + index + 3).setValue(",")
  API_Sheet.getRange(153, index + index + index + index + index + index + 4).setValue(Points)
  API_Sheet.getRange(153, index + index + index + index + index + index + 5).setValue(",")
  index += 1
  console.log(index)
}
*/
  
index = 1
while (index < 151) {
  var VideoLink = ListPage.getRange(index, 2).getValues()  
    
  API_Sheet.getRange(155, index + index + index + index).setValue('"')
  API_Sheet.getRange(155, index + index + index + index + 1).setValue(VideoLink)
  API_Sheet.getRange(155, index + index + index + index + 2).setValue('"')
  API_Sheet.getRange(155, index + index + index + index + 3).setValue(",")
  index += 1
  console.log(index)
}

var 	Daphnes_Finale	= 	1
var 	Magia90s	=	2
var 	Aya_Revive	=	3
var 	Lunaria	=	4
var 	GlacialEclipse	=	5
var 	Ultimate_Speedrun	=	6
var 	Ozymandias	=	7
var 	YuHo_160	=	8
var 	Verdant	=	9
var 	BSW	=	10
var 	Ascension_to_heaven	=	11
var 	Singularity	=	12
var 	Ominous	=	13
var 	Death_Escape	=	14
var 	Final_Challenge_Speedrun	=	15
var 	VenetusDouble	=	16
var 	Insomniac	=	17
var 	Kamikatze	=	18
var 	Happy_New_Year	=	19
var 	The_Last_Memories	=	20
var 	Scarlet_Stronghold_Double	=	21
var 	ProjectPipes2	=	22
var 	BombSpace	=	23
var 	Bubblebath	=	24
var 	Deep_Impact	=	25
var 	Overture	=	26
var 	Kitty_Manya	=	27
var 	AQuA	=	28
var 	ChainComplex	=	29
var 	Phoenix	=	30
var 	Ashura	=	31
var 	Cistus_Albidus	=	32
var 	Precisely	=	33
var 	Ultimate_Speedrun_??????	=	34
var 	OG	=	35
var 	Greater_Fusion	=	36
var 	Final_Battle	=	37
var 	Rainbow	=	38
var 	Yoshivenetus	=	39
var 	BoF	=	40
var 	Magnolia	=	41
var 	Parousia	=	42
var 	Eucalyptus	=	43
var 	Phalaenopsis	=	44
var 	Its_Just_A_Game	=	45
var 	Amorous	=	46
var 	Lily	=	47
var 	AdventuresEnd	=	48
var 	Amur	=	49
var 	Nostolgic	=	50
var 	Subetenoyubi	=	51
var 	SandySanctuary	=	52
var 	Iced_desrt	=	53
var 	RunnersHigh	=	54
var 	Wrath_of_Leviathan	=	55
var 	Sanduleak	=	56
var 	SuperSpeedrun100	=	57
var 	Bouquet	=	58
var 	We_Were_Reborn	=	59
var 	Lament_of_distorted_waltz	=	60
var 	ProjectBombWithATwist	=	61
var 	Delirium_Trigger	=	62
var 	Kaizo_Encounters	=	63
var 	PainForPlesure	=	64
var 	Project_Pipes	=	65
var 	Magical_Night	=	66
var 	Frozen_Eclipse	=	67
var 	Thoroughfare	=	68
var 	MorphasManor	=	69
var 	Legacy	=	70
var 	No_Hay_Manera	=	71
var 	Pokemon_Journeys	=	72
var 	Impregnable_Defense	=	73
var 	SuperSpeedRun130	=	74
var 	??????????????????	=	75
var 	????????????	=	76
var 	Regain_Peace	=	77
var 	SapphireSanctum	=	78
var 	SeriousMonsterMystery	=	79
var 	Aeonian_Temenos	=	80
var 	Lunchfor180yen	=	81
var 	Glacial	=	82
var 	Extra_Twist	=	83
var 	Ashen	=	84
var 	ThirdStage	=	85
var 	Happy_Place	=	86
var 	Pogey	=	87
var 	BigBirdos_Barn	=	88
var 	SPEEDRUN_EX	=	89
var 	Speedrun120	=	90
var 	LnVSZone	=	91
var 	Chimera	=	92
var 	Oracion	=	93
var 	Calamitous	=	94
var 	Castillo	=	95
var 	Tsar_Bomba	=	96
var 	Motch_Limit	=	97
var 	UMRELLA	=	98
var 	Busy_Night	=	99
var 	Rain	=	100
var 	Scarlet	=	101
var 	Crossing_Indignation	=	102
var 	Four_Devas	=	103
var 	Magma_Shells	=	104
var 	Sorrowful_Mansions	=	105
var 	Ashes_of_Eden	=	106
var 	Messy_Shadows	=	107
var 	Nolucia	=	108
var 	Lost_Forest	=	109
var 	Arduous_Aqueducts	=	110
var 	Ninji	=	111
var 	Item_Wonderland	=	112
var 	Sprint_Before_Dawn	=	113
var 	Heavenly_World	=	114
var 	Shellcuslovania	=	115
var 	Atomic_Bomb	=	116
var 	Austere	=	117
var 	Lycoris	=	118
var 	EmitLight	=	119
var 	Hephaistos	=	120
var 	GoingUP	=	121
var 	Frostbite_Desert	=	122
var 	Nebula	=	123
var 	Noborito	=	124
var 	LostCollection	=	125
var 	Storms_A_Brewin	=	126
var 	Etched_Glacier	=	127
var 	ScarletStrongholdPswitchx3	=	128
var 	Kinoko	=	129
var 	FeelsShellMan	=	130
var 	Quintet	=	131
var 	Fantastic_Snow_Field	=	132
var 	Supiguruchan	=	133
var 	Germlin	=	134
var 	Fiery_Wind_Blaster	=	135
var 	Death_Time	=	136
var 	Venom	=	137
var 	Burning_Palace	=	138
var 	Katz_Kradle	=	139
var 	Surgical_Shells	=	140
var 	Flame	=	141
var 	Champions_Trial	=	142
var 	Beautiful_Blue	=	143
var 	NoBombNoLife	=	144
var 	NA	= 145
var 	Harrowing_Skies	=	146
var 	Biting_Blizzard	=	147
var 	????????????????????????????????????????????????????????????	=	148
var 	NightmareNotM	=	149
var 	Atlantis4	= 150
  var EveryLevelArray = [			 	Daphnes_Finale	 	,	 	Magia90s	 	,	 	Aya_Revive	 	,	 	Lunaria	 	,	 	GlacialEclipse	 	,	 	Ultimate_Speedrun	 	,	 	Ozymandias	 	,	 	YuHo_160	 	,	 	Verdant	 	,	 	BSW	 	,	 	Ascension_to_heaven	 	,	 	Singularity	 	,	 	Ominous	 	,	 	Death_Escape	 	,	 	Final_Challenge_Speedrun	 	,	 	VenetusDouble	 	,	 	Insomniac	 	,	 	Kamikatze	 	,	 	Happy_New_Year	 	,	 	The_Last_Memories	 	,	 	Scarlet_Stronghold_Double	 	,	 	ProjectPipes2	 	,	 	BombSpace	 	,	 	Bubblebath	 	,	 	Deep_Impact	 	,	 	Overture	 	,	 	Kitty_Manya	 	,	 	AQuA	 	,	 	ChainComplex	 	,	 	Phoenix	 	,	 	Ashura	 	,	 	Cistus_Albidus	 	,	 	Precisely	 	,	 	Ultimate_Speedrun_??????	 	,	 	OG	 	,	 	Greater_Fusion	 	,	 	Final_Battle	 	,	 	Rainbow	 	,	 	Yoshivenetus	 	,	 	BoF	 	,	 	Magnolia	 	,	 	Parousia	 	,	 	Eucalyptus	 	,	 	Phalaenopsis	 	,	 	Its_Just_A_Game	 	,	 	Amorous	 	,	 	Lily	 	,	 	AdventuresEnd	 	,	 	Amur	 	,	 	Nostolgic	 	,	 	Subetenoyubi	 	,	 	SandySanctuary	 	,	 	Iced_desrt	 	,	 	RunnersHigh	 	,	 	Wrath_of_Leviathan	 	,	 	Sanduleak	 	,	 	SuperSpeedrun100	 	,	 	Bouquet	 	,	 	We_Were_Reborn	 	,	 	Lament_of_distorted_waltz	 	,	 	ProjectBombWithATwist	 	,	 	Delirium_Trigger	 	,	 	Kaizo_Encounters	 	,	 	PainForPlesure	 	,	 	Project_Pipes	 	,	 	Magical_Night	 	,	 	Frozen_Eclipse	 	,	 	Thoroughfare	 	,	 	MorphasManor	 	,	 	Legacy	 	,	 	No_Hay_Manera	 	,	 	Pokemon_Journeys	 	,	 	Impregnable_Defense	 	,	 	SuperSpeedRun130	 	,	 	??????????????????	 	,	 	????????????	 	,	 	Regain_Peace	 	,	 	SapphireSanctum	 	,	 	SeriousMonsterMystery	 	,	 	Aeonian_Temenos	 	,	 	Lunchfor180yen	 	,	 	Glacial	 	,	 	Extra_Twist	 	,	 	Ashen	 	,	 	ThirdStage	 	,	 	Happy_Place	 	,	 	Pogey	 	,	 	BigBirdos_Barn	 	,	 	SPEEDRUN_EX	 	,	 	Speedrun120	 	,	 	LnVSZone	 	,	 	Chimera	 	,	 	Oracion	 	,	 	Calamitous	 	,	 	Castillo	 	,	 	Tsar_Bomba	 	,	 	Motch_Limit	 	,	 	UMRELLA	 	,	 	Busy_Night	 	,	 	Rain	 	,	 	Scarlet	 	,	 	Crossing_Indignation	 	,	 	Four_Devas	 	,	 	Magma_Shells	 	,	 	Sorrowful_Mansions	 	,	 	Ashes_of_Eden	 	,	 	Messy_Shadows	 	,	 	Nolucia	 	,	 	Lost_Forest	 	,	 	Arduous_Aqueducts	 	,	 	Ninji	 	,	 	Item_Wonderland	 	,	 	Sprint_Before_Dawn	 	,	 	Heavenly_World	 	,	 	Shellcuslovania	 	,	 	Atomic_Bomb	 	,	 	Austere	 	,	 	Lycoris	 	,	 	EmitLight	 	,	 	Hephaistos	 	,	 	GoingUP	 	,	 	Frostbite_Desert	 	,	 	Nebula	 	,	 	Noborito	 	,	 	LostCollection	 	,	 	Storms_A_Brewin	 	,	 	Etched_Glacier	 	,	 	ScarletStrongholdPswitchx3	 	,	 	Kinoko	 	,	 	FeelsShellMan	 	,	 	Quintet	 	,	 	Fantastic_Snow_Field	 	,	 	Supiguruchan	 	,	 	Germlin	 	,	 	Fiery_Wind_Blaster	 	,	 	Death_Time	 	,	 	Venom	 	,	 	Burning_Palace	 	,	 	Katz_Kradle	 	,	 	Surgical_Shells	 	,	 	Flame	 	,	 	Champions_Trial	 	,	 	Beautiful_Blue	 	,	 	NoBombNoLife	 	,	 	NA	 	,	 	Harrowing_Skies	 	,	 	Biting_Blizzard	 	,	 	????????????????????????????????????????????????????????????	 	,	 	NightmareNotM	 	,	 	Atlantis4	 	,]
//------------------------------------------------------------------------------
      const PeteClears = [Scarlet_Stronghold_Double, Bubblebath, Project_Pipes, ProjectBombWithATwist, Scarlet, ScarletStrongholdPswitchx3, Lost_Forest, Fiery_Wind_Blaster, ProjectPipes2, Ascension_to_heaven]
      const PeteProgressLevel = [Daphnes_Finale, Ozymandias, Yoshivenetus, Amorous, Tsar_Bomba, Glacial, YuHo_160, OG, NoBombNoLife, BSW, BombSpace, Pogey]
      const PeteProgress = [64, 88, 55, 99, 89, 85, 62, 85, 95, 80, 55, 95]

      const ?????????PlayerClears = [Aya_Revive, Ultimate_Speedrun, Final_Challenge_Speedrun, YuHo_160, Singularity, Lunaria, The_Last_Memories, Death_Escape, Happy_New_Year, Phoenix, Parousia, Cistus_Albidus, Precisely, OG, Lily, Magnolia, Phalaenopsis, Nostolgic, Final_Battle, Magical_Night, Amorous, SeriousMonsterMystery, Amur, Iced_desrt, SuperSpeedrun100, Lament_of_distorted_waltz, Bouquet, Oracion, SuperSpeedRun130, Regain_Peace, ??????????????????, Hephaistos, Four_Devas, Happy_Place, SPEEDRUN_EX, Chimera, Lunchfor180yen, Fiery_Wind_Blaster, Lost_Forest, Motch_Limit, GoingUP, Fantastic_Snow_Field, Supiguruchan, Venom, SandySanctuary, Frostbite_Desert, Champions_Trial, We_Were_Reborn, Nolucia, ThirdStage, Speedrun120, Germlin, Ashura, LnVSZone, Rainbow, Sanduleak, ]
      const ?????????ProgressLevel = [0]
      const ?????????PlayerProgress = [0]

      const ???????????????Cears = [Daphnes_Finale, Ultimate_Speedrun, Final_Challenge_Speedrun, YuHo_160, Singularity, Death_Escape, Four_Devas, Happy_Place]
      const ???????????????ProgressLevel = [0]
      const ???????????????PlayerProgress = [0]

      const IkeClears = [Tsar_Bomba, Atomic_Bomb, Fiery_Wind_Blaster]
      const IkeProgressLevel = [0]
      const IkeProgress = [0]

      const IkglClears = [Daphnes_Finale, Aya_Revive, Ultimate_Speedrun, Final_Challenge_Speedrun, YuHo_160, Singularity, Happy_New_Year, Parousia, Precisely, Amorous, Bouquet, Oracion, Happy_Place, Quintet, ????????????]
      const IkglProgressLevel = [Lunaria, Death_Escape]
      const IkglProgress = [92, 99]

      const AidanClears = [Tsar_Bomba]
      const AidanProgressLevel = [0]
      const AidanProgress = [0]

      const CHN_WangHClears = [Aya_Revive, Precisely]
      const CHN_WangHProgressLevel = [0]
      const CHN_WangHPlayerProgress = [0]

      const YoshiClears = [Ozymandias, BSW, Scarlet_Stronghold_Double, Subetenoyubi, Delirium_Trigger, Frozen_Eclipse, FeelsShellMan, Glacial, Busy_Night, Ashes_of_Eden, Sorrowful_Mansions, Biting_Blizzard, Shellcuslovania, Surgical_Shells, Beautiful_Blue, Harrowing_Skies, Arduous_Aqueducts]
      const YoshiProgressLevel = [BSW]
      const YoshiPlayerProgress = [65]

      RCMClears = [Ozymandias, Delirium_Trigger, Scarlet, Biting_Blizzard, Beautiful_Blue]
      RCMProgressLevel = [Glacial]
      RCMPlayerProgress = [85]

      KeiichiClears = [Ozymandias, Bubblebath, Yoshivenetus, Subetenoyubi, Delirium_Trigger, Frozen_Eclipse, Kaizo_Encounters, No_Hay_Manera, Castillo, Happy_Place, Magma_Shells, FeelsShellMan, Glacial, Ashes_of_Eden, Scarlet, Heavenly_World, Biting_Blizzard, Burning_Palace, Shellcuslovania, Surgical_Shells, Noborito, Beautiful_Blue, Harrowing_Skies, Arduous_Aqueducts]
      KeiichiProgressLevel = [0]
      KeiichiPlayerProgress = [0]

      GdaTylerClears = [Ozymandias]
      GdaTylerProgressLevel = [0]
      GdaTylerPlayerProgress = [0]

      ArkClears = [Ozymandias, Bubblebath, Deep_Impact, Yoshivenetus, Delirium_Trigger, Frozen_Eclipse, Scarlet, Arduous_Aqueducts, Biting_Blizzard]
      ArkProgressLevel = [0]
      ArkPlayerProgress = [0]

      AndrewMMClears = [Ozymandias, Scarlet_Stronghold_Double, Bubblebath, Greater_Fusion, Yoshivenetus, Delirium_Trigger, Frozen_Eclipse, Impregnable_Defense, Glacial, Scarlet, Sorrowful_Mansions, Shellcuslovania, Surgical_Shells]
      AndrewMMProgressLevel = [0]
      AndrewMMPlayerProgress = [0]

      RedClears = [Ultimate_Speedrun, Amorous, ??????????????????, Happy_Place]
      RedProgressLevel = [0]
      RedPlayerProgress = [0]

      ????????????Clears = [Singularity, Ominous, Ultimate_Speedrun, Precisely, ??????????????????, ChainComplex]
      ????????????ProgressLevel = [0]
      ????????????PlayerProgress = [0]

      Nexus_SyoClears = [Ultimate_Speedrun, Final_Challenge_Speedrun, YuHo_160, Rainbow, Precisely, SeriousMonsterMystery, ??????????????????, Happy_Place]
      Nexus_SyoProgressLevel = [0]
      Nexus_SyoPlayerProgress = [0]

      const ???????????????Clears = [Ultimate_Speedrun, Final_Challenge_Speedrun, Death_Escape, Rainbow, Happy_Place, Lunchfor180yen]
      const ???????????????ProgressLevel = [0]
      const ???????????????PlayerProgress = [0]

      JuGeMuClears = [Ultimate_Speedrun, Happy_New_Year, Singularity, Final_Battle, SuperSpeedrun100, SuperSpeedRun130, Four_Devas, Happy_Place, We_Were_Reborn]
      JuGeMuProgressLevel = [0]
      JuGeMuPlayerProgress = [0]

      BenjaRCClears = [Scarlet_Stronghold_Double, Bubblebath, Greater_Fusion, Yoshivenetus, Delirium_Trigger, Frozen_Eclipse, Castillo, Glacial, Ashes_of_Eden, Scarlet, Sorrowful_Mansions, Storms_A_Brewin, Biting_Blizzard, Messy_Shadows, Harrowing_Skies, Arduous_Aqueducts, BoF, VenetusDouble, Verdant]
      BenjaRCProgressLevel = [0]
      BenjaRCPlayerProgress = [0]

      Zone??_??????Clears = [Singularity, Death_Escape, Final_Challenge_Speedrun, Phoenix, Parousia, Precisely, OG, Magnolia, Nostolgic, Magical_Night, Amorous, Final_Battle, SeriousMonsterMystery, Iced_desrt, SuperSpeedrun100, Bouquet, Oracion, SuperSpeedRun130, Regain_Peace, ??????????????????, Hephaistos, Four_Devas, Happy_Place, SPEEDRUN_EX, Lunchfor180yen, Fiery_Wind_Blaster, Motch_Limit, GoingUP, SandySanctuary, Speedrun120, LnVSZone, Happy_New_Year, Rainbow, We_Were_Reborn, Sanduleak, RunnersHigh]
      Zone??_??????ProgressLevel = [0]
      Zone??_??????PlayerProgress = [0]

      AyaClears = [Aya_Revive]
      AyaProgressLevel = [0]
      AyaPlayerProgress = [0]

      FailClears = [Ozymandias]
      FailProgressLevel = [0]
      FailPlayerProgress = [0]

      ?????????Clears = [Ultimate_Speedrun, SandySanctuary, RunnersHigh]
      ?????????ProgressLevel = [0]
      ?????????PlayerProgress = [0]

      takaakidClears = [Final_Challenge_Speedrun, Happy_Place, Heavenly_World]
      takaakidProgressLevel = [0]
      takaakidPlayerProgress = [0]

      Zone??_193Clears = [Final_Challenge_Speedrun, Iced_desrt, Impregnable_Defense, ??????????????????, Happy_Place, Katz_Kradle, Kitty_Manya]
      Zone??_193ProgressLevel = [0]
      Zone??_193PlayerProgress = [0]

      SKG_D3?????????Clears = [Final_Challenge_Speedrun, Happy_New_Year, SPEEDRUN_EX]
      SKG_D3?????????ProgressLevel = [0]
      SKG_D3?????????PlayerProgress = [0]

      ?????????Clears = [Final_Challenge_Speedrun, Death_Escape, Rainbow, Iced_desrt, ??????????????????, Happy_Place, Surgical_Shells]
      ?????????ProgressLevel = [0]
      ?????????PlayerProgress = [0]

      Nexus_?????????Clears = [YuHo_160, Singularity]
      Nexus_?????????ProgressLevel = [0]
      Nexus_?????????PlayerProgress = [0]

      ?????????????????????Clears = [YuHo_160, Phoenix, Cistus_Albidus, Amorous, SeriousMonsterMystery, Happy_Place]
      ?????????????????????ProgressLevel = [0]
      ?????????????????????PlayerProgress = [0]

      A1wayszzClears = [Singularity]
      A1wayszzProgressLevel = [0]
      A1wayszzPlayerProgress = [0]

      Zone??_?????????Clears = [YuHo_160, Singularity, Magical_Night, Happy_New_Year, Precisely, Parousia, Lily, Magical_Night, Amorous, Ultimate_Speedrun_??????, RunnersHigh]
      Zone??_?????????ProgressLevel = [0]
      Zone??_?????????PlayerProgress = [0]

      ?????????motchClears = [Lunaria, Parousia, Lily, Motch_Limit]
      ?????????motchProgressLevel = [0]
      ?????????motchPlayerProgress = [0]

      ????????????Clears = [The_Last_Memories, Regain_Peace, Happy_Place, Chimera, Speedrun120]
      ????????????ProgressLevel = [0]
      ????????????PlayerProgress = [0]

      const zzZHLT?????????Clears = [Death_Escape, ??????????????????, Happy_Place]
      const zzZHLLT?????????ProgessLevel = [0]
      const zzZHLT?????????PlayerProgress = [0]

      ZnClears = [Parousia, Amorous]
      ZnProgessLevel = [0]
      ZnPlayerProgress = [0]

      JonasHamClears = [Bubblebath]
      JonasHamCProgessLevel = [0]
      JonasHamCPlayerProgress = [0]

      DanteClears = [Bubblebath, Yoshivenetus, Subetenoyubi, Delirium_Trigger, Frozen_Eclipse, Kaizo_Encounters, No_Hay_Manera, Castillo, FeelsShellMan, EmitLight, Scarlet, Heavenly_World, Biting_Blizzard, SandySanctuary, Surgical_Shells, Noborito, Beautiful_Blue, Harrowing_Skies, Arduous_Aqueducts]
      DanteProgessLevel = [Insomniac]
      DantePlayerProgress = [68]

      ItzyClears = [Bubblebath, Yoshivenetus, Frozen_Eclipse, Impregnable_Defense, Busy_Night, Scarlet, Katz_Kradle, Harrowing_Skies, Germlin]
      ItzyProgessLevel = [0]
      ItzyPlayerProgress = [0]

      AliceClears = [OG, Amur, Phalaenopsis]
      AliceProgressLevel = [0]
      AlicePlayerProgress = [0]

      KishumenClears = [Precisely, UMRELLA, Shellcuslovania, Arduous_Aqueducts, Germlin]
      KishumenProgessLevel = [0]
      KishumenPlayerProgress = [0]

      const schwarzeClears = [Precisely]
      const schwarzeProgessLevel = [0]
      const schwarzePlayerProgress = [0]

      JCTheChampClears = [Insomniac, Greater_Fusion, Yoshivenetus, Iced_desrt, Frozen_Eclipse, Kaizo_Encounters, No_Hay_Manera, Magma_Shells, Glacial, Rain, Scarlet, Biting_Blizzard, Shellcuslovania, Messy_Shadows, Arduous_Aqueducts, Verdant, Legacy]
      JCTheChampProgessLevel = [0]
      JCTheChampPlayerProgress = [0]

      ParasolClears = [Magnolia, Eucalyptus, Bouquet, Oracion, Happy_Place, Biting_Blizzard, Venom, SandySanctuary, Overture, LnVSZone]
      ParasolProgessLevel = [Daphnes_Finale]
      ParasolPlayerProgress = [73]

      DogumaClears = [Magnolia, Nostolgic, Lament_of_distorted_waltz, Lost_Forest, Fantastic_Snow_Field]
      DogumaProgessLevel = [0]
      DogumaPlayerProgress = [0]

      JP_MarioClears = [Yoshivenetus]
      JP_MarioProgressLevel = [0]
      JP_MarioPlayerProgress = [0]

      GobaaClears = [Yoshivenetus, Delirium_Trigger, Frozen_Eclipse, Scarlet, Beautiful_Blue]
      GobaaProgressLevel = [0]
      GobaaPlayerProgress = [0]

      KurofishClears = [Bubblebath, Yoshivenetus, Frozen_Eclipse, Delirium_Trigger, Scarlet, Biting_Blizzard, Shellcuslovania, Beautiful_Blue, Harrowing_Skies, Germlin]
      KurofishProgressLevel = [0]
      KurofishPlayerProgress = [0]

      HayakuClears = [VenetusDouble, Yoshivenetus, Delirium_Trigger, Scarlet, Austere]
      HayakuProgressLevel = [Ultimate_Speedrun, Glacial, Bubblebath]
      HayakuPlayerProgress = [78, 85, 53]

      DarknessClears = [Yoshivenetus, Subetenoyubi, Delirium_Trigger, Frozen_Eclipse, No_Hay_Manera, Castillo, Glacial, Ashes_of_Eden, Scarlet, Biting_Blizzard, Shellcuslovania, Noborito, Beautiful_Blue, Harrowing_Skies]
      DarknessProgressLevel = [0]
      DarknessPlayerProgress = [0]

      BanriClears = [Subetenoyubi, Glacial, Busy_Night, Scarlet, Beautiful_Blue]
      BanriProgressLevel = [0]
      BanriPlayerProgress = [0]

      Ln_asckClears = [Magical_Night, Nolucia]
      Ln_asckProgressLevel = [0]
      Ln_asckPlayerProgress = [0]

      Zone_???????????????Clears = [Magical_Night, Happy_Place, Biting_Blizzard, Speedrun120]
      Zone_???????????????ProgressLevel = [0]
      Zone_???????????????PlayerProgress = [0]

      Z7Clears = [Pokemon_Journeys, Impregnable_Defense, Sprint_Before_Dawn, Katz_Kradle, Its_Just_A_Game]
      Z7ProgressLevel = [0]
      Z7PlayerProgress = [0]

      MorphaClears = [Pokemon_Journeys, Impregnable_Defense, Delirium_Trigger, Sprint_Before_Dawn, Katz_Kradle, Its_Just_A_Game, Kitty_Manya, BigBirdos_Barn]
      MorphaProgressLevel = [0]
      MorphaPlayerProgress = [0]

      BigBirdoClears = [Kitty_Manya, Wrath_of_Leviathan, Pokemon_Journeys, Impregnable_Defense, Sprint_Before_Dawn, Katz_Kradle, Its_Just_A_Game, BigBirdos_Barn]
      BigBirdoProgressLevel = [0]
      BigBirdoPlayerProgress = [0]

      yuzuClears = [Amorous]
      yuzuProgressLevel = [0]
      yuzoPlayerProgress = [0]

      PokeDTClears = [Amorous]
      PokeDTProgressLevel = [Ultimate_Speedrun]
      PokeDTPlayerProgress = [84]

      ?????????Clears = [Amorous, Happy_Place]
      ?????????ProgressLevel = [0]
      ?????????PlayerProgress = [0]

      ???????????????Clears = [Amorous, Biting_Blizzard]
      ???????????????ProgressLevel = [0]
      ???????????????PlayerProgress = [0]

      ???????????????Clears = [Final_Challenge_Speedrun, Amorous, ??????????????????, Happy_Place]
      ???????????????ProgressLevel = [0]
      ???????????????PlayerProgress = [0]

      ShyGuy64Clears = [Wrath_of_Leviathan]
      ShyGuy64ProgressLevel = [0]
      ShyGuy64PlayerProgress = [0]

      Zoren364Clears = [Kitty_Manya, Pokemon_Journeys, Ashen, Delirium_Trigger, Its_Just_A_Game, Wrath_of_Leviathan, Impregnable_Defense, Sprint_Before_Dawn, Katz_Kradle, BigBirdos_Barn]
      Zoren364ProgressLevel = [0]
      Zoren364PlayerProgress = [0]

      MT_???????????????Clears = [AQuA]
      MT_???????????????ProgressLevel = [0]
      MT_???????????????PlayerProgress = [0]

      KingBooClears = [Kitty_Manya, Its_Just_A_Game, Delirium_Trigger, Impregnable_Defense, Iced_desrt, Thoroughfare, Extra_Twist, Ninji, Death_Time, Austere]
      KingBooProgressLevel = [0]
      KingBooPlayerProgress = [0]

      RyanarwhalClears = [Impregnable_Defense, Katz_Kradle]
      RyanarwhalProgressLevel = [0]
      RyanarwhalPlayerProgress = [0]

      ForeClears = [Lament_of_distorted_waltz]
      ForeProgressLevel = [0]
      ForePlayerProgress = [0]

      LnNxs_????????????Clears = [Lament_of_distorted_waltz, Happy_Place]
      LnNxs_????????????ProgressLevel = [0]
      LnNxs_????????????PlayerProgress = [0]

      AnthonyClears = [Delirium_Trigger, Glacial]
      AnthonyProgressLevel = [0]
      AnthonyPlayerProgress = [0]

      ev_brakClears = [Delirium_Trigger, Katz_Kradle, BigBirdos_Barn]
      ev_brakProgressLevel = [0]
      ev_brakPlayerProgress = [0]

      ????????????_HukkuClears = [Ultimate_Speedrun, Delirium_Trigger, Frozen_Eclipse, Castillo, Magma_Shells, Glacial, Ashes_of_Eden, Scarlet, Biting_Blizzard, Supiguruchan, Shellcuslovania, Surgical_Shells, Noborito, Beautiful_Blue, Harrowing_Skies, Arduous_Aqueducts, Germlin, RunnersHigh]
      ????????????_HukkuProgressLevel = [0]
      ????????????_HukkuPlayerProgress = [0]

      BigByClears = [Bubblebath, Delirium_Trigger, Scarlet]
      BigByProgressLevel = [0]
      BigByPlayerProgress = [0]

      Just_DonerClears = [Delirium_Trigger, Arduous_Aqueducts]
      Just_DonerProgressLevel = [0]
      Just_DonerPlayerProgress = [0]

      ???Clears = [Bubblebath, Delirium_Trigger, Frozen_Eclipse, Happy_Place, Biting_Blizzard, Shellcuslovania, Messy_Shadows]
      ???ProgressLevel = [0]
      ???PlayerProgress = [0]

      chris_SMMClears = [Frozen_Eclipse, FeelsShellMan, Death_Time, Arduous_Aqueducts, Germlin]
      chris_SMMProgressLevel = [0]
      chris_SMMPlayerProgress = [0]

      eem_supremeClears = [Frozen_Eclipse]
      eem_supremeProgressLevel = [0]
      eem_supremePlayerProgress = [0]

      TatagamerClears = [Insomniac, Frozen_Eclipse, No_Hay_Manera, Castillo, Scarlet, Biting_Blizzard, Noborito, Beautiful_Blue, Harrowing_Skies]
      TatagamerProgressLevel = [0]
      TatagamerPlayerProgress = [0]

      ProsperClears = [Frozen_Eclipse, Biting_Blizzard]
      ProsperProgressLevel = [0]
      ProsperPlayerProgress = [0]

      NOTanthonyClears = [Frozen_Eclipse, Biting_Blizzard]
      NOTanthonyProgressLevel = [0]
      NOTanthonyPlayerProgress = [0]

      MisterLClears = [Frozen_Eclipse, Extra_Twist, Atomic_Bomb, Death_Time]
      MisterLProgressLevel = [0]
      MisterLPlayerProgress = [0]

      FlangoooooClears = [Frozen_Eclipse, Scarlet, Biting_Blizzard]
      FlangoooooProgressLevel = [0]
      FlangoooooPlayerProgress = [0]

      CadenceClears = [Bubblebath, BoF, Frozen_Eclipse, Glacial, Scarlet, Sorrowful_Mansions, Storms_A_Brewin, Burning_Palace, Beautiful_Blue, Messy_Shadows]
      CadenceProgressLevel = [Verdant]
      CadencePlayerProgress = [63]

      MrGamer871Clears = [Frozen_Eclipse, Arduous_Aqueducts]
      MrGamer87ProgressLevel = [0]
      MrGamer87PlayerProgress = [0]

      LyfiClears = [Insomniac, Frozen_Eclipse, Glacial, Castillo, Scarlet, Biting_Blizzard]
      LyfiProgressLevel = [0]
      LyfiPlayerProgress = [0]

      LeoX2Clears = [Frozen_Eclipse, No_Hay_Manera, Scarlet, Biting_Blizzard, Shellcuslovania, Beautiful_Blue, Harrowing_Skies, Arduous_Aqueducts, Legacy]
      LeoX2ProgressLevel = [0]
      LeoX2PlayerProgress = [0]

      HJ_SanyxClears = [BoF, Frozen_Eclipse, Scarlet]
      HJ_SanyxProgressLevel = [0]
      HJ_SanyxPlayerProgress = [0]

      LyleClears = [Frozen_Eclipse, Glacial]
      LyleProgressLevel = [0]
      LylePlayerProgress = [0]

      FastClears = [Kaizo_Encounters]
      FastProgressLevel = [0]
      FastPlayerProgress = [0]

      Nexus_qClears = [Speedrun120, Oracion, Happy_Place]
      Nexus_qProgressLevel = [0]
      Nexus_qPlayerProgress = [0]

      RetterClears = [Oracion, Happy_Place]
      RetterProgressLevel = [0]
      RetterPlayerProgress = [0]

      ?????????Clears = [Oracion]
      ?????????ProgressLevel = [0]
      ?????????PlayerProgress = [0]

      Zone_????????????WClears = [Oracion, Happy_Place]
      Zone_????????????WProgressLevel = [0]
      Zone_????????????WPlayerProgress = [0]

      const ????????????_????????????Clears = [Ashura, Oracion, Happy_Place]
      const ????????????_????????????ProgressLevel = [0]
      const ????????????_????????????PlayerProgress = [0]

      Kazuki_?????????Clears = [Ozymandias, No_Hay_Manera, Magma_Shells, Glacial, Arduous_Aqueducts, Surgical_Shells]
      Kazuki_?????????ProgressLevel = [0]
      Kazuki_?????????PlayerProgress = [0]

      YTLilKirbsClears = [Impregnable_Defense, Delirium_Trigger, Extra_Twist, Death_Time]
      YTLilKirbsProgressLevel = [0]
      YTlilKirbsPlayerProgress = [0]

      MissYouAllClears = [Impregnable_Defense]
      MissYouAllProgressLevel = [0]
      MissYouAllPlayerProgress = [0]

      CrusoClears = [Impregnable_Defense, Katz_Kradle]
      CrusoProgresslevel = [0]
      CrusoPlayerProgress = [0]

      KatzClears = [Impregnable_Defense, Katz_Kradle, Kitty_Manya, BigBirdos_Barn]
      KatzProgressLevel = [0]
      KatzPlayerProgress = [0]

      HariClears = [??????????????????, Happy_Place]
      HariProgressLevel = [0]
      HariPlayerProgress = [0]

      MWClears = [??????????????????]
      MWProgressLevel = [0]
      MWPlayerProgress = [0]

      const rzClears = [??????????????????, Shellcuslovania]
      const rzProgressLevel = [0]
      const rzPlayerProgress = [0]

      VinzentClears = [Castillo, Harrowing_Skies]
      VinzentProgressLevel = [0]
      VinzentPlayerProgress = [0]

      AKUKINClears = [Hephaistos, Sprint_Before_Dawn]
      AKUKINProgressLevel = [0]
      AKUKINPlayerProgress = [0]

      ?????????Clears = [Hephaistos, Sprint_Before_Dawn]
      ?????????ProgressLevel = [0]
      ?????????PlayerProgress = [0]

      DarkSmm2Clears = [Happy_Place]
      DarkSmm2ProgressLevel = [0]
      DarkSmm2PlayerProgress = [0]

      MIDNAClears = [Happy_Place, Motch_Limit]
      MIDNAProgressLevel = [0]
      MIDNAPlayerProgress = [0]

      YukiSungiClears = [Happy_Place]
      YukiSungiProgressLevel = [0]
      YukiSungiPlayerProgress = [0]

      YORAClears = [Happy_Place, Lunchfor180yen, Champions_Trial]
      YORAProgressLevel = [0]
      YORAPlayerProgress = [0]

      Rr0Clears = [Happy_Place]
      Rr0ProgressLevel = [0]
      Rr0PlayerProgress = [0]

      IFILY_upClears = [Happy_Place, Sanduleak]
      IFILY_upProgressLevel = [0]
      IFILY_upPlayerProgress = [0]

      Ln_LukeClears = [Happy_Place]
      Ln_LukeProgressLevel = [0]
      Ln_LukePlayerProgress = [0]

      Ryota_sadClears = [Happy_Place, Speedrun120]
      Ryota_sadProgressLevel = [0]
      Ryota_sadPlayerProgress = [0]

      KeaClears = [Happy_Place]
      KeaProgressLevel = [0]
      KeaPlayerProgress = [0]

      Fury_mckiClears = [Happy_Place]
      Fury_mckiProgressLevel = [0]
      Fury_mckiPlayerProgress = [0]

      const ?????????Clears = [Happy_Place]
      const ?????????ProgressLevel = [0]
      const ?????????Progress = [0]

      ?????????_?????????Clears = [Happy_Place]
      ?????????_?????????ProgressLevel = [0]
      ?????????_?????????Progress = [0]

      const ?????????_3Clears = [Happy_Place, Surgical_Shells]
      const ?????????_3ProgressLevel = [0]
      const ?????????_3Progress = [0]

      ???????????????Clears = [Happy_Place]
      ???????????????ProgressLevel = [0]
      ???????????????Progress = [0]

      ????????????Clears = [Happy_Place]
      ????????????ProgressLevel = [0]
      ????????????Progress = [0]

      ZioNeo?????????Clears = [Happy_Place]
      ZioNeo?????????ProgressLevel = [0]
      ZioNeo?????????Progress = [0]

      ?????????ChannelClears = [Happy_Place, Magma_Shells]
      ?????????ChannelProgressLevel = [0]
      ?????????ChannelProgress = [0]

      Zone_????????????Clears = [Happy_Place, Speedrun120]
      Zone_????????????ProgressLevel = [0]
      Zone_????????????Progress = [0]

      ???r???Clears = [Happy_Place]
      ???r???ProgressLevel = [0]
      ???r???Progress = [0]

      const ????????????Clears = [Happy_Place]
      const ????????????ProgressLevel = [0]
      const ????????????Progress = [0]

      ????????????Clears = [Happy_Place, Ninji]
      ????????????ProgressLevel = [0]
      ????????????Progress = [0]

      DICE_NanpClears = [Happy_Place]
      DICE_?????????npProgressLevel = [0]
      DICE_?????????npProgress = [0]

      const ?????????Clears = [Happy_Place]
      const ?????????ProgressLevel = [0]
      const ?????????Progress = [0]

      KyoKyoClears = [Happy_Place]
      KyoKyoProgressLevel = [0]
      KyoKyoProgress = [0]

      ?????????Clears = [Happy_Place]
      TatamiProgressLevel = [0]
      ?????????Progress = [0]

      const ????????????ZOROClears = [Happy_Place]
      const stupidZOROProgressLevel = [0]
      const stupidZOROProgress = [0]

      HyeanaGhoulClears = [NoBombNoLife, Atomic_Bomb]
      HyeanaGhoulProgressLevel = [0]
      HyeanaGhoulProgress = [0]

      const idkagnClears = [Magma_Shells, Scarlet]
      const idkagnProgressLevel = [0]
      const idkagnProgress = [0]

      NowiesoClears = [Magma_Shells]
      NowiesoProgressLevel = [0]
      NowiesoProgress = [0]

      SabaonClears = [Lunchfor180yen]
      SabaonProgressLevel = [0]
      SabaonProgress = [0]

      const na_goroClears = [Lunchfor180yen]
      const na_goroPrgoressLevel = [0]
      const na_goroPrgoress = [0]

      const kitsutokatsutooishiiClears = [Lunchfor180yen]
      const kitsutokatsutooishiiProgressLevel = [0]
      const kitsutokatsutooishiiProgress = [0]

      TrickbotClears = [Ozymandias, Item_Wonderland, SandySanctuary]
      TrickbotProgressLevel = [SandySanctuary]
      TrickbotProgress = [94]

      CasterClears = [Item_Wonderland, Kamikatze]
      CasterProgressLevel = [0]
      CasterProgress = [0]

      CarldoskaClears = [FeelsShellMan, Fiery_Wind_Blaster]
      CarldoskaProgressLevel = [0]
      CarldoskaProgress = [0]

      HoboofClears = [Glacial]
      HoboofProgressLevel = [Ozymandias]
      HoboofProgress = [60]

      JeffieClears = [UMRELLA]
      JeffieProgressLevel = [0]
      JeffieProgress = [0]

      ZurixClears = [UMRELLA, Death_Time]
      ZurixProgressLevel = [Kaizo_Encounters]
      ZurixProgress = [60]

      KryptaClears = [UMRELLA]
      KryptaProgressLevel = [0]
      KryptaProgress = [0]

      LordPickleClears = [Ashes_of_Eden]
      LordPickleProgressLevel = [0]
      LordPickleProgress = [0]

      ZenClears = [Fiery_Wind_Blaster]
      ZenProgressLevel = [0]
      ZenProgress = [0]

      JonusClears = [Fiery_Wind_Blaster]
      JonusProgressLevel = [0]
      JonusProgress = [0]

      PremiezeClears = [Fiery_Wind_Blaster]
      PremiezeProgressLevel = [0]
      PremiezeProgress = [0]

      MLSAEMYAClears = [EmitLight]
      MLSAEMYAProgressLevel = [0]
      MLSAEMYAProgress = [0]

      ZenoClears = [Scarlet]
      ZenoProgressLevel = [0]
      ZenoProgress = [0]

      GgangClears = [BoF, Scarlet, Shellcuslovania, Beautiful_Blue]
      GgangProgressLevel = [0]
      GgangProgress = [0]

      K_Clears = [Lost_Forest, Fantastic_Snow_Field]
      K_ProgressLevel = [0]
      K_Progress = [0]

      SanohaClears = [Heavenly_World]
      SanohaProgressLevel = [0]
      SanohaProgress = [0]

      TakachanClears = [GoingUP]
      TakachanProgressLevel = [0]
      TakachanProgress = [0]

      RicoClears = [Insomniac, Frozen_Eclipse, Castillo, Biting_Blizzard, Arduous_Aqueducts]
      RicoProgressLevel = [0]
      RicoProgress = [0]

      FirimClears = [Biting_Blizzard]
      FirimProgressLevel = [0]
      FirimProgress = [0]

      Don_OTonoClears = [Biting_Blizzard]
      Don_OTonoProgressLevel = [0]
      Don_OTonoProgress = [0]

      Rafael_MM2Clears = [Insomniac, Deep_Impact, Biting_Blizzard, Arduous_Aqueducts]
      Rafael_MM2ProgressLevel = [0]
      Rafael_MM2Progress = [0]

      SkimbeanClears = [Frozen_Eclipse, Biting_Blizzard, Delirium_Trigger, Arduous_Aqueducts]
      SkimbeanProgressLevel = [0]
      SkimbeanProgress = [0]

      SolrakClears = [Biting_Blizzard]
      SolrakProgressLevel = [0]
      SolrakProgress = [0]

      ChaseExistClears = [Castillo, Biting_Blizzard]
      ChaseExistProgressLevel = [0]
      ChaseExistProgress = [0]

      KantBeKaiClears = [Project_Pipes, Frozen_Eclipse, Glacial, Tsar_Bomba, Scarlet, NoBombNoLife, Atomic_Bomb, Messy_Shadows, Biting_Blizzard, Harrowing_Skies]
      KantBeKaiProgressLevel = [FeelsShellMan]
      KantBeKaiProgress = [75]

      Wodnjs18Clears = [Castillo, Biting_Blizzard]
      Wodnjs18ProgressLevel = [0]
      Wodnjs18Progress = [0]

      SrGordinClears = [Burning_Palace]
      SrGordinProgressLevel = [0]
      SrGordinProgress = [0]

      HaeflyClears = [SandySanctuary, RunnersHigh]
      HaeflyProgressLevel = [0]
      HaeflyProgress = [0]

      oneframeClears = [Katz_Kradle]
      oneframeProgressLevel = [0]
      oneframeProgress = [0]

      AnemiaClears = [Katz_Kradle]
      AnemiaProgressLevel = [0]
      AnemiaProgressL= [0]

      ttbs098Clears = [Impregnable_Defense, Katz_Kradle, BigBirdos_Barn]
      ttbsProgressLevel = [0]
      ttbsProgress = [0]

      PhenotypeClears = [Frostbite_Desert, Champions_Trial]
      PhenotypeProgressLevel = [0]
      PhenotypeProgress = [0]

      ZwizzforceClears = [Surgical_Shells]
      ZwizzforceProgressLevel = [0]
      ZwizzforceProgress = [0]

      YDClears = [Surgical_Shells]
      YDProgresslevel = [0]
      YDProgress= [0]

      const nanasakiClears = [Surgical_Shells]
      const nanasakiProgressLevel = [0]
      const nanasakiProgress = [0]

      DoctaELClears = [Surgical_Shells]
      DoctaELClearsProgresslevel = [0]
      DoctaELClearsProgress = [0]

      hirotoClears = [Noborito]
      hirotoProgressLevel = [0]
      hirotoProgress = [0]

      ONiZNCleras = [Beautiful_Blue]
      ONiZNProgresslevel = [0]
      ONiZNProgress = [0]

      TookannClears = [Harrowing_Skies]
      TookannProgressLevel = [0]
      TookannProgress = [0]

      DrCClears = [Scarlet]
      DrCProgressLevel = [0]
      DrCProgress = [0]

      LogjetClears = [Harrowing_Skies]
      LogjetProgressLevel = [0]
      LogjetProgress = [0]

      LiniClears = [Arduous_Aqueducts]
      LiniProgressLevel = [0]
      LiniProgress = [0]

      MurmeliClears = [BoF]
      MurmeliProgressLevel = [0]
      MurmeliProgress = [0]

      D3_??????Clears = [ThirdStage]
      D3_??????ProgressLevel = [0]
      D3_??????Progress = [0]

      NoisyClears = [Final_Challenge_Speedrun, Speedrun120]
      NoisyProgress = [0]
      NoisyProgressLevel = [0]

      ????????????Clears = [Speedrun120]
      ????????????ProgressLevel = [0]
      ????????????Progress= [0]

      const ????????????????????????Clears = [Ultimate_Speedrun, Quintet, The_Last_Memories, Regain_Peace, Speedrun120, Chimera, Crossing_Indignation]
      const ????????????????????????ProgressLevel = [0]
      const ????????????????????????Progress = [0]

      NxsFLY?????????Clears = [Speedrun120]
      NxsFLY?????????ProgressLevel = [0]
      NxsFLY?????????Progress = [0]

      const Evaaa_EverClears = [Speedrun120]
      const Evaaa_EverProgressLevel = [0]
      const Evaaa_EverProgress = [0]

      Lz_TerraceClears = [Speedrun120]
      Lz_TerraceProgressLevel = [0]
      Lz_TerraceProgress = [0]

      const Zone??????????????Clears = [Death_Escape, Rainbow]
      const Zone??????????????ProgressLevel = [0]
      const Zone??????????????Progress = [0]

      MilMarioClears = [Impregnable_Defense, Wrath_of_Leviathan, Ashen, BigBirdos_Barn]
      MilMarioProgressLevel = [0]
      MilMarioProgress = [0]

      EthanClears = [BSW]
      EthanProgressLevel = [0]
      EthanProgress = [0]

      WafflechopClears = [Rain, Legacy]
      WafflechopProgressLevel = [0]
      WafflechopProgress = [0]

      WreferiiiClears = [Deep_Impact]
      WreferiiiProgressLevel = [0]
      WreferiiiProgress = [0]

      const N_I?????????Clears = [Aeonian_Temenos, SeriousMonsterMystery]
      const N_I?????????ProgressLevel = [0]
      const N_I?????????Progress = [0]

      Kirr12Clears = [Atomic_Bomb]
      Kirr12ProgressLevel = [0]
      Kirr12Progress = [0]

      DevyDevDevClear = [Ninji]
      DevyDevDevProgressLevel = [0]
      DevyDevDevProgress =[0]

      BroccoliClears = [Ninji]
      BroccoliProgressLevel = [0]
      BroccoliProgress = [0]

      RaymegaClears = [Ninji]
      RaymegaProgressLevel = [0]
      RaymegaProgress = [0]

      const sebClears = [Scarlet]
      const sebProgressLevel = [0]
      const sebProgress = [0]

      FutonClears = [Yoshivenetus, Frozen_Eclipse, Rain]
      FutonProgress = [0]
      FutonProgressLevel = [0]

      IFILY????????????Clears = [Oracion, Sanduleak]
      IFILY????????????Progress = [0]
      IFILY????????????ProgressLevel = [0]

      Ethanos72Clears = [Impregnable_Defense, Sprint_Before_Dawn]
      Ethanos72Progress = [0]
      Ethanos72ProgressLevel = [0]

      RemiDobbyClears = [Frozen_Eclipse]
      RemiDobbyProgressLevel = [0]
      RemiDobbyProgress = [0]

      NobleD4Clears = [Thoroughfare]
      NobleD4ProgressLevel = [0]
      NobleD4Progress = [0]

      KiritoClears = [Thoroughfare]
      KiritoProgress = [0]
      KiritoProgressLevel = [0]

      AntiGuy64Clears = [Ashen]
      AntiGuy64ProgressLevel = [0]
      AntiGuy64Progress = [0]

      Y0GamerClears = []
      Y0GamerProgressLevel = [Biting_Blizzard]
      Y0GamerProgress = [58]

      ??????Clears = [Magia90s]
      ??????ProgressLevel = [Lily]
      ??????Progress = [65]

      Ln_XCClears = [Ultimate_Speedrun_??????]
      Ln_XCProgressLevel = [0]
      Ln_XCProgress = [0]

      ThabeastClears = [RunnersHigh]
      ThabeastProgressLevel = [0]
      ThabeastProgress = [0]

      ?????????Clears = [RunnersHigh]
      ?????????ProgressLevel = [0]
      ?????????Progress = [0]

      //Master Arrays
      const PlayerNameArray = ["Pete", "?????????(Tomoki)", "???????????????(Ouchan)", "Ike", "Aidan", "Ikgl", "CHN_WangH", "Yoshi", "RCM", "Keiichi", "GdaTyler", "Ark", "AndrewMM", "Red", "????????????(Arche)", "Nexus_Syo", "???????????????(Wagyatto)", "JuGeMu", "BenjaRC", "Zone??_??????(Taku)", "Aya", "Fail", "?????????(Shino)", "takaakid", "Zone??_193", "SKG_D3?????????(Fan)", "?????????(Choco)", "Nexus_?????????(Yuho)", "?????????????????????(kiyuushichiyuu)", "A1wayszz", "JP_?????????(yamaba)", "?????????motch(motchi)", "????????????(mokitan)", "zzZHLT?????????(Haruto)", "Zn", "JonasHam", "Dante_Power", "Itzy", "Alice", "Kishumen", "schwarze", "JCTheChamp", "Parasol", "Doguma", "JP_Mario", "Gobaa", "Kurofish", "Hayaku", "Darkness", "?????????(Banri)", "Ln_asck", "Zone_???????????????(nonomuraa)", "Z7", "Morpha", "BigBirdo", "yuzo", "PokeDT","?????????(Komesu)", "???????????????(riyo-kun)", "???????????????(satade-re)", "ShyGuy64", "Zoren364", " MT_???????????????(Condolia)", "KingBoo", "Ryanarwhal", "Fore", "LnNxs_????????????(Kiyuri)", "Anthony", "ev_brak", "????????????_Hukku", "BigBy", "Just_Doner", "???!!(wa)", "Chris_SMM", "eem_supreme", "Tatagamer", "Prosper", "NOTanthony", "MisterL", "Flangooooo", "Candace", "MrGamer871", "Lyfi", "LeoX2", "HJ|Sanyx", "Lyle", "Fast", "Nexus_q", "Retter", "?????????(Rezabi)", "Zone_????????????W(Mada tabi)", "????????????_????????????(Ry??ma_youtub)", "Kazuki_?????????(Ice)", "YTLilKirbs", "MissYouAll", "Cruso", "Katz", "Hari", "MW :)", "(:3rz)~", "Vinzent", "AKUKIN", "?????????(Haruka)", "DarkSmm2", "MIDNA", "YukiSungi", "YORA", "Rr0", "Ln_Luke", "Ryota_sad", "Kea", "Fury_mcki", "?????????(Toshibo)", "?????????~?????????(Getushi~Chiyan)", "?????????(-3(Kaden)", "???????????????(Uenyabi)", "????????????(wa-ai)", "ZioNeo?????????(Chan)", "?????????Channel(Shiyupu)", "Zone_????????????(Yuyake)", "???r???(arwa)", "????????????(Chirashina)", "????????????(Chirashii)", "DICE_?????????np(nachito)", "?????????(Raachi)", "KyoKyo(Kyokyo)", "?????????(Tatami)", "????????????ZORO(Kakudei)", "Hyeana", "idkagn", "Nowieso", "????????????(Sabaon)", "????????????(na-goro)", "??????????????????????????????(kitsutokatsutooishii)", "Trickbot", "Catster", "Carldoska", "Jeffie", "Zurix", "Krypta", "LordPickle", "Zen", "Jonus", "Premieze", "MLSAEMYA", "Zeno", "Ggang!", "K.^", "Sanoha", "TakachanClears", "Rico", "Firim", "Don_OTono", "Rafael_MM2", "Skimbean", "Solrak", "ChaseExist", "Kan'tBeKai", "Wodnjs18", "Sr.Gordin", "Haefly", "1Frame", "Anemia", "ttbs098", "Phenotype", "Zwizzforce", "YD;)", "????????????(nanasaki)", "DoctaEL", "?????????(Hiroto)", "[ONiZN]", "Tookann", "DrC", "Logjet", "Lini", "Murmeli_", "D3_??????", "Noisy", "[????????????](umigame)", "??????????????????(Yokuirubonjin)", "Nxs:FLY?????????", "Evaaa_Ever", "Lz_Terrace", "Zone??_???????????? (tetei-)", "MilMario", "Ethan", "Wafflechop", "Wreferiii", "N/I_?????????", "Kirr12", "DevyDevDev", "Broccoli", "Raymega", "seb", "Futon", "IFILY????????????", "Ethanos72", "RemiDobby", "Kirito :v", "AntiGuy64", "Y0gamer", "??????#??????", "Ln_XC", "Thabeast", "?????????"]
      

      const MasterClears = [PeteClears, ?????????PlayerClears, ???????????????Cears, IkeClears, AidanClears, IkglClears, CHN_WangHClears, YoshiClears, RCMClears, KeiichiClears, GdaTylerClears, ArkClears, AndrewMMClears, RedClears, ????????????Clears, Nexus_SyoClears, ???????????????Clears, JuGeMuClears, BenjaRCClears, Zone??_??????Clears, AyaClears, FailClears, ?????????Clears, takaakidClears, Zone??_193Clears, SKG_D3?????????Clears, ?????????Clears, Nexus_?????????Clears, ?????????????????????Clears, A1wayszzClears, Zone??_?????????Clears, ?????????motchClears, ????????????Clears, zzZHLT?????????Clears, ZnClears, JonasHamClears, DanteClears, ItzyClears, AliceClears, KishumenClears, schwarzeClears, JCTheChampClears, ParasolClears, DogumaClears, JP_MarioClears,  GobaaClears, KurofishClears, HayakuClears, DarknessClears, BanriClears, Ln_asckClears, Zone_???????????????Clears, Z7Clears, MorphaClears, BigBirdoClears, yuzuClears, PokeDTClears, ?????????Clears, ???????????????Clears, ???????????????Clears, ShyGuy64Clears, Zoren364Clears, MT_???????????????Clears, KingBooClears, RyanarwhalClears, ForeClears, LnNxs_????????????Clears, AnthonyClears, ev_brakClears, ????????????_HukkuClears, BigByClears, Just_DonerClears, ???Clears, chris_SMMClears, eem_supremeClears, TatagamerClears, ProsperClears, NOTanthonyClears, MisterLClears, FlangoooooClears, CadenceClears, MrGamer871Clears, LyfiClears, LeoX2Clears, HJ_SanyxClears, LyleClears, FastClears, Nexus_qClears, RetterClears, ?????????Clears, Zone_????????????WClears, ????????????_????????????Clears, Kazuki_?????????Clears, YTLilKirbsClears, MissYouAllClears, CrusoClears, KatzClears, HariClears, MWClears, rzClears, VinzentClears, AKUKINClears, ?????????Clears, DarkSmm2Clears, MIDNAClears, YukiSungiClears, YORAClears, Rr0Clears, Ln_LukeClears, Ryota_sadClears, KeaClears, Fury_mckiClears, ?????????Clears, ?????????_?????????Clears, ?????????_3Clears, ???????????????Clears, ????????????Clears, ZioNeo?????????Clears, ?????????ChannelClears, Zone_????????????Clears, ???r???Clears, ????????????Clears, ????????????Clears, DICE_NanpClears, ?????????Clears, KyoKyoClears, ?????????Clears, ????????????ZOROClears, HyeanaGhoulClears, idkagnClears, NowiesoClears, SabaonClears, na_goroClears, kitsutokatsutooishiiClears, TrickbotClears, CasterClears, CarldoskaClears, JeffieClears, ZurixClears, KryptaClears, LordPickleClears, ZenClears, JonusClears, PremiezeClears, MLSAEMYAClears, ZenoClears, GgangClears, K_Clears, SanohaClears, TakachanClears, RicoClears, FirimClears, Don_OTonoClears, Rafael_MM2Clears, SkimbeanClears, SolrakClears, ChaseExistClears, KantBeKaiClears, Wodnjs18Clears, SrGordinClears, HaeflyClears, oneframeClears, AnemiaClears, ttbs098Clears, PhenotypeClears, ZwizzforceClears, YDClears, nanasakiClears, DoctaELClears, hirotoClears, ONiZNCleras, TookannClears, DrCClears, LogjetClears, LiniClears, MurmeliClears, D3_??????Clears, NoisyClears, ????????????Clears, ????????????????????????Clears, NxsFLY?????????Clears, Evaaa_EverClears, Lz_TerraceClears, Zone??????????????Clears, MilMarioClears, EthanClears, WafflechopClears, WreferiiiClears, N_I?????????Clears, Kirr12Clears, DevyDevDevClear, BroccoliClears, RaymegaClears, sebClears, FutonClears, IFILY????????????Clears, Ethanos72Clears, RemiDobbyClears, KiritoClears, AntiGuy64Clears, Y0GamerClears, ??????Clears, Ln_XCClears, ThabeastClears, ?????????Clears]


      const MasterProgressLevel = [PeteProgressLevel, ?????????ProgressLevel, ???????????????ProgressLevel, IkeProgressLevel, AidanProgressLevel, IkglProgressLevel, CHN_WangHProgressLevel, YoshiProgressLevel, RCMProgressLevel, KeiichiProgressLevel, GdaTylerProgressLevel, ArkProgressLevel, AndrewMMProgressLevel, RedProgressLevel, ????????????ProgressLevel, Nexus_SyoProgressLevel, ???????????????ProgressLevel, JuGeMuProgressLevel, BenjaRCProgressLevel, Zone??_??????ProgressLevel, AyaProgressLevel, FailProgressLevel, ?????????ProgressLevel, takaakidProgressLevel, Zone??_193ProgressLevel, SKG_D3?????????ProgressLevel, ?????????ProgressLevel, Nexus_?????????ProgressLevel, ?????????????????????ProgressLevel, A1wayszzProgressLevel, Zone??_?????????ProgressLevel, ?????????motchProgressLevel, ????????????ProgressLevel, zzZHLLT?????????ProgessLevel, ZnProgessLevel, JonasHamCProgessLevel, DanteProgessLevel, ItzyProgessLevel, AliceProgressLevel, KishumenProgessLevel, schwarzeProgessLevel, JCTheChampProgessLevel, ParasolProgessLevel, DogumaProgessLevel, JP_MarioProgressLevel, GobaaProgressLevel, KurofishProgressLevel, HayakuProgressLevel, DarknessProgressLevel, BanriProgressLevel, Ln_asckProgressLevel, Zone_???????????????ProgressLevel, Z7ProgressLevel, MorphaProgressLevel, BigBirdoProgressLevel, yuzuProgressLevel,PokeDTProgressLevel, ?????????ProgressLevel, ???????????????ProgressLevel, ???????????????ProgressLevel, ShyGuy64ProgressLevel, Zoren364ProgressLevel, MT_???????????????ProgressLevel, KingBooProgressLevel, RyanarwhalProgressLevel, ForeProgressLevel, LnNxs_????????????ProgressLevel, AnthonyProgressLevel, ev_brakProgressLevel, ????????????_HukkuProgressLevel, BigByProgressLevel, Just_DonerProgressLevel, ???ProgressLevel, chris_SMMProgressLevel, eem_supremeProgressLevel, TatagamerProgressLevel, ProsperProgressLevel, NOTanthonyProgressLevel, MisterLProgressLevel, FlangoooooProgressLevel, CadenceProgressLevel, MrGamer87ProgressLevel, LyfiProgressLevel, LeoX2ProgressLevel, HJ_SanyxProgressLevel, LyleProgressLevel, FastProgressLevel, Nexus_qProgressLevel, RetterProgressLevel, ?????????ProgressLevel, Zone_????????????WProgressLevel, ????????????_????????????ProgressLevel, Kazuki_?????????ProgressLevel, YTLilKirbsProgressLevel, MissYouAllProgressLevel, CrusoProgresslevel, KatzProgressLevel , HariProgressLevel, MWProgressLevel, rzProgressLevel, VinzentProgressLevel, AKUKINProgressLevel, ?????????ProgressLevel, DarkSmm2ProgressLevel, MIDNAProgressLevel, YukiSungiProgressLevel, YORAProgressLevel, Rr0ProgressLevel, Ln_asckProgressLevel, Ryota_sadProgressLevel, KeaProgressLevel, Fury_mckiProgressLevel, ?????????ProgressLevel, ?????????_?????????ProgressLevel, ?????????_3ProgressLevel, ???????????????ProgressLevel, ????????????ProgressLevel, ZioNeo?????????ProgressLevel, ?????????ChannelProgressLevel, Zone_????????????ProgressLevel, ???r???ProgressLevel, ????????????ProgressLevel, ????????????ProgressLevel, DICE_?????????npProgressLevel, ?????????ProgressLevel, KyoKyoProgressLevel, TatamiProgressLevel, stupidZOROProgressLevel, HyeanaGhoulProgressLevel, idkagnProgressLevel, NowiesoProgressLevel, SabaonProgressLevel, na_goroPrgoressLevel, kitsutokatsutooishiiProgressLevel, TrickbotProgressLevel, CasterProgressLevel, CarldoskaProgressLevel, JeffieProgressLevel, ZurixProgressLevel, KryptaProgressLevel, LordPickleProgressLevel, ZenProgressLevel, JonusProgressLevel, PremiezeProgressLevel, MLSAEMYAProgressLevel, ZenoProgressLevel, GgangProgressLevel, K_ProgressLevel, SanohaProgress, TakachanProgressLevel, RicoProgressLevel, FirimProgressLevel, Don_OTonoProgressLevel, Rafael_MM2ProgressLevel, SkimbeanProgressLevel, SolrakProgressLevel, ChaseExistProgressLevel, KantBeKaiProgressLevel, Wodnjs18ProgressLevel, SrGordinProgressLevel, HaeflyProgressLevel, oneframeProgressLevel, AnemiaProgressLevel, ttbsProgressLevel, PhenotypeProgressLevel, ZwizzforceProgressLevel, YDProgresslevel, nanasakiProgressLevel, DoctaELClearsProgresslevel, hirotoProgressLevel, ONiZNProgresslevel, TookannProgressLevel, DrCProgressLevel, LogjetProgressLevel, LiniProgressLevel, MurmeliProgressLevel, D3_??????ProgressLevel, NoisyProgressLevel, ????????????ProgressLevel, ????????????????????????ProgressLevel, NxsFLY?????????ProgressLevel, Evaaa_EverProgressLevel, Lz_TerraceProgressLevel, Zone??????????????ProgressLevel,MilMarioProgressLevel, EthanProgressLevel, WafflechopProgressLevel, WreferiiiProgressLevel, N_I?????????ProgressLevel, Kirr12ProgressLevel, DevyDevDevProgressLevel, BroccoliProgressLevel, RaymegaProgressLevel, sebProgressLevel, FutonProgressLevel, IFILY????????????ProgressLevel, Ethanos72ProgressLevel, RemiDobbyProgressLevel, KiritoProgressLevel, AntiGuy64ProgressLevel, Y0GamerProgressLevel, ??????ProgressLevel, Ln_XCProgressLevel, ThabeastProgressLevel, ?????????ProgressLevel]


      const MasterPlayerProgress = [PeteProgress, ?????????PlayerProgress, ???????????????PlayerProgress, IkeProgress, AidanProgress, IkglProgress, CHN_WangHPlayerProgress, YoshiPlayerProgress, RCMPlayerProgress, KeiichiPlayerProgress, GdaTylerPlayerProgress, ArkPlayerProgress, AndrewMMPlayerProgress, RedPlayerProgress, ????????????PlayerProgress, Nexus_SyoPlayerProgress, ???????????????PlayerProgress, JuGeMuPlayerProgress, BenjaRCPlayerProgress, Zone??_??????PlayerProgress, AyaPlayerProgress, FailPlayerProgress, ?????????PlayerProgress, takaakidPlayerProgress, Zone??_193PlayerProgress, SKG_D3?????????PlayerProgress, ?????????PlayerProgress, Nexus_?????????PlayerProgress, ?????????????????????PlayerProgress, A1wayszzPlayerProgress, Zone??_?????????PlayerProgress, ?????????motchPlayerProgress, ????????????PlayerProgress, zzZHLT?????????PlayerProgress, ZnPlayerProgress, JonasHamCPlayerProgress, DantePlayerProgress, ItzyPlayerProgress, AlicePlayerProgress, KishumenPlayerProgress, schwarzePlayerProgress, JCTheChampPlayerProgress, ParasolPlayerProgress, DogumaPlayerProgress, JP_MarioPlayerProgress, GobaaPlayerProgress, KurofishPlayerProgress, HayakuPlayerProgress, DarknessPlayerProgress, BanriPlayerProgress, Ln_asckPlayerProgress, Zone_???????????????PlayerProgress, Z7PlayerProgress, MorphaPlayerProgress, BigBirdoPlayerProgress, yuzoPlayerProgress, PokeDTPlayerProgress, ?????????PlayerProgress, ???????????????PlayerProgress, ???????????????PlayerProgress, ShyGuy64PlayerProgress, Zoren364PlayerProgress, MT_???????????????PlayerProgress, KingBooPlayerProgress, RyanarwhalPlayerProgress, ForePlayerProgress, LnNxs_????????????PlayerProgress, AnthonyPlayerProgress, ev_brakPlayerProgress, ????????????_HukkuPlayerProgress, BigByPlayerProgress, Just_DonerPlayerProgress, ???PlayerProgress, chris_SMMPlayerProgress, eem_supremePlayerProgress, TatagamerPlayerProgress, ProsperPlayerProgress, NOTanthonyPlayerProgress, MisterLPlayerProgress, FlangoooooPlayerProgress, CadencePlayerProgress, MrGamer87PlayerProgress, LyfiPlayerProgress, LeoX2PlayerProgress, HJ_SanyxPlayerProgress, LylePlayerProgress, FastPlayerProgress, Nexus_qPlayerProgress, RetterPlayerProgress, ?????????PlayerProgress, Zone_????????????WPlayerProgress, ????????????_????????????PlayerProgress, Kazuki_?????????PlayerProgress, YTlilKirbsPlayerProgress, MissYouAllPlayerProgress, CrusoPlayerProgress, KatzPlayerProgress, HariPlayerProgress, MWPlayerProgress, rzPlayerProgress, VinzentPlayerProgress, AKUKINPlayerProgress, ?????????PlayerProgress, DarkSmm2PlayerProgress, MIDNAPlayerProgress, YukiSungiPlayerProgress, YORAPlayerProgress, Rr0PlayerProgress, Ln_LukePlayerProgress, Ryota_sadPlayerProgress, KeaPlayerProgress, Fury_mckiPlayerProgress, ?????????Progress, ?????????_?????????Progress, ?????????_3Progress, ???????????????Progress, ????????????Progress, ZioNeo?????????Progress, ?????????ChannelProgress, Zone_????????????Progress, ???r???Progress, ????????????Progress, ????????????Progress, DICE_?????????npProgress, ?????????Progress, KyoKyoProgress, ?????????Progress, stupidZOROProgress, HyeanaGhoulProgress, idkagnProgress, NowiesoProgress, SabaonProgress, na_goroPrgoress, kitsutokatsutooishiiProgress, TrickbotProgress, CasterProgress, CarldoskaProgress, JeffieProgress, ZurixProgress, KryptaProgress, LordPickleProgress, ZenProgress, JonusProgress, PremiezeProgress, MLSAEMYAProgress, ZenoProgress, GgangProgress, K_Progress, SanohaProgressLevel, TakachanProgress, RicoProgress, FirimProgress, Don_OTonoProgress, Rafael_MM2Progress, SkimbeanProgress, SolrakProgress, ChaseExistProgress, KantBeKaiProgress, Wodnjs18Progress, SrGordinProgress, HaeflyProgress, oneframeProgress, AnemiaProgressL, ttbsProgress, PhenotypeProgress, ZwizzforceProgress, YDProgress, nanasakiProgress, DoctaELClearsProgress, hirotoProgress, ONiZNProgress, TookannProgress, DrCProgress, LogjetProgress, LiniProgress, MurmeliProgress, D3_??????Progress, NoisyProgress, ????????????Progress, ????????????????????????Progress, NxsFLY?????????Progress, Evaaa_EverProgress, Lz_TerraceProgress, Zone??????????????Progress, MilMarioProgress, EthanProgress, WafflechopProgress, WreferiiiProgress, N_I?????????Progress, Kirr12Progress, DevyDevDevProgress, BroccoliProgress, RaymegaProgress, sebProgress, FutonProgress, IFILY????????????Progress, Ethanos72Progress, RemiDobbyProgress, KiritoProgress, AntiGuy64Progress, Y0GamerProgress, ??????Progress, Ln_XCProgress, ThabeastProgress, ?????????Progress]

// PROFILE PAGE ------------------------------------------------------------------------------
IkglUploads = [Daphnes_Finale, Singularity, Amorous, Quintet, ????????????]
IkglStats = [IkglUploads, "Ikgl"]

PeteUploads = [Ascension_to_heaven, ProjectPipes2, BombSpace, Project_Pipes, ProjectBombWithATwist, Pogey]
PeteStats = [PeteUploads, "Pete"]

AyaUploads = [Aya_Revive]
AyaStats = [AyaUploads, "Aya"]

ShinoUploads = [Ultimate_Speedrun, GoingUP]
ShinoStats = [ShinoUploads, "????????? Shino"]

MotchUploads = [Lunaria, Parousia, Lily, Motch_Limit]
MotchStats = [MotchUploads, "????????? Motch"]

FailUploads = [Ozymandias]
FailStats = [FailUploads, "FailStream"]

LunaUploads = [YuHo_160]
LunaStats = [LunaUploads, "Nexus_?????????"]

HayakuUploads = [VenetusDouble, Austere]
HayakuStats = [HayakuUploads, "Hayaku"]

ChocoUploads = [Final_Challenge_Speedrun, Rainbow, ??????????????????]
ChocoStats = [ChocoUploads, "Choco"]

AndrewUploads = [Scarlet_Stronghold_Double, Greater_Fusion, Sorrowful_Mansions]
AndrewStats = [AndrewUploads, "Andrew"]

MokitanUploads = [The_Last_Memories, Chimera]
MokitanStats = [MokitanUploads, "????????????"]

RicoUploads = [Insomniac, Biting_Blizzard]
RicoStats = [RicoUploads, "Rico"]

BenjaUploads = [Verdant, Messy_Shadows]
BenjaStats = [BenjaUploads, "BenjaRC"]

SKG_D3?????????Uploads = [Happy_New_Year]
SKG_D3?????????Stats = [SKG_D3?????????Uploads, "SKG_D3?????????"]

???????????????Uploads = [Death_Escape, Happy_Place]
???????????????Stats = [???????????????Uploads, "???????????????"]

AliceUploads = [OG, Phalaenopsis, Amur]
AliceStats = [AliceUploads, "Alice"]

schwarzeUploads = [Precisely]
schwarzeStats = [schwarzeUploads, "schwarze"]

KatzUploads = [Kitty_Manya, Impregnable_Defense]
KatzStats = [KatzUploads, "Katz"]

JonasHamUploads = [Bubblebath]
JonasHamStats = [JonasHamUploads, "JonasHam"]

TKUploads = [Phoenix, Cistus_Albidus, SeriousMonsterMystery]
TKstats = [TKUploads, "TK?????????????????????"]

CasterUploads = [Kamikatze, Item_Wonderland]
CasterStats = [CasterUploads, "Catster"]

WreferiiiUploads = [Deep_Impact]
WreferiiiStats = [WreferiiiUploads, "wreferiii"]

????????????_????????????Uploads = [Ashura]
????????????_????????????Stats = [????????????_????????????Uploads, "????????????_????????????"]

N_I?????????Uploads = [Aeonian_Temenos]
N_I?????????Stats = [N_I?????????Uploads, "N/I_?????????"]

EthanUploads = [BSW]
EthanStats = [EthanUploads, "Ethan"]

????????????Uploads = [Ominous, ChainComplex]
????????????Stats = [????????????Uploads, "????????????"]

MT_???????????????Uploads = [AQuA]
MT_???????????????Stats = [MT_???????????????Uploads, "MT_???????????????"]

AXL_LN_JGMUploads = [Final_Battle, SuperSpeedrun100, We_Were_Reborn, SuperSpeedRun130, Four_Devas]
AXL_LN_JGMStats = [AXL_LN_JGMUploads, "AXL/Ln_JGM"]

ItzyUploads = [Yoshivenetus]
ItzyStats = [ItzyUploads, "Itzy"]

MurmeliUploads = [BoF]
MurmeliStats = [MurmeliUploads, "Murmeli_"]

DogumaUploads = [Magnolia, Nostolgic, Lament_of_distorted_waltz, Lost_Forest, Fantastic_Snow_Field]
DogumaStats = [DogumaUploads, "?????????/Doguma"]

Z7Uploads = [Its_Just_A_Game, Pokemon_Journeys]
Z7Stats = [Z7Uploads, "Z7"]

ParasolUploads = [Eucalyptus, Overture, LnVSZone, Bouquet, Venom]
ParasolStats = [ParasolUploads, "Parasol"]

?????????Uploads = [Subetenoyubi]
?????????Stats = [?????????Uploads, "?????????"]

JCUploads = [Iced_desrt, Kaizo_Encounters, No_Hay_Manera]
JCStats = [JCUploads, "JCTheChamp"]

ShyGuy64Uploads = [Wrath_of_Leviathan]
ShyGuy64Stats = [ShyGuy64Uploads, "ShyGuy64"]

Ev_BrakUploads = [Delirium_Trigger, Katz_Kradle]
Ev_BrakStats = [Ev_BrakUploads, "Ev_Brak"]

Zone_???????????????Uploads = [Magical_Night]
Zone_???????????????Stats = [Zone_???????????????Uploads, "Zone_???????????????"]

DanteUploads = [Frozen_Eclipse]
DanteStats = [DanteUploads , "DantePower"]

KingBooUploads = [Thoroughfare, Extra_Twist]
KingBooStats = [KingBooUploads, "KingBoo"]

YoshiUploads = [Glacial]
YoshiStats = [YoshiUploads, "Yoshi"]

??????Uploads = [Magia90s]
??????Stats = [??????Uploads, "??????#??????"]

Ln_XCUploads = [Ultimate_Speedrun_??????]
Ln_XCStats = [Ln_XCUploads, "Ln_XC???"]

UploadsArray = [IkglStats, PeteStats, AyaStats, ShinoStats, FailStats, LunaStats, HayakuStats, ChocoStats, AndrewStats, MokitanStats, RicoStats, BenjaStats, SKG_D3?????????Stats, ???????????????Stats, AliceStats, schwarzeStats, KatzStats, JonasHamStats, TKstats, MotchStats, CasterStats, WreferiiiStats, ????????????_????????????Stats, N_I?????????Stats, EthanStats, ????????????Stats, MT_???????????????Stats, AXL_LN_JGMStats, ItzyStats, MurmeliStats, DogumaStats, Z7Stats, ParasolStats, ?????????Stats, JCStats, ShyGuy64Stats, Ev_BrakStats, Zone_???????????????Stats, DanteStats, KingBooStats, YoshiStats, ??????Stats, Ln_XCUploads]

var PlayerID = 1
var Failed = 99999
var Level = 0

function PlayerUploads(player) { //player has to be a string
  index = 0
    while (index < UploadsArray.length) {
      if (UploadsArray[index][1] == player) {
        return index 
      }
      index += 1
    }
  return Failed
}
    	
API_Sheet.getRange("G1").setValue(PlayerUploads(PlayerNameArray[PlayerID]))

if (PlayerUploads(PlayerNameArray[PlayerID]) == Failed) {
  //API_Sheet.getRange("G2").setValue(UploadsArray[PlayerUploads(PlayerNameArray[PlayerID])][0][0]])
}

  function PlayerUploadsTest(player) {
    player = PlayerNameArray[PlayerID]
  	if (PlayerUploads(player) == Failed) {
    	return "Erorr, Out Of Range In Data Base"
    } else {
      return "fuck"
    }
  }
  	

API_Sheet.getRange("G3").setValue(PlayerUploadsTest(PlayerNameArray[PlayerID]))









