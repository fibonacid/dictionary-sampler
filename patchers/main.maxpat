{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 0,
			"revision" : 8,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 436.0, 79.0, 480.0, 630.0 ],
		"bglocked" : 0,
		"openinpresentation" : 1,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 1,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 0,
		"toptoolbarpinned" : 0,
		"righttoolbarpinned" : 0,
		"bottomtoolbarpinned" : 0,
		"toolbars_unpinned_last_save" : 0,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "",
		"subpatcher_template" : "",
		"boxes" : [ 			{
				"box" : 				{
					"id" : "obj-30",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 687.0, 1377.333374321460724, 35.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 174.371447250006895, 580.667670574590829, 41.0, 22.0 ],
					"text" : "open"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-88",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 674.000020086765289, 1477.864214960231038, 83.999998033046722, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 235.03811572468112, 611.423737333137524, 83.999998033046722, 20.0 ],
					"text" : "Elapsed Time"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-86",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 640.66668576002121, 1377.333374321460724, 35.333329916000366, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 250.333334147930145, 581.667670574590829, 35.333329916000366, 20.0 ],
					"text" : "Rec"
				}

			}
, 			{
				"box" : 				{
					"checkedcolor" : [ 0.827450980392157, 0.168627450980392, 0.168627450980392, 1.0 ],
					"id" : "obj-84",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 613.333351612091064, 1375.333374321460724, 24.0, 24.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 223.0, 579.667670574590829, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontface" : 0,
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-80",
					"maxclass" : "number~",
					"mode" : 2,
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "signal", "float" ],
					"patching_rect" : [ 613.333351612091064, 1476.864214960231038, 56.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 174.371447250006895, 610.423737333137524, 56.0, 22.0 ],
					"sig" : 0.0
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-79",
					"maxclass" : "newobj",
					"numinlets" : 4,
					"numoutlets" : 1,
					"outlettype" : [ "signal" ],
					"patching_rect" : [ 613.333351612091064, 1433.864215000000058, 69.0, 22.0 ],
					"text" : "sfrecord~ 4"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-77",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 119.333336889743805, 971.192828821668172, 20.807200026979899, 20.807200026979899 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-74",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 119.333336889743805, 1004.056115825090274, 64.0, 22.0 ],
					"text" : "parallel $1"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-70",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 202.0, 971.192828821668172, 28.0, 22.0 ],
					"text" : "4"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-21",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 630.828556254746104, 925.456108529481753, 58.0, 22.0 ],
					"text" : "loadbang"
				}

			}
, 			{
				"box" : 				{
					"bubble" : 1,
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-61",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 294.0, 242.600000262260437, 169.0, 25.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 610.0, 183.600000262260437, 168.0, 25.0 ],
					"text" : "rythmic searches"
				}

			}
, 			{
				"box" : 				{
					"bgoncolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 14.0,
					"id" : "obj-60",
					"maxclass" : "textbutton",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 44.0, 190.0, 100.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 32.0, 184.100000262260437, 251.171443745253782, 22.0 ],
					"text" : "Search",
					"texton" : "Search",
					"textoncolor" : [ 0.995808362960815, 0.800102710723877, 0.399984955787659, 1.0 ],
					"textovercolor" : [ 0.995808362960815, 0.800102710723877, 0.399984955787659, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"bubble" : 1,
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-28",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 214.5, 343.018356492328394, 169.0, 25.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 487.600001811981201, 287.041813401288437, 143.0, 25.0 ],
					"text" : "stop node process"
				}

			}
, 			{
				"box" : 				{
					"bubble" : 1,
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-26",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 214.5, 312.100000262260437, 168.0, 25.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 487.600001811981201, 255.041813401288437, 143.0, 25.0 ],
					"text" : "start node process"
				}

			}
