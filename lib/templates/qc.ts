/**
 * Reusable QC and client ITP definitions. No project records, example readings,
 * supplied photographs or sample-derived applicability decisions are included.
 * Evidence wording is retained from the reviewed bilingual QC templates.
 * Photo completion records evidence availability, not a test pass/fail decision.
 */
export type QCProductCategory = "led-videowall" | "digital-kiosk";
export type QCEvidenceStatus = "Pending" | "Uploaded" | "N/A";
export type QCDisplayTechnology = "led" | "lcd" | "mixed";
export interface QCScope {
  displayTechnology?: QCDisplayTechnology;
  processorIncluded?: boolean;
  mediaPlayerBracketIncluded?: boolean;
  reservedHdmiIncluded?: boolean;
  backupHuiduPlayerIncluded?: boolean;
  buttonBatteriesIncluded?: boolean;
  cellularIncluded?: boolean;
  touchIncluded?: boolean;
  customItemsIncluded?: boolean;
  accessKeysIncluded?: boolean;
  remoteControllerIncluded?: boolean;
  remoteBatteriesIncluded?: boolean;
  airFiltersIncluded?: boolean;
  accessoriesIncluded?: boolean;
  spareModulesIncluded?: boolean;
  sparePowerSuppliesIncluded?: boolean;
  spareReceivingCardsIncluded?: boolean;
  spareMiscIncluded?: boolean;
  otherSparesIncluded?: boolean;
  sparesIncluded?: boolean;
  sparesFlightCaseIncluded?: boolean;
  networkIncluded?: boolean;
  accessPanelsIncluded?: boolean;
}
export type QCScopeFlag = Exclude<keyof QCScope, "displayTechnology">;
export interface QCApplicabilityRule {
  displayTechnology?: "led" | "lcd";
  requires?: readonly QCScopeFlag[];
}
export interface QCBilingualText { en: string; zh: string }
export interface QCMeasurement {
  key: "measuredValue";
  type: "number";
  unit: string;
  min: number;
  step: "any";
  requiredWhenApplicable: boolean;
  label: QCBilingualText;
}
export interface QCPhotoStep extends QCBilingualText {
  id: string;
  instruction: string;
  instructionZh: string;
  group: string;
  unit?: string;
  measurement?: QCMeasurement;
  applicability?: QCApplicabilityRule;
  repeatFor?: "cabinet-specification" | "case" | "component-type";
  accepts: readonly ["image"];
  multiple: boolean;
}
export interface ITPCheck extends QCBilingualText {
  id: string;
  sampling: string;
  samplingZh: string;
  method: string;
  methodZh: string;
  criteria: string;
  criteriaZh: string;
  ref?: string;
  applicability?: QCApplicabilityRule;
}
export interface QCGroup extends QCBilingualText { id: string }
export interface QCFunctionalCheck extends QCBilingualText {
  id: string;
  applicability?: QCApplicabilityRule;
}
export interface QCTemplate {
  id: QCProductCategory;
  title: QCBilingualText;
  edition: string;
  steps: readonly QCPhotoStep[];
  groups: readonly QCGroup[];
  generalChecks: readonly ITPCheck[];
  categoryChecks: readonly ITPCheck[];
  functionalChecks: readonly QCFunctionalCheck[];
}
export interface QCApplicability {
  status: "required" | "not_applicable" | "review_required";
  reason: string;
  reasonZh: string;
}
export interface QCStepState {
  stepId: string;
  status: QCEvidenceStatus;
  attachmentIds: string[];
  measuredValue: number | null;
  naReason: string;
  naSource: "scope" | "manual" | null;
  skipped: boolean;
}