, 			{
				"box" : 				{
					"bubble" : 1,
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-25",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1106.828556254746218, 732.600007295608521, 252.0, 25.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 527.600001811981201, 353.961209196452728, 218.0, 25.0 ],
					"text" : "press to reset node application"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-66",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 173.0, 92.0, 42.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 551.971449061988096, 131.0, 37.0, 20.0 ],
					"text" : "Div"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-64",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 87.0, 92.0, 41.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 481.200007069110825, 131.0, 41.0, 20.0 ],
					"text" : "BPM"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-62",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 41.5, 92.0, 36.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 437.600001811981201, 131.0, 36.0, 20.0 ],
					"text" : "On"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-58",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 414.028555408360262, 815.0, 172.0, 20.0 ],
					"text" : "last received message"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-52",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 401.207109004739323, 925.456108529481753, 71.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 76.792890995260677, 354.280604729356526, 73.0, 20.0 ],
					"text" : "polyphony"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-47",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 244.0, 1135.864215000000058, 93.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 174.371447250006895, 492.759564143841544, 93.0, 20.0 ],
					"text" : "bypass limiter"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-41",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 698.828556254746104, 1133.864215000000058, 87.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 285.0, 350.801208934192289, 87.0, 20.0 ],
					"text" : "current voice"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-27",
					"interval" : 100,
					"lastchannelcount" : 0,
					"maxclass" : "live.gain~",
					"numinlets" : 2,
					"numoutlets" : 5,
					"outlettype" : [ "signal", "signal", "", "float", "list" ],
					"parameter_enable" : 1,
					"patching_rect" : [ 301.328551903607206, 1267.456108529481753, 53.0, 136.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 69.600005257129624, 430.803455614359791, 52.0, 136.0 ],
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_type" : 0,
							"parameter_unitstyle" : 4,
							"parameter_mmin" : -70.0,
							"parameter_longname" : "channel-1s",
							"parameter_initial_enable" : 1,
							"parameter_mmax" : 6.0,
							"parameter_initial" : [ 0.9 ],
							"parameter_shortname" : "chan-1s"
						}

					}
,
					"varname" : "live.gain~[2]"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-17",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 87.0, 117.0, 52.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 481.200007069110825, 154.600000262260437, 52.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-15",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1152.828556254746218, 981.217310168065524, 46.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 285.0, 264.280604729356583, 60.0, 20.0 ],
					"text" : "stretch"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-14",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 950.828556254746104, 981.217310168065524, 37.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 176.171443745253782, 264.280604729356583, 37.0, 20.0 ],
					"text" : "loop"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-13",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 748.328556254746104, 980.136712996577899, 54.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 79.792890995260677, 264.280604729356583, 54.0, 20.0 ],
					"text" : "speed"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-9",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1049.828556254746218, 1005.136712996577899, 51.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 285.0, 286.361208934192291, 51.0, 20.0 ],
					"text" : "global"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-4",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 859.828556254746104, 1005.136712996577899, 51.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 176.171443745253782, 286.361208934192291, 51.0, 20.0 ],
					"text" : "global"
				}

			}
, 			{
				"box" : 				{
					"checkedcolor" : [ 0.400004804134369, 0.80004358291626, 0.998939156532288, 1.0 ],
					"id" : "obj-45",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1162.828556254746218, 1005.136712996577899, 24.0, 24.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 261.0, 264.280604729356583, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"checkedcolor" : [ 0.400004804134369, 0.80004358291626, 0.998939156532288, 1.0 ],
					"id" : "obj-48",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1019.828556254746104, 1002.136712996577899, 24.0, 24.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 260.999999999999886, 286.361208934192291, 20.000000000000114, 20.000000000000114 ],
					"style" : "default"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-50",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1019.828556254746104, 1039.0, 162.0, 22.0 ],
					"text" : "gate-poly-msg timestretch"
				}

			}
, 			{
				"box" : 				{
					"checkedcolor" : [ 0.400004804134369, 0.80004358291626, 0.998939156532288, 1.0 ],
					"id" : "obj-44",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 954.828556254746104, 1002.136712996577899, 24.0, 24.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 152.671443745253782, 264.280604729356583, 19.5, 19.5 ]
				}

			}
, 			{
				"box" : 				{
					"checkedcolor" : [ 0.400004804134369, 0.80004358291626, 0.998939156532288, 1.0 ],
					"id" : "obj-32",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 833.828556254746104, 1002.136712996577899, 24.0, 24.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 152.671443745253782, 286.361208934192291, 19.5, 19.5 ],
					"style" : "default"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-40",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 833.828556254746104, 1039.0, 140.0, 22.0 ],
					"text" : "gate-poly-msg loop"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-29",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 656.828556254746104, 1004.136712996577899, 51.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 79.792890995260677, 286.361208934192291, 51.0, 20.0 ],
					"text" : "global"
				}

			}
, 			{
				"box" : 				{
					"checkedcolor" : [ 0.400004804134369, 0.80004358291626, 0.998939156532288, 1.0 ],
					"id" : "obj-22",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 630.828556254746104, 1002.136712996577899, 24.0, 24.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 57.5, 286.361208934192291, 19.5, 19.5 ],
					"style" : "default"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-19",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 630.828556254746104, 1039.0, 141.0, 22.0 ],
					"text" : "gate-poly-msg speed"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 10.580773309261978,
					"format" : 6,
					"id" : "obj-16",
					"maxclass" : "flonum",
					"minimum" : 0.1,
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 752.828556254746104, 1006.136712996577899, 45.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 32.0, 264.280604729356583, 48.0, 20.0 ],
					"tricolor" : [ 0.400004804134369, 0.80004358291626, 0.998939156532288, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-10",
					"maxclass" : "number",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 173.0, 117.0, 45.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 543.350001811981201, 154.600000262260437, 45.0, 22.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 44.0, 117.0, 24.0, 24.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 437.600001811981201, 154.600000262260437, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-3",
					"maxclass" : "newobj",
					"numinlets" : 4,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"patching_rect" : [ 44.0, 153.0, 167.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 437.600001811981201, 183.600000262260437, 167.0, 22.0 ],
					"text" : "tempo 120"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-128",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 1031.0, 212.0, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-130",
					"linecount" : 2,
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1120.0, 259.256111581239566, 122.0, 35.0 ],
					"style" : "nodemsg",
					"text" : ";\rtonode log_store"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-131",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 1031.0, 278.256111581239566, 74.0, 22.0 ],
					"text" : "delay 1000"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-120",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 448.028555408360262, 1039.0, 63.0, 22.0 ],
					"text" : "s tonode"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-119",
					"interval" : 100,
					"lastchannelcount" : 0,
					"maxclass" : "live.gain~",
					"numinlets" : 2,
					"numoutlets" : 5,
					"outlettype" : [ "signal", "signal", "", "float", "list" ],
					"parameter_enable" : 1,
					"patching_rect" : [ 443.728555408360307, 1267.456108529481753, 53.0, 136.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 19.600005257129624, 430.803455614359791, 52.0, 136.0 ],
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_type" : 0,
							"parameter_unitstyle" : 4,
							"parameter_mmin" : -70.0,
							"parameter_longname" : "channel-2s",
							"parameter_initial_enable" : 1,
							"parameter_mmax" : 6.0,
							"parameter_initial" : [ 0.9 ],
							"parameter_shortname" : "chan-2s"
						}

					}
,
					"varname" : "live.gain~[1]"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-117",
					"maxclass" : "toggle",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 214.0, 1133.864215000000058, 24.0, 24.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 140.371447250006895, 492.759564143841544, 24.0, 24.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-118",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 214.0, 1167.956108529481753, 77.0, 22.0 ],
					"text" : "bypass $1"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-115",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 4,
					"outlettype" : [ "signal", "signal", "list", "list" ],
					"patching_rect" : [ 443.728555408360307, 1221.956108529481753, 97.0, 22.0 ],
					"text" : "omx.peaklim~"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-116",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 4,
					"outlettype" : [ "signal", "signal", "list", "list" ],
					"patching_rect" : [ 301.328551903607206, 1221.956108529481753, 92.0, 22.0 ],
					"text" : "omx.peaklim~"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-112",
					"linecount" : 2,
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 44.0, 803.199996948242188, 74.0, 35.0 ],
					"text" : ";\rtodict bang"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-110",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1031.0, 170.0, 86.0, 22.0 ],
					"text" : "receive todict"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 14.0,
					"id" : "obj-100",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1397.897141699918393, 337.61938714056987, 149.0, 22.0 ],
					"text" : "APPLICATION DATA",
					"textjustification" : 2
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-6",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 4,
					"outlettype" : [ "dictionary", "", "", "" ],
					"patching_rect" : [ 1031.0, 329.081643769932043, 271.0, 22.0 ],
					"saved_object_attributes" : 					{
						"embed" : 0,
						"parameter_enable" : 0,
						"parameter_mappable" : 0
					}