export const ledQCSteps: readonly QCPhotoStep[] = [
  {
    "id": "A01",
    "en": "Module front face",
    "zh": "模组正面",
    "instruction": "Show the full front face of one module, including all four corners.",
    "instructionZh": "拍摄单个模组正面，完整显示模组四个角落",
    "group": "A",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "A02",
    "en": "Module back face",
    "zh": "模组背面",
    "instruction": "Show the full back face of one module, including all four corners.",
    "instructionZh": "拍摄单个模组背面，完整显示模组四个角落",
    "group": "A",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "A03",
    "en": "Module thickness",
    "zh": "模组厚度",
    "instruction": "Measure the maximum module thickness with a digital caliper. Show the reading.",
    "instructionZh": "使用电子游标卡尺测量模组厚度最大处，拍摄电子游标卡尺显示的数值",
    "group": "A",
    "unit": "mm",
    "measurement": {
      "key": "measuredValue",
      "type": "number",
      "unit": "mm",
      "min": 0,
      "step": "any",
      "requiredWhenApplicable": true,
      "label": {
        "en": "Measured value",
        "zh": "实测值"
      }
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "A04",
    "en": "Cabinet internal layout",
    "zh": "箱体内部正面",
    "instruction": "Show the full cabinet front, power supplies and receiver cards. Add one photo for each cabinet specification.",
    "instructionZh": "拍摄单个箱体正面，完整显示箱体四个角落，显示电源、接收卡位置（每个规格箱体拍摄一张，照片编码添加后缀）",
    "group": "A",
    "repeatFor": "cabinet-specification",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "A05",
    "en": "Compliance sticker",
    "zh": "箱体内部贴纸",
    "instruction": "Show the cabinet specification sticker and its position. Add one photo for each cabinet specification.",
    "instructionZh": "拍摄单个箱体正面，显示箱体内部参数贴纸粘贴位置（每个规格箱体拍摄一张，照片编码添加后缀）",
    "group": "A",
    "repeatFor": "cabinet-specification",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "A06",
    "en": "Cabinet back face",
    "zh": "箱体背面",
    "instruction": "Show the full cabinet back and mounting holes. Add one photo for each cabinet specification.",
    "instructionZh": "拍摄单个箱体背面，完整显示箱体四个角落，显示箱体安装固定孔位（每个规格箱体拍摄一张，照片编码添加后缀）",
    "group": "A",
    "repeatFor": "cabinet-specification",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "A07",
    "en": "Cabinet thickness",
    "zh": "箱体厚度",
    "instruction": "Measure the maximum cabinet thickness with a digital caliper. Show the reading.",
    "instructionZh": "使用电子游标卡尺测量箱体厚度最大处，拍摄电子游标卡尺显示的数值",
    "group": "A",
    "unit": "mm",
    "measurement": {
      "key": "measuredValue",
      "type": "number",
      "unit": "mm",
      "min": 0,
      "step": "any",
      "requiredWhenApplicable": true,
      "label": {
        "en": "Measured value",
        "zh": "实测值"
      }
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "A08",
    "en": "Videowall thickness",
    "zh": "整屏厚度",
    "instruction": "With modules fitted, measure the maximum screen thickness. Show the caliper reading.",
    "instructionZh": "使用电子游标卡尺测量模组安装后整屏厚度最大处，拍摄电子游标卡尺显示的数值",
    "group": "A",
    "unit": "mm",
    "measurement": {
      "key": "measuredValue",
      "type": "number",
      "unit": "mm",
      "min": 0,
      "step": "any",
      "requiredWhenApplicable": true,
      "label": {
        "en": "Measured value",
        "zh": "实测值"
      }
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "A09",
    "en": "Cabinet interlocking mechanism",
    "zh": "箱体连接方式",
    "instruction": "Show the connection at four cabinet corners. If plates are used, clearly show their fixing holes.",
    "instructionZh": "拍摄4个箱体角落处的连接方式，如使用连接片应清晰显示连接片与箱体间的固定孔位",
    "group": "A",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "A10",
    "en": "Controller model",
    "zh": "发送盒型号",
    "instruction": "Show the controller model. Include every customised interface, if fitted.",
    "instructionZh": "拍摄发送盒型号，如有定制接口，需拍摄全部接口",
    "group": "A",
    "applicability": {
      "requires": [
        "processorIncluded"
      ]
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "A11",
    "en": "Main power plug",
    "zh": "主电源线插头",
    "instruction": "Show the main power plug. Include all plugs if there is more than one power lead.",
    "instructionZh": "拍摄主电源线插头，如有多根主电源线，需拍摄全部插头",
    "group": "A",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "B01",
    "en": "Display check - red",
    "zh": "RGB-全红",
    "instruction": "Photograph the whole screen from the front, including all four corners, displaying full red.",
    "instructionZh": "正面拍摄整屏，完整显示整屏四个角落，显示整屏全红时状态",
    "group": "B",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "B02",
    "en": "Display check - green",
    "zh": "RGB-全绿",
    "instruction": "Photograph the whole screen from the front, including all four corners, displaying full green.",
    "instructionZh": "正面拍摄整屏，完整显示整屏四个角落，显示整屏全绿时状态",
    "group": "B",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "B03",
    "en": "Display check - blue",
    "zh": "RGB-全蓝",
    "instruction": "Photograph the whole screen from the front, including all four corners, displaying full blue.",
    "instructionZh": "正面拍摄整屏，完整显示整屏四个角落，显示整屏全蓝时状态",
    "group": "B",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "B04",
    "en": "Display check - greyscale",
    "zh": "灰度",
    "instruction": "Photograph the whole screen from the front, including all four corners, during the greyscale test.",
    "instructionZh": "正面拍摄整屏，完整显示整屏四个角落，显示整屏灰度测试时状态",
    "group": "B",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "B05",
    "en": "Display check - sample content",
    "zh": "播放样片",
    "instruction": "Photograph the whole screen playing the sample video, including all four corners.",
    "instructionZh": "正面拍摄整屏，完整显示整屏四个角落，显示整屏播放视频样片时状态",
    "group": "B",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "B06",
    "en": "Power consumption",
    "zh": "功耗",
    "instruction": "Connect a power meter. Set maximum brightness and full white. Photograph the power reading.",
    "instructionZh": "整屏供电连接计量插座，屏幕调至最大亮度，显示纯白，拍摄计量插座显示功率数值",
    "group": "B",
    "unit": "W",
    "measurement": {
      "key": "measuredValue",
      "type": "number",
      "unit": "W",
      "min": 0,
      "step": "any",
      "requiredWhenApplicable": true,
      "label": {
        "en": "Measured value",
        "zh": "实测值"
      }
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "B07",
    "en": "Measured brightness",
    "zh": "亮度",
    "instruction": "Set maximum brightness and full white. Photograph the brightness-meter reading.",
    "instructionZh": "屏幕调至最大亮度，显示纯白，拍摄光枪实测显示亮度数值",
    "group": "B",
    "unit": "nits",
    "measurement": {
      "key": "measuredValue",
      "type": "number",
      "unit": "nits",
      "min": 0,
      "step": "any",
      "requiredWhenApplicable": true,
      "label": {
        "en": "Measured value",
        "zh": "实测值"
      }
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "B08",
    "en": "Refresh rate",
    "zh": "刷新率",
    "instruction": "Capture the visual refresh-rate value on the receiver-card settings page of the display configuration software.",
    "instructionZh": "截图或拍摄显示屏配置软件，接收卡设置页面的视觉刷新频率数值",
    "group": "B",
    "unit": "Hz",
    "measurement": {
      "key": "measuredValue",
      "type": "number",
      "unit": "Hz",
      "min": 0,
      "step": "any",
      "requiredWhenApplicable": true,
      "label": {
        "en": "Measured value",
        "zh": "实测值"
      }
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "B09",
    "en": "Screen powered off",
    "zh": "熄屏全黑",
    "instruction": "Photograph the whole screen from the front, including all four corners, with the screen powered off.",
    "instructionZh": "正面拍摄整屏，完整显示整屏四个角落，显示熄屏全黑时整屏状态",
    "group": "B",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "C01",
    "en": "Spare modules",
    "zh": "备品模组",
    "instruction": "Show all spare modules, their quantity and packaging.",
    "instructionZh": "拍摄全部备品模组，清晰显示数量及包装方式",
    "group": "C",
    "applicability": {
      "requires": [
        "spareModulesIncluded"
      ]
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "C02",
    "en": "Spare PSUs",
    "zh": "备品电源",
    "instruction": "Show all spare power supplies, their quantity and packaging.",
    "instructionZh": "拍摄全部备品电源，清晰显示数量及包装方式",
    "group": "C",
    "applicability": {
      "requires": [
        "sparePowerSuppliesIncluded"
      ]
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "C03",
    "en": "Spare receiving cards",
    "zh": "备品接收卡",
    "instruction": "Show all spare receiver cards, their quantity and packaging.",
    "instructionZh": "拍摄全部备品接收卡，清晰显示数量及包装方式",
    "group": "C",
    "applicability": {
      "requires": [
        "spareReceivingCardsIncluded"
      ]
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "C04",
    "en": "Spare misc. items",
    "zh": "备品零件线材",
    "instruction": "Show all spare components and cables, such as LED diodes, driver ICs, masks and ribbon cables.",
    "instructionZh": "拍摄全部备品零件及线材，如灯珠、驱动IC、面罩、排线等",
    "group": "C",
    "applicability": {
      "requires": [
        "spareMiscIncluded"
      ]
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "C05",
    "en": "Cabinet locking plates and screws",
    "zh": "连接片及螺丝",
    "instruction": "Show all connecting plates and screws.",
    "instructionZh": "拍摄全部连接片及螺丝",
    "group": "C",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "C06",
    "en": "Other spares",
    "zh": "其他备品",
    "instruction": "Show other non-standard spares supplied with the order. Add photos as needed; suffixes are assigned automatically.",
    "instructionZh": "拍摄订单随附的其他非标备品，照片文件名按顺序添加后缀",
    "group": "C",
    "applicability": {
      "requires": [
        "otherSparesIncluded"
      ]
    },
    "repeatFor": "component-type",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "D01",
    "en": "Cabinet weight",
    "zh": "箱体重量",
    "instruction": "Weigh one cabinet including modules. Show the scale reading. Add one photo for each cabinet specification.",
    "instructionZh": "使用电子叉车秤对单独一个含模组箱体称重，拍摄电子叉车秤显示数值（每个规格箱体拍摄一张，照片编码添加后缀）",
    "group": "D",
    "unit": "kg",
    "measurement": {
      "key": "measuredValue",
      "type": "number",
      "unit": "kg",
      "min": 0,
      "step": "any",
      "requiredWhenApplicable": true,
      "label": {
        "en": "Measured value",
        "zh": "实测值"
      }
    },
    "repeatFor": "cabinet-specification",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "D02",
    "en": "Packaging weight",
    "zh": "包装空箱重量",
    "instruction": "Weigh each empty wooden crate or flight case. Show its scale reading and add one photo per case.",
    "instructionZh": "使用电子叉车秤对木箱或航空箱逐个称重，拍摄电子叉车秤显示数值（每个空箱拍摄一张，照片编码添加后缀）",
    "group": "D",
    "unit": "kg",
    "measurement": {
      "key": "measuredValue",
      "type": "number",
      "unit": "kg",
      "min": 0,
      "step": "any",
      "requiredWhenApplicable": true,
      "label": {
        "en": "Measured value",
        "zh": "实测值"
      }
    },
    "repeatFor": "case",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "D03",
    "en": "Packed cabinets",
    "zh": "箱体装箱",
    "instruction": "Show how the cabinets are packed and the number of cabinets in each case.",
    "instructionZh": "拍摄箱体装箱方式，清晰显示每箱装填数量",
    "group": "D",
    "repeatFor": "case",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "D04",
    "en": "Packed spares",
    "zh": "备品装箱",
    "instruction": "Show the spare-parts packing arrangement and the fully packed case.",
    "instructionZh": "拍摄备品装箱方式，清晰显示备品箱装填完毕状态",
    "group": "D",
    "applicability": {
      "requires": [
        "sparesIncluded"
      ]
    },
    "repeatFor": "case",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "D05",
    "en": "Wooden crate weight",
    "zh": "木箱尺寸重量",
    "instruction": "Weigh each loaded wooden crate. Show the scale reading and the shipping mark clearly.",
    "instructionZh": "使用电子叉车秤对木箱逐个称重，拍摄电子叉车秤显示数值，同时清晰显示唛头",
    "group": "D",
    "unit": "kg",
    "measurement": {
      "key": "measuredValue",
      "type": "number",
      "unit": "kg",
      "min": 0,
      "step": "any",
      "requiredWhenApplicable": true,
      "label": {
        "en": "Measured value",
        "zh": "实测值"
      }
    },
    "repeatFor": "case",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "D06",
    "en": "Spares case weight",
    "zh": "备品箱贴纸及重量",
    "instruction": "Weigh each spares case. Clearly show its scale reading, printed mark, spare-parts sticker and shipping mark.",
    "instructionZh": "使用电子叉车秤对备品箱逐个称重，拍摄电子叉车秤显示数值，同时清晰显示丝印标志、备品箱贴纸及唛头",
    "group": "D",
    "unit": "kg",
    "applicability": {
      "requires": [
        "sparesIncluded"
      ]
    },
    "measurement": {
      "key": "measuredValue",
      "type": "number",
      "unit": "kg",
      "min": 0,
      "step": "any",
      "requiredWhenApplicable": true,
      "label": {
        "en": "Measured value",
        "zh": "实测值"
      }
    },
    "repeatFor": "case",
    "accepts": [
      "image"
    ],
    "multiple": true
  }
];

export const kioskQCSteps: readonly QCPhotoStep[] = [
  {
    "id": "KA01",
    "en": "Module front face",
    "zh": "LED 模组正面",
    "instruction": "Show the complete front face of an LED module, including all corners.",
    "instructionZh": "拍摄单个 LED 模组完整正面，包含所有边角。",
    "group": "KA",
    "applicability": {
      "displayTechnology": "led"
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KA02",
    "en": "Module back face",
    "zh": "LED 模组背面",
    "instruction": "Show the complete module back, connectors and identification label.",
    "instructionZh": "拍摄模组完整背面、接口及标识标签。",
    "group": "KA",
    "applicability": {
      "displayTechnology": "led"
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KA03",
    "en": "Kiosk internal layout",
    "zh": "广告机内部布局",
    "instruction": "Show the LED kiosk internal layout and cable routing.",
    "instructionZh": "拍摄 LED 广告机内部布局及走线。",
    "group": "KA",
    "applicability": {
      "displayTechnology": "led"
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KA04",
    "en": "Controller model",
    "zh": "控制器型号",
    "instruction": "Capture the controller model label clearly.",
    "instructionZh": "清晰拍摄控制器型号标签。",
    "group": "KA",
    "applicability": {
      "displayTechnology": "led"
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KA05",
    "en": "Controller power plug",
    "zh": "控制器电源插头",
    "instruction": "Show the controller power plug and its markings.",
    "instructionZh": "拍摄控制器电源插头及标识。",
    "group": "KA",
    "applicability": {
      "displayTechnology": "led"
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KA06",
    "en": "Display check - red",
    "zh": "红色显示检查",
    "instruction": "Show the whole screen displaying a red test pattern.",
    "instructionZh": "拍摄全屏红色测试画面。",
    "group": "KA",
    "applicability": {
      "displayTechnology": "led"
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KA07",
    "en": "Display check - green",
    "zh": "绿色显示检查",
    "instruction": "Show the whole screen displaying a green test pattern.",
    "instructionZh": "拍摄全屏绿色测试画面。",
    "group": "KA",
    "applicability": {
      "displayTechnology": "led"
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KA08",
    "en": "Display check - blue",
    "zh": "蓝色显示检查",
    "instruction": "Show the whole screen displaying a blue test pattern.",
    "instructionZh": "拍摄全屏蓝色测试画面。",
    "group": "KA",
    "applicability": {
      "displayTechnology": "led"
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KA09",
    "en": "Display check - greyscale",
    "zh": "灰度显示检查",
    "instruction": "Show the whole screen displaying the grayscale test pattern.",
    "instructionZh": "拍摄完整灰度测试画面。",
    "group": "KA",
    "applicability": {
      "displayTechnology": "led"
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KA10",
    "en": "Display check - sample content",
    "zh": "测试内容显示",
    "instruction": "Show the complete screen playing the agreed sample content.",
    "instructionZh": "拍摄完整屏幕播放约定测试内容的画面。",
    "group": "KA",
    "applicability": {
      "displayTechnology": "led"
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KA11",
    "en": "Power consumption",
    "zh": "功耗",
    "instruction": "Show the power meter reading and enter the measured value.",
    "instructionZh": "拍摄功率计读数并填写实测值。",
    "group": "KA",
    "unit": "W",
    "applicability": {
      "displayTechnology": "led"
    },
    "measurement": {
      "key": "measuredValue",
      "type": "number",
      "unit": "W",
      "min": 0,
      "step": "any",
      "requiredWhenApplicable": true,
      "label": {
        "en": "Measured value",
        "zh": "实测值"
      }
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KA12",
    "en": "Measured brightness",
    "zh": "实测亮度",
    "instruction": "Show the brightness meter reading and enter the measured value.",
    "instructionZh": "拍摄亮度计读数并填写实测值。",
    "group": "KA",
    "unit": "nits",
    "applicability": {
      "displayTechnology": "led"
    },
    "measurement": {
      "key": "measuredValue",
      "type": "number",
      "unit": "nits",
      "min": 0,
      "step": "any",
      "requiredWhenApplicable": true,
      "label": {
        "en": "Measured value",
        "zh": "实测值"
      }
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KA13",
    "en": "Refresh rate",
    "zh": "刷新率",
    "instruction": "Show the controller or software refresh-rate setting.",
    "instructionZh": "拍摄控制器或软件中的刷新率设置。",
    "group": "KA",
    "unit": "Hz",
    "applicability": {
      "displayTechnology": "led"
    },
    "measurement": {
      "key": "measuredValue",
      "type": "number",
      "unit": "Hz",
      "min": 0,
      "step": "any",
      "requiredWhenApplicable": true,
      "label": {
        "en": "Measured value",
        "zh": "实测值"
      }
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KA14",
    "en": "Screen powered off",
    "zh": "屏幕断电状态",
    "instruction": "Show the complete LED screen with the power off.",
    "instructionZh": "拍摄 LED 屏幕断电后的完整正面。",
    "group": "KA",
    "applicability": {
      "displayTechnology": "led"
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KB01",
    "en": "LCD module front face",
    "zh": "LCD 模组正面",
    "instruction": "Show the full LCD module front, including all corners.",
    "instructionZh": "拍摄 LCD 模组完整正面，包含所有边角。",
    "group": "KB",
    "applicability": {
      "displayTechnology": "lcd"
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KB02",
    "en": "LCD module back face",
    "zh": "LCD 模组背面",
    "instruction": "Show the complete LCD module back and identification label.",
    "instructionZh": "拍摄 LCD 模组完整背面及标识标签。",
    "group": "KB",
    "applicability": {
      "displayTechnology": "lcd"
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KB03",
    "en": "LCD module I/O ports",
    "zh": "LCD 模组输入输出接口",
    "instruction": "Show the I/O ports and their labels clearly.",
    "instructionZh": "清晰拍摄输入输出接口及其标识。",
    "group": "KB",
    "applicability": {
      "displayTechnology": "lcd"
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KB04",
    "en": "LCD module logic board",
    "zh": "LCD 模组逻辑板",
    "instruction": "Show the logic board, its label and connected cables.",
    "instructionZh": "拍摄逻辑板、板上标签及连接线。",
    "group": "KB",
    "applicability": {
      "displayTechnology": "lcd"
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KB05",
    "en": "LCD module backlight control board",
    "zh": "LCD 背光控制板",
    "instruction": "Show the backlight control board and its connections.",
    "instructionZh": "拍摄背光控制板及连接情况。",
    "group": "KB",
    "applicability": {
      "displayTechnology": "lcd"
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KB06",
    "en": "LCD module power distribution box",
    "zh": "LCD 模组配电箱",
    "instruction": "Show the LCD power distribution box and wiring.",
    "instructionZh": "拍摄 LCD 模组配电箱及接线。",
    "group": "KB",
    "applicability": {
      "displayTechnology": "lcd"
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KB07",
    "en": "Media player bracket",
    "zh": "媒体播放器支架",
    "instruction": "Show the media player bracket and the available mounting space.",
    "instructionZh": "拍摄媒体播放器支架及预留安装空间。",
    "group": "KB",
    "applicability": {
      "displayTechnology": "lcd",
      "requires": [
        "mediaPlayerBracketIncluded"
      ]
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KB08",
    "en": "Reserved HDMI interface",
    "zh": "预留 HDMI 接口",
    "instruction": "Show the reserved HDMI connection and its accessible location.",
    "instructionZh": "拍摄预留 HDMI 接口及其可接近的位置。",
    "group": "KB",
    "applicability": {
      "displayTechnology": "lcd",
      "requires": [
        "reservedHdmiIncluded"
      ]
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KB09",
    "en": "Backup Huidu media player",
    "zh": "备用灰度媒体播放器",
    "instruction": "Show the backup Huidu player and its model label, when supplied.",
    "instructionZh": "如有配置，拍摄备用灰度播放器及型号标签。",
    "group": "KB",
    "applicability": {
      "displayTechnology": "lcd",
      "requires": [
        "backupHuiduPlayerIncluded"
      ]
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KB10",
    "en": "Button batteries",
    "zh": "纽扣电池",
    "instruction": "Show the supplied button batteries and their specification markings.",
    "instructionZh": "拍摄所配纽扣电池及规格标识。",
    "group": "KB",
    "applicability": {
      "displayTechnology": "lcd",
      "requires": [
        "buttonBatteriesIncluded"
      ]
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KB11",
    "en": "Display check - sample content",
    "zh": "LCD 测试内容显示",
    "instruction": "Show the complete LCD screen playing the agreed sample content.",
    "instructionZh": "拍摄 LCD 屏幕完整播放约定测试内容的画面。",
    "group": "KB",
    "applicability": {
      "displayTechnology": "lcd"
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KB12",
    "en": "Screen powered off",
    "zh": "LCD 屏幕断电状态",
    "instruction": "Show the complete LCD screen with the power off.",
    "instructionZh": "拍摄 LCD 屏幕断电后的完整正面。",
    "group": "KB",
    "applicability": {
      "displayTechnology": "lcd"
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KC01",
    "en": "Kiosk front face",
    "zh": "广告机正面",
    "instruction": "Show the whole kiosk front, including enclosure and base.",
    "instructionZh": "拍摄广告机完整正面，包含机壳及底座。",
    "group": "KC",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KC02",
    "en": "Kiosk back face",
    "zh": "广告机背面",
    "instruction": "Show the whole kiosk back, access panels and ventilation openings.",
    "instructionZh": "拍摄广告机完整背面、检修门及通风口。",
    "group": "KC",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KC03",
    "en": "Kiosk nameplate",
    "zh": "广告机铭牌",
    "instruction": "Show the nameplate with the INF number and model clearly legible.",
    "instructionZh": "清晰拍摄铭牌上的 INF 编号及型号。",
    "group": "KC",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KC04",
    "en": "Main power distribution box",
    "zh": "主配电箱",
    "instruction": "Show the main power distribution box and its connections.",
    "instructionZh": "拍摄主配电箱及连接情况。",
    "group": "KC",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KC05",
    "en": "Reserved power strip",
    "zh": "预留电源插排",
    "instruction": "Show the reserved power strip and its mounting location.",
    "instructionZh": "拍摄预留电源插排及安装位置。",
    "group": "KC",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KC06",
    "en": "Baseplate",
    "zh": "底板",
    "instruction": "Show the baseplate and fixing points.",
    "instructionZh": "拍摄底板及固定孔位。",
    "group": "KC",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KC07",
    "en": "Cable entry holes location",
    "zh": "进线孔位置",
    "instruction": "Show each cable entry opening and its location on the kiosk.",
    "instructionZh": "拍摄各进线孔及其在广告机上的位置。",
    "group": "KC",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KC08",
    "en": "4G module",
    "zh": "4G 模块",
    "instruction": "Show the 4G module, model label and antenna connections, when included.",
    "instructionZh": "如有配置，拍摄 4G 模块、型号标签及天线连接。",
    "group": "KC",
    "applicability": {
      "requires": [
        "cellularIncluded"
      ]
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KC09",
    "en": "Touch screen module",
    "zh": "触摸屏模块",
    "instruction": "Show the touch module label and connections, when included.",
    "instructionZh": "如有配置，拍摄触摸模块标签及连接。",
    "group": "KC",
    "applicability": {
      "requires": [
        "touchIncluded"
      ]
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KC10",
    "en": "Custom items",
    "zh": "定制部件",
    "instruction": "Show the custom components specified in the approved order.",
    "instructionZh": "拍摄批准订单中指定的定制部件。",
    "group": "KC",
    "applicability": {
      "requires": [
        "customItemsIncluded"
      ]
    },
    "repeatFor": "component-type",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KD01",
    "en": "Access key",
    "zh": "检修钥匙",
    "instruction": "Show the supplied access keys together so they can be counted.",
    "instructionZh": "将所配检修钥匙集中拍摄，便于清点数量。",
    "group": "KD",
    "applicability": {
      "requires": [
        "accessKeysIncluded"
      ]
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KD02",
    "en": "Remote controller",
    "zh": "遥控器",
    "instruction": "Show the supplied remote controller and model marking.",
    "instructionZh": "拍摄所配遥控器及型号标识。",
    "group": "KD",
    "applicability": {
      "requires": [
        "remoteControllerIncluded"
      ]
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KD03",
    "en": "Remote controller batteries",
    "zh": "遥控器电池",
    "instruction": "Show the remote controller batteries and quantity.",
    "instructionZh": "拍摄遥控器电池及数量。",
    "group": "KD",
    "applicability": {
      "requires": [
        "remoteBatteriesIncluded"
      ]
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KD04",
    "en": "Air filters",
    "zh": "空气过滤网",
    "instruction": "Show the air filters supplied with the kiosk.",
    "instructionZh": "拍摄随广告机配置的空气过滤网。",
    "group": "KD",
    "applicability": {
      "requires": [
        "airFiltersIncluded"
      ]
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KX01",
    "en": "Accessories",
    "zh": "配件",
    "instruction": "Lay out the supplied accessories so each type and quantity is visible.",
    "instructionZh": "将所配附件展开摆放，显示各类型及数量。",
    "group": "KX",
    "applicability": {
      "requires": [
        "accessoriesIncluded"
      ]
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KX02",
    "en": "Spare modules",
    "zh": "备用模组",
    "instruction": "Show spare modules with their labels and quantity visible.",
    "instructionZh": "拍摄备用模组，清晰显示标签及数量。",
    "group": "KX",
    "applicability": {
      "requires": [
        "spareModulesIncluded"
      ]
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KX03",
    "en": "Spare PSUs",
    "zh": "备用电源",
    "instruction": "Show spare power supplies with model labels and quantity visible.",
    "instructionZh": "拍摄备用电源，清晰显示型号标签及数量。",
    "group": "KX",
    "applicability": {
      "requires": [
        "sparePowerSuppliesIncluded"
      ]
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KX04",
    "en": "Spare receiving cards",
    "zh": "备用接收卡",
    "instruction": "Show spare receiving cards with labels and quantity visible.",
    "instructionZh": "拍摄备用接收卡，清晰显示标签及数量。",
    "group": "KX",
    "applicability": {
      "requires": [
        "spareReceivingCardsIncluded"
      ]
    },
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KX05",
    "en": "Spare misc. items",
    "zh": "其他零星备件",
    "instruction": "Show the miscellaneous spares listed in the supplier order.",
    "instructionZh": "拍摄供应商订单中列出的零星备件。",
    "group": "KX",
    "applicability": {
      "requires": [
        "spareMiscIncluded"
      ]
    },
    "repeatFor": "component-type",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KX06",
    "en": "Other spares",
    "zh": "其他备件",
    "instruction": "Show any remaining ordered spares not covered above.",
    "instructionZh": "拍摄上述类别未涵盖的其他已订备件。",
    "group": "KX",
    "applicability": {
      "requires": [
        "otherSparesIncluded"
      ]
    },
    "repeatFor": "component-type",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KY01",
    "en": "Wooden crate material weight",
    "zh": "木箱包装材料重量",
    "instruction": "Show the empty wooden crate on the scale and record the material weight.",
    "instructionZh": "拍摄空木箱的称重读数，并记录包装材料重量。",
    "group": "KY",
    "unit": "kg",
    "measurement": {
      "key": "measuredValue",
      "type": "number",
      "unit": "kg",
      "min": 0,
      "step": "any",
      "requiredWhenApplicable": true,
      "label": {
        "en": "Measured value",
        "zh": "实测值"
      }
    },
    "repeatFor": "case",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KY02",
    "en": "Packed kiosk",
    "zh": "已包装广告机",
    "instruction": "Show the kiosk packed inside its crate, with protection visible.",
    "instructionZh": "拍摄广告机装入木箱后的状态，显示防护材料。",
    "group": "KY",
    "repeatFor": "case",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KY03",
    "en": "Mark on crate",
    "zh": "木箱唛头",
    "instruction": "Show the crate shipping mark and project identification clearly.",
    "instructionZh": "清晰拍摄木箱运输唛头及项目标识。",
    "group": "KY",
    "repeatFor": "case",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KY04",
    "en": "Spares flight case material weight",
    "zh": "备件航空箱空箱重量",
    "instruction": "Show the empty spares flight case on the scale and record its weight.",
    "instructionZh": "拍摄备件航空箱空箱称重读数，并记录重量。",
    "group": "KY",
    "unit": "kg",
    "applicability": {
      "requires": [
        "sparesFlightCaseIncluded"
      ]
    },
    "measurement": {
      "key": "measuredValue",
      "type": "number",
      "unit": "kg",
      "min": 0,
      "step": "any",
      "requiredWhenApplicable": true,
      "label": {
        "en": "Measured value",
        "zh": "实测值"
      }
    },
    "repeatFor": "case",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KY05",
    "en": "Packed spares",
    "zh": "已包装备件",
    "instruction": "Show the spares packed in their case with protective material.",
    "instructionZh": "拍摄备件装箱后的状态及防护材料。",
    "group": "KY",
    "applicability": {
      "requires": [
        "sparesIncluded"
      ]
    },
    "repeatFor": "case",
    "accepts": [
      "image"
    ],
    "multiple": true
  },
  {
    "id": "KY06",
    "en": "Mark and sticker on flight case",
    "zh": "航空箱唛头及标签",
    "instruction": "Show the shipping mark and identification stickers on the spares case.",
    "instructionZh": "拍摄备件航空箱上的运输唛头及识别标签。",
    "group": "KY",
    "applicability": {
      "requires": [
        "sparesFlightCaseIncluded"
      ]
    },
    "repeatFor": "case",
    "accepts": [
      "image"
    ],
    "multiple": true
  }
];

export const generalITPChecks: readonly ITPCheck[] = [
  {
    "id": "G-01",
    "en": "Project / customer / model information matches approved order or release record",
    "zh": "项目、客户及型号与批准订单一致",
    "sampling": "100%",
    "method": "Document cross-check",
    "criteria": "Matches approved order / release record",
    "samplingZh": "100%",
    "methodZh": "文件交叉核对",
    "criteriaZh": "与批准订单／放行记录一致"
  },
  {
    "id": "G-02",
    "en": "Product label / INF number is present, legible, and traceable",
    "zh": "产品标识及 INF 编号清晰且可追溯",
    "sampling": "100%",
    "method": "Visual check",
    "criteria": "Label present and traceable",
    "samplingZh": "100%",
    "methodZh": "目视检查",
    "criteriaZh": "标识齐全且可追溯"
  },
  {
    "id": "G-03",
    "en": "No visible damage, scratches, dents, contamination, or deformation",
    "zh": "无影响质量的外观损伤或污染",
    "sampling": "100%",
    "method": "Visual check",
    "criteria": "No abnormal visual defect affecting quality",
    "samplingZh": "100%",
    "methodZh": "目视检查",
    "criteriaZh": "无影响质量的异常外观缺陷"
  },
  {
    "id": "G-04",
    "en": "Assembly and workmanship are neat; no loose parts or abnormal gaps",
    "zh": "装配整齐，无松动或异常间隙",
    "sampling": "100%",
    "method": "Visual / hand feel",
    "criteria": "No loose parts or unacceptable workmanship issue",
    "samplingZh": "100%",
    "methodZh": "目视／手感检查",
    "criteriaZh": "无松动零件或不可接受的工艺问题"
  },
  {
    "id": "G-05",
    "en": "Unit powers on normally without abnormal alarm",
    "zh": "正常开机，无异常报警",
    "sampling": "100%",
    "method": "Power-on test",
    "criteria": "Normal start-up",
    "samplingZh": "100%",
    "methodZh": "通电测试",
    "criteriaZh": "正常启动"
  },
  {
    "id": "G-06",
    "en": "Basic functional check completed as applicable to product type",
    "zh": "适用的基本功能检查已完成",
    "sampling": "100%",
    "method": "Functional check",
    "criteria": "No abnormal function observed",
    "samplingZh": "100%",
    "methodZh": "功能检查",
    "criteriaZh": "未发现功能异常"
  },
  {
    "id": "G-07",
    "en": "Input cable / connector condition is normal and connection is secure",
    "zh": "电缆及接口完好，连接牢固",
    "sampling": "100%",
    "method": "Visual / fit check",
    "criteria": "No damage; secure connection",
    "samplingZh": "100%",
    "methodZh": "目视／装配检查",
    "criteriaZh": "无损坏；连接牢固"
  },
  {
    "id": "G-08",
    "en": "Accessories included and quantity matches packing list",
    "zh": "配件及数量与装箱单一致",
    "sampling": "100%",
    "method": "Count check",
    "criteria": "Matches packing list",
    "samplingZh": "100%",
    "methodZh": "数量核对",
    "criteriaZh": "与装箱单一致",
    "applicability": {
      "requires": [
        "accessoriesIncluded"
      ]
    }
  },
  {
    "id": "G-09",
    "en": "Spare parts included and quantity matches packing list",
    "zh": "备品及数量与装箱单一致",
    "sampling": "100%",
    "method": "Count check",
    "criteria": "Matches packing list",
    "samplingZh": "100%",
    "methodZh": "数量核对",
    "criteriaZh": "与装箱单一致",
    "applicability": {
      "requires": [
        "sparesIncluded"
      ]
    }
  },
  {
    "id": "G-10",
    "en": "Required documents / manuals / certificates are included if applicable",
    "zh": "随附所需文件、手册及证书",
    "sampling": "100%",
    "method": "Document check",
    "criteria": "Included as required",
    "samplingZh": "100%",
    "methodZh": "文件检查",
    "criteriaZh": "按要求随附"
  },
  {
    "id": "G-11",
    "en": "Packaging materials and internal protection are correct and adequate",
    "zh": "包装材料及内部防护适当",
    "sampling": "100%",
    "method": "Visual check",
    "criteria": "Adequate protection for shipment",
    "samplingZh": "100%",
    "methodZh": "目视检查",
    "criteriaZh": "提供充分的运输防护"
  },
  {
    "id": "G-12",
    "en": "Outer carton marking / shipping label is correct and legible",
    "zh": "外箱唛头及运输标签清晰正确",
    "sampling": "100%",
    "method": "Visual check",
    "criteria": "Correct and legible",
    "samplingZh": "100%",
    "methodZh": "目视检查",
    "criteriaZh": "正确且清晰可读"
  },
  {
    "id": "G-13",
    "en": "Final packing condition is complete and ready for shipment",
    "zh": "最终包装完整，可供发运",
    "sampling": "100%",
    "method": "Final visual check",
    "criteria": "Shipment-ready condition",
    "samplingZh": "100%",
    "methodZh": "最终目视检查",
    "criteriaZh": "具备发运条件"
  }
];

export const ledITPChecks: readonly ITPCheck[] = [
  {
    "id": "L-01",
    "en": "Cabinet thickness",
    "zh": "箱体厚度",
    "sampling": "Sample / per project",
    "method": "Measure with caliper",
    "criteria": "Within approved drawing / specification tolerance",
    "ref": "A07",
    "samplingZh": "抽样／按项目",
    "methodZh": "使用卡尺测量",
    "criteriaZh": "在批准图纸／规格的公差范围内"
  },
  {
    "id": "L-02",
    "en": "Module thickness",
    "zh": "模组厚度",
    "sampling": "Sample / per project",
    "method": "Measure with caliper",
    "criteria": "Within approved drawing / specification tolerance",
    "ref": "A03",
    "samplingZh": "抽样／按项目",
    "methodZh": "使用卡尺测量",
    "criteriaZh": "在批准图纸／规格的公差范围内"
  },
  {
    "id": "L-03",
    "en": "Cabinet connection method",
    "zh": "箱体连接方式",
    "sampling": "100% visual",
    "method": "Visual / assembly check",
    "criteria": "Matches approved drawing / assembly method",
    "ref": "A09",
    "samplingZh": "100% 目视检查",
    "methodZh": "目视／组装检查",
    "criteriaZh": "与批准图纸／组装方式一致"
  },
  {
    "id": "L-04",
    "en": "Cabinet weight (sample)",
    "zh": "箱体重量（抽样）",
    "sampling": "Sample / per project",
    "method": "Scale measurement",
    "criteria": "Within approved weight tolerance",
    "ref": "D01",
    "samplingZh": "抽样／按项目",
    "methodZh": "称重测量",
    "criteriaZh": "在批准重量公差范围内"
  },
  {
    "id": "L-05",
    "en": "Power consumption",
    "zh": "功耗",
    "sampling": "Sample / per project",
    "method": "Power meter test",
    "criteria": "Within approved electrical specification",
    "ref": "B06",
    "samplingZh": "抽样／按项目",
    "methodZh": "功率计测试",
    "criteriaZh": "符合批准的电气规格"
  },
  {
    "id": "L-06",
    "en": "Brightness",
    "zh": "亮度",
    "sampling": "Sample / per project",
    "method": "Brightness meter test",
    "criteria": "Meets approved product specification",
    "ref": "B07",
    "samplingZh": "抽样／按项目",
    "methodZh": "亮度计测试",
    "criteriaZh": "符合批准的产品规格"
  },
  {
    "id": "L-07",
    "en": "Refresh rate",
    "zh": "刷新率",
    "sampling": "Sample / per project",
    "method": "Controller / software confirmation",
    "criteria": "Meets approved product specification",
    "ref": "B08",
    "samplingZh": "抽样／按项目",
    "methodZh": "控制器／软件确认",
    "criteriaZh": "符合批准的产品规格"
  },
  {
    "id": "L-08",
    "en": "Sample test content playback (color / grayscale / motion / text)",
    "zh": "样片播放（色彩、灰度、动态及文字）",
    "sampling": "100% visual",
    "method": "Functional display test",
    "criteria": "Displayed normally without abnormality",
    "ref": "B01-05",
    "samplingZh": "100% 目视检查",
    "methodZh": "显示功能测试",
    "criteriaZh": "显示正常，无异常"
  },
  {
    "id": "L-09",
    "en": "Display abnormality check (flicker / line / obvious dead area / color issue)",
    "zh": "显示异常检查",
    "sampling": "100% visual",
    "method": "Visual display check",
    "criteria": "No unacceptable display abnormality",
    "ref": "",
    "samplingZh": "100% 目视检查",
    "methodZh": "显示目视检查",
    "criteriaZh": "无不可接受的显示异常"
  },
  {
    "id": "L-10",
    "en": "Burn-in inspections and incidents log",
    "zh": "模组老化检查及异常记录",
    "sampling": "100%",
    "method": "Visual check",
    "criteria": "Burn-in dated and signed",
    "ref": "",
    "samplingZh": "100%",
    "methodZh": "目视检查",
    "criteriaZh": "老化记录注明日期并签名"
  }
];

export const kioskITPChecks: readonly ITPCheck[] = [
  {
    "id": "K-01",
    "en": "Physical appearance",
    "zh": "外观",
    "sampling": "100%",
    "method": "Visual check",
    "criteria": "No visible damage, scratch, dent, or contamination beyond acceptance",
    "ref": "",
    "samplingZh": "100%",
    "methodZh": "目视检查",
    "criteriaZh": "无超出验收范围的可见损坏、划痕、凹痕或污染"
  },
  {
    "id": "K-02",
    "en": "Enclosure condition",
    "zh": "机壳状况",
    "sampling": "100% visual",
    "method": "Visual / fit check",
    "criteria": "Structure is complete without abnormal gap or deformation",
    "ref": "",
    "samplingZh": "100% 目视检查",
    "methodZh": "目视／装配检查",
    "criteriaZh": "结构完整，无异常间隙或变形"
  },
  {
    "id": "K-03",
    "en": "Machine nameplate",
    "zh": "设备铭牌",
    "sampling": "100%",
    "method": "Visual check",
    "criteria": "Present, legible, and correct",
    "ref": "KC03",
    "samplingZh": "100%",
    "methodZh": "目视检查",
    "criteriaZh": "齐全、清晰且正确"
  },
  {
    "id": "K-04",
    "en": "Door / access panel / lock condition (if applicable)",
    "zh": "检修门、面板及锁具",
    "sampling": "100% functional",
    "method": "Open-close check",
    "criteria": "Opens / closes normally and secures correctly",
    "ref": "",
    "samplingZh": "100% 功能检查",
    "methodZh": "开关检查",
    "criteriaZh": "正常开启／关闭，并能正确锁定",
    "applicability": {
      "requires": [
        "accessPanelsIncluded"
      ]
    }
  },
  {
    "id": "K-05",
    "en": "Photo evidence of key components captured and identifiable",
    "zh": "关键部件照片",
    "sampling": "Per unit / per project",
    "method": "Photo check",
    "criteria": "Required photos complete and identifiable",
    "ref": "KB04-06, KC04, KC08-10",
    "samplingZh": "按台／按项目",
    "methodZh": "照片核对",
    "criteriaZh": "所需照片齐全且可识别"
  },
  {
    "id": "K-06",
    "en": "Screen visibility",
    "zh": "屏幕可视效果",
    "sampling": "100% visual",
    "method": "Display visual check",
    "criteria": "Screen is clear, readable, and without unacceptable defect",
    "ref": "KB11",
    "samplingZh": "100% 目视检查",
    "methodZh": "显示目视检查",
    "criteriaZh": "屏幕清晰可读，无不可接受的缺陷"
  },
  {
    "id": "K-07",
    "en": "Display abnormality check (line / flicker / black spot / uneven display)",
    "zh": "显示异常检查",
    "sampling": "100% visual",
    "method": "Visual display check",
    "criteria": "No unacceptable display abnormality",
    "ref": "",
    "samplingZh": "100% 目视检查",
    "methodZh": "显示目视检查",
    "criteriaZh": "无不可接受的显示异常"
  },
  {
    "id": "K-08",
    "en": "Touch function",
    "zh": "触摸功能",
    "sampling": "100% functional",
    "method": "Touch test",
    "criteria": "Touch response is normal and accurate",
    "ref": "",
    "samplingZh": "100% 功能检查",
    "methodZh": "触摸测试",
    "criteriaZh": "触摸响应正常且准确",
    "applicability": {
      "requires": [
        "touchIncluded"
      ]
    }
  },
  {
    "id": "K-09",
    "en": "Network connectivity",
    "zh": "网络连接",
    "sampling": "100% functional",
    "method": "Network test",
    "criteria": "Network connection works normally",
    "ref": "",
    "samplingZh": "100% 功能检查",
    "methodZh": "网络测试",
    "criteriaZh": "网络连接正常",
    "applicability": {
      "requires": [
        "networkIncluded"
      ]
    }
  },
  {
    "id": "K-10",
    "en": "Reserved space for media player",
    "zh": "媒体播放器预留空间",
    "sampling": "100% visual",
    "method": "Dimension / fit check",
    "criteria": "Reserved space matches approved design intent",
    "ref": "KB07",
    "samplingZh": "100% 目视检查",
    "methodZh": "尺寸／装配检查",
    "criteriaZh": "预留空间符合批准的设计要求",
    "applicability": {
      "requires": [
        "mediaPlayerBracketIncluded"
      ]
    }
  }
];

export const ledQCGroups: readonly QCGroup[] = [
  {
    "id": "A",
    "en": "Hardware",
    "zh": "物理零部件"
  },
  {
    "id": "B",
    "en": "Display & measurements",
    "zh": "显示效果及参数"
  },
  {
    "id": "C",
    "en": "Spare parts",
    "zh": "备品明细"
  },
  {
    "id": "D",
    "en": "Packing & shipment",
    "zh": "包装发货"
  }
];

export const kioskQCGroups: readonly QCGroup[] = [
  {
    "id": "KA",
    "en": "LED display",
    "zh": "LED 显示部分"
  },
  {
    "id": "KB",
    "en": "LCD display",
    "zh": "LCD 显示部分"
  },
  {
    "id": "KC",
    "en": "Enclosure & integrations",
    "zh": "机壳及集成部件"
  },
  {
    "id": "KD",
    "en": "Kiosk accessories",
    "zh": "广告机配件"
  },
  {
    "id": "KX",
    "en": "Spares",
    "zh": "备件"
  },
  {
    "id": "KY",
    "en": "Packing",
    "zh": "包装"
  }
];

export const kioskFunctionalChecks: readonly QCFunctionalCheck[] = [
  {
    "id": "doors",
    "en": "Doors, panels & locks operate correctly",
    "zh": "检修门、面板及锁具操作正常",
    "applicability": {
      "requires": [
        "accessPanelsIncluded"
      ]
    }
  },
  {
    "id": "display",
    "en": "Display operates without abnormality",
    "zh": "显示功能正常，无异常"
  },
  {
    "id": "touch",
    "en": "Touch response is accurate",
    "zh": "触摸响应准确",
    "applicability": {
      "requires": [
        "touchIncluded"
      ]
    }
  },
  {
    "id": "network",
    "en": "Network connection works",
    "zh": "网络连接正常",
    "applicability": {
      "requires": [
        "networkIncluded"
      ]
    }
  }
];

export const qcTemplates: Readonly<Record<QCProductCategory, QCTemplate>> = {
  "led-videowall": {
    id: "led-videowall",
    title: { en: "LED Video Wall QC Report", zh: "LED 显示屏质检报告" },
    edition: "2026.11.22",
    steps: ledQCSteps,
    groups: ledQCGroups,
    generalChecks: generalITPChecks,
    categoryChecks: ledITPChecks,
    functionalChecks: [],
  },
  "digital-kiosk": {
    id: "digital-kiosk",
    title: { en: "Digital Kiosk QC Report", zh: "数字广告机质检报告" },
    edition: "2026.11.22",
    steps: kioskQCSteps,
    groups: kioskQCGroups,
    generalChecks: generalITPChecks,
    categoryChecks: kioskITPChecks,
    functionalChecks: kioskFunctionalChecks,
  },
};

/** A mixed project uses both category sections within its one project QC record. */
export function getQCTemplate(category: string): QCTemplate | undefined {
  const key = category.trim().toLowerCase().replace(/[ _]+/g, "-");
  if (["led", "led-wall", "led-video-wall", "led-videowall", "video-wall", "videowall"].includes(key)) {
    return qcTemplates["led-videowall"];
  }
  if (["kiosk", "digital-kiosk", "digital-kiosks"].includes(key)) {
    return qcTemplates["digital-kiosk"];
  }
  return undefined;
}

export const qcPhotoPageLayout = {
  orientation: "portrait",
  columns: 1,
  rows: 4,
  photosPerPage: 4,
  preserveNotApplicableSlots: true,
} as const;

/** Client ITP never embeds QC photographs, defect logs or internal observations. */
export const clientITPPolicy = {
  title: "TINNOX Inspection Test Plan",
  titleZh: "TINNOX 检验测试计划",
  sections: ["cover", "general-inspection", "applicable-product-category"],
  includePhotos: false,
  includeProjectInfoAndSignOffSection: false,
  includeInternalDefects: false,
  includeInternalRework: false,
} as const;

const scopeLabels: Record<QCScopeFlag, QCBilingualText> = {
  processorIncluded: { en: "Processor", zh: "处理器" },
  mediaPlayerBracketIncluded: { en: "Media player bracket / reserved space", zh: "媒体播放器支架／预留空间" },
  reservedHdmiIncluded: { en: "Reserved HDMI interface", zh: "预留 HDMI 接口" },
  backupHuiduPlayerIncluded: { en: "Backup Huidu media player", zh: "备用灰度媒体播放器" },
  buttonBatteriesIncluded: { en: "Button batteries", zh: "纽扣电池" },
  cellularIncluded: { en: "Cellular module", zh: "移动通信模块" },
  touchIncluded: { en: "Touch screen", zh: "触摸屏" },
  customItemsIncluded: { en: "Custom items", zh: "定制部件" },
  accessKeysIncluded: { en: "Access keys", zh: "检修钥匙" },
  remoteControllerIncluded: { en: "Remote controller", zh: "遥控器" },
  remoteBatteriesIncluded: { en: "Remote controller batteries", zh: "遥控器电池" },
  airFiltersIncluded: { en: "Air filters", zh: "空气过滤网" },
  accessoriesIncluded: { en: "Accessories", zh: "配件" },
  spareModulesIncluded: { en: "Spare modules", zh: "备用模组" },
  sparePowerSuppliesIncluded: { en: "Spare power supplies", zh: "备用电源" },
  spareReceivingCardsIncluded: { en: "Spare receiving cards", zh: "备用接收卡" },
  spareMiscIncluded: { en: "Miscellaneous spares", zh: "零星备件" },
  otherSparesIncluded: { en: "Other spares", zh: "其他备件" },
  sparesIncluded: { en: "Spare parts", zh: "备品备件" },
  sparesFlightCaseIncluded: { en: "Spares flight case", zh: "备件航空箱" },
  networkIncluded: { en: "Network connection", zh: "网络连接" },
  accessPanelsIncluded: { en: "Doors / access panels / locks", zh: "检修门／面板／锁具" },
};

/**
 * Only explicit absence in the approved supply/order scope produces default N/A.
 * Missing quote fields are unknown; spare scope comes from supplier OC, not Sales.
 */
export function resolveQCApplicability(
  item: { applicability?: QCApplicabilityRule },
  scope: QCScope = {},
): QCApplicability {
  const rule = item.applicability;
  if (!rule) return { status: "required", reason: "", reasonZh: "" };
  const missing: QCBilingualText[] = [];
  if (rule.displayTechnology) {
    if (!scope.displayTechnology) missing.push({ en: "Display technology", zh: "显示技术" });
    else if (scope.displayTechnology !== "mixed" && scope.displayTechnology !== rule.displayTechnology) {
      return {
        status: "not_applicable",
        reason: `${rule.displayTechnology.toUpperCase()} display is not included in the approved scope.`,
        reasonZh: `批准范围不包含 ${rule.displayTechnology.toUpperCase()} 显示部分。`,
      };
    }
  }
  for (const flag of rule.requires ?? []) {
    const label = scopeLabels[flag];
    if (scope[flag] === false) {
      return {
        status: "not_applicable",
        reason: `${label.en} is not included in the approved scope.`,
        reasonZh: `批准范围不包含${label.zh}。`,
      };
    }
    if (scope[flag] !== true) missing.push(label);
  }
  if (missing.length) {
    return {
      status: "review_required",
      reason: `Confirm scope: ${missing.map(label => label.en).join(", ")}.`,
      reasonZh: `请确认范围：${missing.map(label => label.zh).join("、")}。`,
    };
  }
  return { status: "required", reason: "", reasonZh: "" };
}

/** Preserve unknown flags while combining the INF scopes covered by one record. */
export function combineQCScopes(scopes: readonly QCScope[]): QCScope {
  if (!scopes.length) return {};
  const combined: QCScope = {};
  for (const key of Object.keys(scopeLabels) as QCScopeFlag[]) {
    if (scopes.some(scope => scope[key] === true)) combined[key] = true;
    else if (scopes.every(scope => scope[key] === false)) combined[key] = false;
  }
  const technologies = new Set(scopes.map(scope => scope.displayTechnology));
  if (technologies.has("mixed") || (technologies.has("led") && technologies.has("lcd"))) {
    combined.displayTechnology = "mixed";
  } else if (!technologies.has(undefined)) {
    combined.displayTechnology = scopes[0].displayTechnology;
  }
  return combined;
}

export function createQCStepState(step: QCPhotoStep, scope: QCScope = {}): QCStepState {
  const applicability = resolveQCApplicability(step, scope);
  const notApplicable = applicability.status === "not_applicable";
  return {
    stepId: step.id,
    status: notApplicable ? "N/A" : "Pending",
    attachmentIds: [],
    measuredValue: null,
    naReason: notApplicable ? `${applicability.reason} / ${applicability.reasonZh}` : "",
    naSource: notApplicable ? "scope" : null,
    skipped: false,
  };
}

/** Skipping is navigation only; it never completes an evidence step. */
export function getQCEvidenceStatus(state: QCStepState): QCEvidenceStatus {
  if (state.naSource && state.naReason.trim()) return "N/A";
  return state.attachmentIds.length ? "Uploaded" : "Pending";
}

export function isQCStepComplete(step: QCPhotoStep, state: QCStepState): boolean {
  const status = getQCEvidenceStatus(state);
  if (status === "N/A") return true;
  if (status === "Pending") return false;
  if (!step.measurement?.requiredWhenApplicable) return true;
  return typeof state.measuredValue === "number"
    && Number.isFinite(state.measuredValue)
    && state.measuredValue >= step.measurement.min;
}

/** Retains every reference, including N/A, in its original four-slot page. */
export function paginateQCPhotoSteps<T>(steps: readonly T[]): T[][] {
  const pages: T[][] = [];
  for (let index = 0; index < steps.length; index += qcPhotoPageLayout.photosPerPage) {
    pages.push(steps.slice(index, index + qcPhotoPageLayout.photosPerPage));
  }
  return pages;
}