,
					"text" : "dict @name store @embed 0"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-7",
					"maxclass" : "dict.view",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1031.0, 369.11938714056987, 519.89714169991862, 349.0 ],
					"textcolor" : [ 0.995808362960815, 0.800102710723877, 0.399984955787659, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-95",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 448.028555408360262, 1004.056115825090274, 153.0, 22.0 ],
					"style" : "nodemsg",
					"text" : "set_max_searches $1"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-91",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "int", "int" ],
					"patching_rect" : [ 347.878552749993105, 963.936728684520403, 29.0, 22.0 ],
					"text" : "t i i"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 11.590655999999942,
					"id" : "obj-83",
					"maxclass" : "number",
					"maximum" : 128,
					"minimum" : 8,
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "bang" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 347.878552749993105, 925.456108529481753, 52.0, 21.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 29.0, 354.280604729356526, 47.0, 21.0 ],
					"tricolor" : [ 0.400004804134369, 0.80004358291626, 0.998939156532288, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-72",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "bang", "" ],
					"patching_rect" : [ 303.828556254746218, 803.199996948242188, 32.0, 22.0 ],
					"text" : "t b l"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 14.0,
					"id" : "obj-71",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 173.0, 343.018356492328394, 42.0, 24.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 437.600001811981201, 287.041813401288437, 42.0, 24.0 ],
					"text" : "stop"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 14.0,
					"id" : "obj-68",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 173.0, 312.100000262260437, 43.0, 24.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 437.600001811981201, 255.041813401288437, 43.0, 24.0 ],
					"text" : "start"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-65",
					"maxclass" : "newobj",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 175.5, 543.449994647502763, 59.0, 22.0 ],
					"text" : "r tonode"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"id" : "obj-54",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 559.228556254746081, 1133.864215000000058, 55.0, 22.0 ],
					"text" : "1 1",
					"textcolor" : [ 0.400004804134369, 0.80004358291626, 0.998939156532288, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"id" : "obj-53",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 616.828556254746104, 1133.864215000000058, 77.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 203.0, 350.801208934192289, 70.0, 22.0 ],
					"text" : "voice 1",
					"textcolor" : [ 0.400004804134369, 0.80004358291626, 0.998939156532288, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"id" : "obj-49",
					"linecount" : 2,
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 303.828556254746218, 855.456108529481753, 345.0, 35.0 ],
					"text" : "target 9, available /Users/lorenzo/Developer/Max 8/Projects/lang-sampler/code/cache/d65245ee.mp3",
					"textcolor" : [ 0.400004804134369, 0.80004358291626, 0.998939156532288, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-43",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 173.0, 376.137743632898264, 64.0, 22.0 ],
					"style" : "nodemsg",
					"text" : "script $1"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-31",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 175.5, 475.949994647502763, 101.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 907.600001811981201, 442.803455614359791, 101.0, 22.0 ],
					"style" : "nodemsg",
					"text" : "script running"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-35",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 175.5, 441.949994647502763, 150.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 907.600001811981201, 411.803455614359791, 130.0, 22.0 ],
					"style" : "nodemsg",
					"text" : "script processStatus"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-34",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 175.5, 507.949994647502763, 95.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 907.600001811981201, 473.803455614359791, 95.0, 22.0 ],
					"style" : "nodemsg",
					"text" : "script status"
				}

			}
, 			{
				"box" : 				{
					"color" : [ 0.400004804134369, 0.80004358291626, 0.998939156532288, 1.0 ],
					"fontname" : "Arial",
					"fontsize" : 15.892015079358522,
					"id" : "obj-24",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 6,
					"outlettype" : [ "signal", "signal", "signal", "signal", "", "" ],
					"patching_rect" : [ 303.828556254746218, 1094.456108529481753, 389.999999999999886, 26.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 29.0, 318.361208934192291, 338.0, 26.0 ],
					"text" : "poly~ lzr.poly-voice~ @steal 0 @voices 32"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-23",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 44.0, 735.200009405612946, 87.0, 22.0 ],
					"text" : "route refresh"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-18",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 44.0, 666.987744562730768, 81.0, 22.0 ],
					"text" : "fromsymbol"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.996078431372549, 0.996078431372549, 0.996078431372549, 1.0 ],
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-2",
					"lockeddragscroll" : 0,
					"maxclass" : "bpatcher",
					"name" : "n4m.monitor.maxpat",
					"numinlets" : 1,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 446.600001811981201, 369.11938714056987, 400.0, 220.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 437.600001811981201, 411.803455614359791, 460.0, 220.0 ],
					"viewvisibility" : 1
				}

			}
, 			{
				"box" : 				{
					"color" : [ 0.992156862745098, 0.796078431372549, 0.396078431372549, 1.0 ],
					"fontname" : "Arial",
					"fontsize" : 15.338591652472985,
					"id" : "obj-1",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 44.0, 617.315931526210079, 314.0, 26.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 437.600001811981201, 318.361208934192291, 314.0, 26.0 ],
					"saved_object_attributes" : 					{
						"autostart" : 1,
						"defer" : 0,
						"watch" : 0
					}
,
					"text" : "node.script bundle.js @autostart 1 @watch 0"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"id" : "obj-38",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 347.878552749993105, 1004.056115825090274, 80.0, 22.0 ],
					"text" : "voices $1",
					"textcolor" : [ 0.400004804134369, 0.80004358291626, 0.998939156532288, 1.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-46",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1031.0, 827.0, 66.0, 22.0 ],
					"text" : "s tonode"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 15.038741477095121,
					"id" : "obj-5",
					"maxclass" : "newobj",
					"numinlets" : 4,
					"numoutlets" : 0,
					"patching_rect" : [ 301.328551903607206, 1476.864214960231038, 232.600005257129681, 25.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 26.0, 580.667670574590829, 120.792890995260677, 25.0 ],
					"text" : "dac~ 1 2 3 4"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-104",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1031.0, 732.600007295608521, 82.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 437.600001811981201, 353.961209196452728, 82.0, 22.0 ],
					"style" : "nodemsg",
					"text" : "reset_app"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-93",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1031.0, 794.199996948242188, 96.0, 22.0 ],
					"style" : "nodemsg",
					"text" : "clear_cache"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-92",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1031.0, 762.600007295608521, 110.0, 22.0 ],
					"style" : "nodemsg",
					"text" : "initialize_store"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 16.0,
					"id" : "obj-78",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 152.5, 190.0, 172.0, 24.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 32.0, 115.0, 200.0, 24.0 ],
					"style" : "h2",
					"text" : "Write an english word"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 1,
					"fontname" : "Arial",
					"fontsize" : 24.0,
					"id" : "obj-76",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 41.5, 35.0, 310.0, 33.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 29.0, 37.0, 291.0, 33.0 ],
					"style" : "h1",
					"text" : "DICTIONARY SAMPLER"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-36",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 44.0, 312.100000262260437, 120.0, 22.0 ],
					"style" : "nodemsg",
					"text" : "search_word $1"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-20",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 44.0, 280.600000262260437, 72.0, 22.0 ],
					"text" : "zl filter text"
				}

			}
, 			{
				"box" : 				{
					"annotation" : "",
					"fontname" : "Arial",
					"fontsize" : 20.0,
					"id" : "obj-11",
					"keymode" : 1,
					"lines" : 1,
					"maxclass" : "textedit",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "", "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 44.0, 225.600000262260437, 233.0, 31.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 32.0, 146.5, 255.0, 32.5 ],
					"style" : "text-field",
					"text" : "swag",
					"textcolor" : [ 0.996078431372549, 0.996078431372549, 0.996078431372549, 1.0 ],
					"wordwrap" : 0
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-55",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 301.328551903607206, 1433.864215000000058, 80.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 25.0, 613.667670614359849, 80.0, 22.0 ],
					"text" : "startwindow"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-56",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 401.207109004739323, 1433.864215000000058, 37.0, 22.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 107.5, 613.667670614359849, 37.0, 22.0 ],
					"text" : "stop"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"id" : "obj-51",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 202.0, 1004.056115825090274, 89.0, 22.0 ],
					"text" : "threadcount $1"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-18", 0 ],
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"color" : [ 0.995808362960815, 0.800102710723877, 0.399984955787659, 1.0 ],
					"destination" : [ "obj-2", 0 ],
					"midpoints" : [ 348.5, 668.315931526210079, 412.300000905990601, 668.315931526210079, 412.300000905990601, 347.11938714056987, 456.100001811981201, 347.11938714056987 ],
					"source" : [ "obj-1", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 3 ],
					"source" : [ "obj-10", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-46", 0 ],
					"midpoints" : [ 1040.5, 763.80000364780426, 1040.5, 763.80000364780426 ],
					"source" : [ "obj-104", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-20", 0 ],
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-128", 0 ],
					"source" : [ "obj-110", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-119", 1 ],
					"source" : [ "obj-115", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-119", 0 ],
					"source" : [ "obj-115", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-27", 1 ],
					"source" : [ "obj-116", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-27", 0 ],
					"source" : [ "obj-116", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-118", 0 ],
					"source" : [ "obj-117", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-115", 0 ],
					"midpoints" : [ 223.5, 1201.456108529481753, 453.228555408360307, 1201.456108529481753 ],
					"order" : 0,
					"source" : [ "obj-118", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-116", 0 ],
					"midpoints" : [ 223.5, 1203.456108529481753, 310.828551903607206, 1203.456108529481753 ],
					"order" : 1,
					"source" : [ "obj-118", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 3 ],
					"order" : 1,
					"source" : [ "obj-119", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 2 ],
					"order" : 1,
					"source" : [ "obj-119", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-79", 3 ],
					"midpoints" : [ 461.728555408360307, 1418.160161764740906, 672.833351612091064, 1418.160161764740906 ],
					"order" : 0,
					"source" : [ "obj-119", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-79", 2 ],
					"midpoints" : [ 453.228555408360307, 1418.160161764740906, 656.166684945424436, 1418.160161764740906 ],
					"order" : 0,
					"source" : [ "obj-119", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-130", 0 ],
					"midpoints" : [ 1040.5, 256.128062019305162, 1129.5, 256.128062019305162 ],
					"order" : 0,
					"source" : [ "obj-128", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-131", 0 ],
					"order" : 1,
					"source" : [ "obj-128", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 0 ],
					"source" : [ "obj-131", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-19", 1 ],
					"source" : [ "obj-16", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 1 ],
					"source" : [ "obj-17", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-23", 0 ],
					"midpoints" : [ 53.5, 735.093876984171857, 53.5, 735.093876984171857 ],
					"source" : [ "obj-18", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-24", 1 ],
					"midpoints" : [ 640.328556254746104, 1077.228054264740877, 684.328556254746104, 1077.228054264740877 ],
					"source" : [ "obj-19", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-36", 0 ],
					"source" : [ "obj-20", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-22", 0 ],
					"order" : 3,
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-32", 0 ],
					"midpoints" : [ 640.328556254746104, 967.536720840549151, 843.328556254746104, 967.536720840549151 ],
					"order" : 2,
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-44", 0 ],
					"midpoints" : [ 640.328556254746104, 966.296410763029826, 964.328556254746104, 966.296410763029826 ],
					"order" : 1,
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-48", 0 ],
					"midpoints" : [ 640.328556254746104, 967.296410763029826, 1029.328556254746218, 967.296410763029826 ],
					"order" : 0,
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-19", 0 ],
					"source" : [ "obj-22", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-112", 0 ],
					"source" : [ "obj-23", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-72", 0 ],
					"midpoints" : [ 121.5, 781.350004702806473, 313.328556254746218, 781.350004702806473 ],
					"source" : [ "obj-23", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-115", 1 ],
					"source" : [ "obj-24", 3 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-115", 0 ],
					"source" : [ "obj-24", 2 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-116", 1 ],
					"source" : [ "obj-24", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-116", 0 ],
					"source" : [ "obj-24", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-53", 1 ],
					"source" : [ "obj-24", 5 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-54", 1 ],
					"source" : [ "obj-24", 4 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 1 ],
					"order" : 1,
					"source" : [ "obj-27", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"order" : 1,
					"source" : [ "obj-27", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-79", 1 ],
					"midpoints" : [ 319.328551903607206, 1418.160161764740906, 639.500018278757693, 1418.160161764740906 ],
					"order" : 0,
					"source" : [ "obj-27", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-79", 0 ],
					"midpoints" : [ 310.828551903607206, 1418.160161764740906, 622.833351612091064, 1418.160161764740906 ],
					"order" : 0,
					"source" : [ "obj-27", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-60", 0 ],
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-79", 0 ],
					"source" : [ "obj-30", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"midpoints" : [ 185.0, 564.623784840692224, 53.5, 564.623784840692224 ],
					"source" : [ "obj-31", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-40", 0 ],
					"source" : [ "obj-32", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"midpoints" : [ 185.0, 580.623784840692224, 53.5, 580.623784840692224 ],
					"source" : [ "obj-34", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"midpoints" : [ 185.0, 547.623784840692224, 53.5, 547.623784840692224 ],
					"source" : [ "obj-35", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-36", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-24", 0 ],
					"midpoints" : [ 357.378552749993105, 1058.256112177286013, 313.328556254746218, 1058.256112177286013 ],
					"source" : [ "obj-38", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-24", 1 ],
					"midpoints" : [ 843.328556254746104, 1077.228054264740877, 684.328556254746104, 1077.228054264740877 ],
					"source" : [ "obj-40", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"midpoints" : [ 182.5, 514.717659333389975, 53.5, 514.717659333389975 ],
					"source" : [ "obj-43", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-40", 1 ],
					"source" : [ "obj-44", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-50", 1 ],
					"source" : [ "obj-45", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-50", 0 ],
					"source" : [ "obj-48", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-24", 0 ],
					"source" : [ "obj-49", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-24", 1 ],
					"midpoints" : [ 1029.328556254746218, 1077.228054264740877, 684.328556254746104, 1077.228054264740877 ],
					"source" : [ "obj-50", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-24", 0 ],
					"source" : [ "obj-51", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"source" : [ "obj-55", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"midpoints" : [ 410.707109004739323, 1464.864214980115548, 310.828551903607206, 1464.864214980115548 ],
					"source" : [ "obj-56", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"source" : [ "obj-6", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-11", 0 ],
					"source" : [ "obj-60", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"midpoints" : [ 185.0, 595.873784840692224, 53.5, 595.873784840692224 ],
					"source" : [ "obj-65", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-43", 0 ],
					"source" : [ "obj-68", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-51", 0 ],
					"source" : [ "obj-70", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-43", 0 ],
					"source" : [ "obj-71", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-49", 1 ],
					"midpoints" : [ 326.328556254746218, 839.82805273886197, 639.328556254746218, 839.82805273886197 ],
					"source" : [ "obj-72", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-49", 0 ],
					"source" : [ "obj-72", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-24", 0 ],
					"source" : [ "obj-74", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-74", 0 ],
					"source" : [ "obj-77", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-80", 0 ],
					"source" : [ "obj-79", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"source" : [ "obj-8", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-91", 0 ],
					"source" : [ "obj-83", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-79", 0 ],
					"source" : [ "obj-84", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-38", 0 ],
					"source" : [ "obj-91", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-95", 0 ],
					"source" : [ "obj-91", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-46", 0 ],
					"midpoints" : [ 1040.5, 786.80000364780426, 1040.5, 786.80000364780426 ],
					"source" : [ "obj-92", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-46", 0 ],
					"midpoints" : [ 1040.5, 801.80000364780426, 1040.5, 801.80000364780426 ],
					"source" : [ "obj-93", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-120", 0 ],
					"source" : [ "obj-95", 0 ]
				}

			}
 ],
		"parameters" : 		{
			"obj-27" : [ "channel-1s", "chan-1s", 0 ],
			"obj-119" : [ "channel-2s", "chan-2s", 0 ],
			"parameterbanks" : 			{

			}

		}
,
		"dependency_cache" : [ 			{
				"name" : "bundle.js",
				"bootpath" : "~/Developer/Max 8/Projects/lang-sampler/code/dist",
				"patcherrelativepath" : "../code/dist",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "n4m.monitor.maxpat",
				"bootpath" : "~/Developer/Max 8/Projects/lang-sampler/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "resize_n4m_monitor_patcher.js",
				"bootpath" : "C74:/packages/Node For Max/patchers/debug-monitor",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "fit_jweb_to_bounds.js",
				"bootpath" : "C74:/packages/Node For Max/patchers/debug-monitor",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "lzr.poly-voice~.maxpat",
				"bootpath" : "~/Developer/Max 8/Projects/lang-sampler/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "lzr.quadspat~.maxpat",
				"bootpath" : "~/Developer/Max 8/Projects/lang-sampler/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "lzr.delay~.maxpat",
				"bootpath" : "~/Developer/Max 8/Projects/lang-sampler/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "lzr.bridge2.maxpat",
				"bootpath" : "~/Developer/Max 8/Projects/lang-sampler/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "gate-poly-msg.maxpat",
				"bootpath" : "~/Developer/Max 8/Projects/lang-sampler/patchers",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
 ],
		"autosave" : 0,
		"styles" : [ 			{
				"name" : "nodemsg",
				"default" : 				{
					"fontface" : [ 1 ],
					"textcolor_inverse" : [ 0.995808362960815, 0.800102710723877, 0.399984955787659, 1.0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
 ]
	}

}
