/** Reviewed bilingual OC templates. No historical project, person, packaging or image records are bundled. */
export type OrderConfirmationValue = string | boolean | null;
export type OrderConfirmationValues = Record<string, OrderConfirmationValue>;
export interface OrderConfirmationField {
  id: string; label: string; type: 'text' | 'checkbox' | 'image';
  rect: [number, number, number, number]; fontSize: number; align: 'left' | 'center' | 'right';
  initialValue: OrderConfirmationValue; editable: true; inherit: boolean; currentOrderOnly: boolean;
  autoKey?: string; group?: string; role?: string; multiline?: boolean; bold?: boolean; templateText?: boolean;
  imageAspectRatio?: number; imageFit?: 'contain'; imagePadding?: number;
}
export interface OrderConfirmationPage {
  id: string; title: string; width: number; height: number; image: string; fields: OrderConfirmationField[];
}
export interface OrderConfirmationTemplate {
  id: string; name: string; master: string; blank: boolean; edition: string;
  orientation: 'landscape'; paper: 'A4'; fontFamily: string; fontUrl: string;
  textColour: string; paperColour: string; logo: string;
  configurationSets: 'repeat-for-distinct-configurations'; pages: OrderConfirmationPage[];
}
export interface PreviousOrderConfirmation {
  /** Must be the most recent finalised form for this exact product line, selected by the server. */
  productLine: string; finalized: true; values: OrderConfirmationValues;
}
export type OrderConfirmationFacts = Record<string, OrderConfirmationValue | number | undefined>;
export type OrderConfirmationOrigin = 'blank' | 'template' | 'product-line-baseline' | 'previous-finalised-form' | 'current-project';

export const orderConfirmationTemplates: OrderConfirmationTemplate[] = [
  {
    "id": "precisionmicro",
    "name": "PrecisionMicro",
    "master": "LED videowall",
    "blank": false,
    "edition": "2026-11-22",
    "orientation": "landscape",
    "paper": "A4",
    "fontFamily": "SourceHelvetica, Arial, Microsoft YaHei, sans-serif",
    "fontUrl": "/templates/ocs/HelveticaNeue-source.ttf",
    "textColour": "#000000",
    "paperColour": "#FFFFFF",
    "logo": "/templates/ocs/tinnox-logo.png",
    "configurationSets": "repeat-for-distinct-configurations",
    "pages": [
      {
        "id": "page-1",
        "title": "Specifications",
        "width": 844,
        "height": 596.4,
        "image": "/templates/ocs/led-specifications.png",
        "fields": [
          {
            "id": "p1-f1",
            "label": "Module sample date / 模组首样日期",
            "type": "text",
            "rect": [
              28.67,
              118.83,
              126.89,
              140.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f2",
            "label": "Assembly start date / 组装开始日期",
            "type": "text",
            "rect": [
              127.69,
              118.7,
              225.91,
              140.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f3",
            "label": "Burn-in start date / 老化开始日期",
            "type": "text",
            "rect": [
              226.48,
              118.7,
              324.7,
              140.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f4",
            "label": "Pick-up date / 交货日期",
            "type": "text",
            "rect": [
              325.62,
              118.7,
              423.84,
              140.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f5",
            "label": "Project name / 项目名称",
            "type": "text",
            "rect": [
              571.96,
              119.04,
              711.24,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectName",
            "group": "set0-project-name"
          },
          {
            "id": "p1-f6",
            "label": "Project number / 项目编号",
            "type": "text",
            "rect": [
              712.5,
              119.04,
              809.3,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectNumber",
            "group": "project-number"
          },
          {
            "id": "p1-f7",
            "label": "Pixel pitch / 点间距",
            "type": "text",
            "rect": [
              115,
              175,
              268,
              203
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "P1.5625",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "pixelPitch"
          },
          {
            "id": "p1-f8",
            "label": "Screen dimensions / 整屏尺寸",
            "type": "text",
            "rect": [
              115,
              205,
              268,
              233
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "screenDimensions"
          },
          {
            "id": "p1-f9",
            "label": "Service method / 维护方式",
            "type": "text",
            "rect": [
              115,
              265,
              268,
              293
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "磁吸前维护",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "serviceMethod"
          },
          {
            "id": "p1-f10",
            "label": "Scan / 扫描数",
            "type": "text",
            "rect": [
              115,
              355,
              268,
              383
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "scan"
          },
          {
            "id": "p1-f11",
            "label": "Brightness / 亮度",
            "type": "text",
            "rect": [
              115,
              385,
              268,
              413
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "600nits",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "brightness"
          },
          {
            "id": "p1-f12",
            "label": "Grey scale / 灰度",
            "type": "text",
            "rect": [
              115,
              415,
              268,
              443
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "13bit",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "greyScale"
          },
          {
            "id": "p1-f13",
            "label": "Refresh rate / 刷新率",
            "type": "text",
            "rect": [
              115,
              445,
              268,
              473
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "3840",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "refreshRate"
          },
          {
            "id": "p1-f14",
            "label": "Voltage / 电压",
            "type": "text",
            "rect": [
              115,
              475,
              268,
              503
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "220-240",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "voltage"
          },
          {
            "id": "p1-f15",
            "label": "Power consumption / 功耗",
            "type": "text",
            "rect": [
              115,
              505,
              268,
              533
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "powerConsumption"
          },
          {
            "id": "p1-f16",
            "label": "Indoor",
            "type": "checkbox",
            "rect": [
              121,
              303,
              133.45,
              315.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "indoor"
          },
          {
            "id": "p1-f17",
            "label": "Outdoor",
            "type": "checkbox",
            "rect": [
              192,
              303,
              204.45,
              315.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "outdoor"
          },
          {
            "id": "p1-f18",
            "label": "Wall Mnt.",
            "type": "checkbox",
            "rect": [
              121,
              333,
              133.45,
              345.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "wallMount"
          },
          {
            "id": "p1-f19",
            "label": "Top Hung",
            "type": "checkbox",
            "rect": [
              192,
              333,
              204.45,
              345.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "topHung"
          },
          {
            "id": "p1-f20",
            "label": "Internal",
            "type": "checkbox",
            "rect": [
              121,
              543,
              133.45,
              555.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f21",
            "label": "Rental",
            "type": "checkbox",
            "rect": [
              192,
              543,
              204.45,
              555.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f22",
            "label": "Cabinet dimensions & quantity / 箱体尺寸及数量",
            "type": "text",
            "rect": [
              399.04,
              175.67,
              539.07,
              239.52
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "cabinetDimensionsQty",
            "multiline": true
          },
          {
            "id": "p1-f23",
            "label": "Cabinet IP rating / 箱体IP等级",
            "type": "text",
            "rect": [
              399.04,
              240.5,
              539.07,
              272.15
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "IP40",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "cabinetIP"
          },
          {
            "id": "p1-f24",
            "label": "Surface treatment & colour / 表面处理及颜色",
            "type": "text",
            "rect": [
              399.04,
              337.96,
              539.07,
              369.61
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "深灰色",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f25",
            "label": "Power supply model / 电源品牌型号",
            "type": "text",
            "rect": [
              399.04,
              403.22,
              539.07,
              434.88
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "创联A-200FIA-XP",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "powerSupplyModel"
          },
          {
            "id": "p1-f26",
            "label": "Power supply quantity / 电源数量",
            "type": "text",
            "rect": [
              399.04,
              435.75,
              539.07,
              467.41
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "powerSupplyQty"
          },
          {
            "id": "p1-f27",
            "label": "Receiver card model / 接收卡型号",
            "type": "text",
            "rect": [
              399.04,
              500.55,
              539.07,
              532.21
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "诺瓦Z1S",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "receiverModel"
          },
          {
            "id": "p1-f28",
            "label": "Receiver card quantity / 接收卡数量",
            "type": "text",
            "rect": [
              399.04,
              533.35,
              539.07,
              565.01
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "receiverQty"
          },
          {
            "id": "p1-f29",
            "label": "Sht. Met.",
            "type": "checkbox",
            "rect": [
              405.79,
              283,
              418.24,
              295.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f30",
            "label": "Al Profile",
            "type": "checkbox",
            "rect": [
              476.75,
              283,
              489.2,
              295.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f31",
            "label": "Al Diecast",
            "type": "checkbox",
            "rect": [
              405.79,
              314.91,
              418.24,
              327.51
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f32",
            "label": "Lock",
            "type": "checkbox",
            "rect": [
              405.79,
              380.78,
              418.24,
              393.38
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f33",
            "label": "Plate",
            "type": "checkbox",
            "rect": [
              476.75,
              380.78,
              489.2,
              393.38
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f34",
            "label": "Yes",
            "type": "checkbox",
            "rect": [
              405.79,
              477.94,
              418.24,
              490.55
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f35",
            "label": "No / 电源无CE认证",
            "type": "checkbox",
            "rect": [
              476.75,
              477.94,
              489.2,
              490.55
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f36",
            "label": "Module quantity / 模组数量",
            "type": "text",
            "rect": [
              670.01,
              175.07,
              810.03,
              206.73
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "moduleQty"
          },
          {
            "id": "p1-f37",
            "label": "Module resolution / 模组分辨率",
            "type": "text",
            "rect": [
              670.01,
              207.69,
              810.03,
              239.35
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "96x108",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "moduleResolution"
          },
          {
            "id": "p1-f38",
            "label": "Module dimensions / 模组长宽高",
            "type": "text",
            "rect": [
              670.01,
              240.31,
              810.03,
              271.97
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "150x168.75",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "moduleDimensions"
          },
          {
            "id": "p1-f39",
            "label": "Module weight / 模组重量",
            "type": "text",
            "rect": [
              670.01,
              272.51,
              810.03,
              304.17
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "140",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "moduleWeight"
          },
          {
            "id": "p1-f40",
            "label": "Frame material / 模组框架材质",
            "type": "text",
            "rect": [
              670.01,
              305.13,
              810.03,
              336.79
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "无",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f41",
            "label": "Diode model / 灯珠品牌及型号",
            "type": "text",
            "rect": [
              670.01,
              435.19,
              810.03,
              466.85
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "中麒",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "diodeModel"
          },
          {
            "id": "p1-f42",
            "label": "Driver IC model / 驱动IC型号",
            "type": "text",
            "rect": [
              670.01,
              533.06,
              810.03,
              564.71
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "ICND1065L",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "driverICModel"
          },
          {
            "id": "p1-f43",
            "label": "Magnetic",
            "type": "checkbox",
            "rect": [
              676.92,
              348.02,
              689.38,
              360.63
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f44",
            "label": "Screw",
            "type": "checkbox",
            "rect": [
              747.88,
              348.02,
              760.33,
              360.63
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f45",
            "label": "No Mask",
            "type": "checkbox",
            "rect": [
              676.92,
              379.96,
              689.38,
              392.56
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f46",
            "label": "Masked",
            "type": "checkbox",
            "rect": [
              747.88,
              379.96,
              760.33,
              392.56
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f47",
            "label": "GOB",
            "type": "checkbox",
            "rect": [
              676.92,
              412.92,
              689.38,
              425.52
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f48",
            "label": "COB",
            "type": "checkbox",
            "rect": [
              747.88,
              412.92,
              760.33,
              425.52
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f49",
            "label": "Copper",
            "type": "checkbox",
            "rect": [
              676.92,
              477.82,
              689.38,
              490.42
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f50",
            "label": "Gold",
            "type": "checkbox",
            "rect": [
              747.88,
              477.82,
              760.33,
              490.42
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f51",
            "label": "Black",
            "type": "checkbox",
            "rect": [
              676.92,
              509.96,
              689.38,
              522.56
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f52",
            "label": "White",
            "type": "checkbox",
            "rect": [
              747.88,
              509.96,
              760.33,
              522.56
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f53",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              22,
              700,
              51
            ],
            "fontSize": 16,
            "align": "left",
            "initialValue": "LED 项目订单信息确认表",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": true,
            "templateText": true
          },
          {
            "id": "p1-f54",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              49,
              700,
              66
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "LED Project Order Confirmation Sheet",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": false,
            "templateText": true
          },
          {
            "id": "p1-resolution",
            "label": "Screen resolution / 整屏分辨率",
            "type": "text",
            "rect": [
              115,
              235,
              268,
              263
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "screenResolution"
          },
          {
            "id": "p1-product-line",
            "label": "Product line / 产品系列",
            "type": "text",
            "rect": [
              205,
              67,
              390,
              81
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "PrecisionMicro",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "autoKey": "productLine",
            "templateText": true
          },
          {
            "id": "p1-inf",
            "label": "INF reference / INF编号",
            "type": "text",
            "rect": [
              395,
              67,
              811,
              81
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "infReference"
          }
        ]
      },
      {
        "id": "page-2",
        "title": "Accessories & spares",
        "width": 844,
        "height": 596.4,
        "image": "/templates/ocs/led-accessories-spares.png",
        "fields": [
          {
            "id": "p2-f1",
            "label": "Project name / 项目名称",
            "type": "text",
            "rect": [
              572.15,
              119.04,
              711.44,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectName",
            "group": "set0-project-name"
          },
          {
            "id": "p2-f2",
            "label": "Project number / 项目编号",
            "type": "text",
            "rect": [
              712.7,
              119.04,
              809.5,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectNumber",
            "group": "project-number"
          },
          {
            "id": "p2-f3",
            "label": "Sending box model / 发送盒型号",
            "type": "text",
            "rect": [
              128.51,
              110.63,
              296.78,
              141.71
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "sendingBoxModel"
          },
          {
            "id": "p2-f4",
            "label": "Video processor model / 视频处理器型号",
            "type": "text",
            "rect": [
              128.51,
              143.04,
              296.78,
              174.12
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "processorModel"
          },
          {
            "id": "p2-f5",
            "label": "Power cable specification / 主电源线规格",
            "type": "text",
            "rect": [
              128.51,
              175.89,
              296.78,
              206.97
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "2.5平方",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f6",
            "label": "Power cable length & quantity / 主电源线长度数量",
            "type": "text",
            "rect": [
              128.51,
              208.3,
              296.78,
              239.38
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f7",
            "label": "CAT6 length & quantity / 主信号线长度数量",
            "type": "text",
            "rect": [
              128.51,
              273.2,
              296.78,
              304.28
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f8",
            "label": "Cabinets per CAT6 / 单线带载箱体数",
            "type": "text",
            "rect": [
              128.51,
              305.54,
              296.78,
              336.61
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f9",
            "label": "Cabinet screws / 箱体螺丝",
            "type": "text",
            "rect": [
              128.51,
              338.39,
              296.78,
              369.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f10",
            "label": "Connecting plates / 箱体连接片",
            "type": "text",
            "rect": [
              128.51,
              370.8,
              296.78,
              401.88
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f11",
            "label": "Plate screws / 连接片螺丝",
            "type": "text",
            "rect": [
              128.51,
              403.21,
              296.78,
              434.29
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f12",
            "label": "Other accessories / 其他配件",
            "type": "text",
            "rect": [
              128.51,
              435.62,
              296.78,
              564.38
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f13",
            "label": "AU 10A",
            "type": "checkbox",
            "rect": [
              134.91,
              250.01,
              147.36,
              262.61
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f14",
            "label": "AU 15A",
            "type": "checkbox",
            "rect": [
              219.97,
              250.01,
              232.42,
              262.61
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f15",
            "label": "Spare LED modules / 备品模组",
            "type": "text",
            "rect": [
              421.16,
              143.46,
              532.61,
              174.19
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f16",
            "label": "Spare power supplies / 备品电源",
            "type": "text",
            "rect": [
              421.16,
              175.74,
              532.61,
              206.48
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f17",
            "label": "Spare receiver cards / 备品接收卡",
            "type": "text",
            "rect": [
              421.16,
              208.03,
              532.61,
              238.76
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f18",
            "label": "Spare LED diodes / 备品灯珠",
            "type": "text",
            "rect": [
              421.16,
              240.63,
              532.61,
              271.36
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f19",
            "label": "Spare driver IC / 备品驱动IC",
            "type": "text",
            "rect": [
              421.16,
              273.22,
              532.61,
              303.96
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f20",
            "label": "Spare masks & screws / 备品面罩",
            "type": "text",
            "rect": [
              421.16,
              305.51,
              532.61,
              336.24
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f21",
            "label": "Spare module flat cables / 备品模组排线",
            "type": "text",
            "rect": [
              421.16,
              338.11,
              532.61,
              368.84
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f22",
            "label": "Spare cabinet power cables / 备品电源线",
            "type": "text",
            "rect": [
              421.16,
              370.7,
              532.61,
              401.44
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f23",
            "label": "Spare cabinet data cables / 备品信号线",
            "type": "text",
            "rect": [
              421.16,
              403.61,
              532.61,
              434.34
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f24",
            "label": "Other spares / 其他备品",
            "type": "text",
            "rect": [
              421.16,
              435.88,
              532.61,
              564.2
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f25",
            "label": "Flight case dimensions / 航空箱尺寸",
            "type": "text",
            "rect": [
              643.2,
              207.95,
              754.96,
              271.31
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f26",
            "label": "Plywood box dimensions / 木箱尺寸",
            "type": "text",
            "rect": [
              643.2,
              272.88,
              754.96,
              368.9
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f27",
            "label": "Flight case quantity / 航空箱数量",
            "type": "text",
            "rect": [
              756.53,
              207.95,
              811.23,
              271.31
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f28",
            "label": "Plywood box quantity / 木箱数量",
            "type": "text",
            "rect": [
              756.53,
              273.28,
              811.23,
              368.9
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f29",
            "label": "Attention / 注意事项",
            "type": "text",
            "rect": [
              572,
              435,
              811,
              564
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "1 信号线默认使用CAT6 六类网线。\nSupply CAT6 cables unless otherwise specified.\n2 备品航空箱丝印“SPARE PARTS”。\n“SPARE PARTS” to be screen printed on the SP flight case.\n3 备品航空箱贴项目编号贴纸。\nSpare parts info sticker to be placed on the SP flight case.\n4 所有箱体内部贴参数贴纸。\nCabinet spec stickers to be placed inside every cabinet.",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "multiline": true,
            "templateText": true
          },
          {
            "id": "p2-f30",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              22,
              700,
              51
            ],
            "fontSize": 16,
            "align": "left",
            "initialValue": "LED 项目订单信息确认表",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": true,
            "templateText": true
          },
          {
            "id": "p2-f31",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              49,
              700,
              66
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "LED Project Order Confirmation Sheet",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": false,
            "templateText": true
          },
          {
            "id": "p2-product-line",
            "label": "Product line / 产品系列",
            "type": "text",
            "rect": [
              205,
              67,
              390,
              81
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "PrecisionMicro",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "autoKey": "productLine",
            "templateText": true
          },
          {
            "id": "p2-inf",
            "label": "INF reference / INF编号",
            "type": "text",
            "rect": [
              395,
              67,
              811,
              81
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "infReference"
          }
        ]
      },
      {
        "id": "page-3",
        "title": "Diagram & names",
        "width": 844,
        "height": 596.4,
        "image": "/templates/ocs/led-diagram-names.png",
        "fields": [
          {
            "id": "p3-f1",
            "label": "Project name / 项目名称",
            "type": "text",
            "rect": [
              572.96,
              119.04,
              712.24,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectName",
            "group": "set0-project-name"
          },
          {
            "id": "p3-f2",
            "label": "Cabinets wiring diagram / 箱体排列图",
            "type": "image",
            "rect": [
              30.53,
              110.85,
              537.4,
              466.62
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "multiline": true,
            "imageAspectRatio": 1.3333333333333333,
            "imageFit": "contain",
            "imagePadding": 1
          },
          {
            "id": "p3-f3",
            "label": "Notes / 备注",
            "type": "text",
            "rect": [
              572.51,
              175.68,
              810.91,
              467.07
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p3-f4",
            "label": "Project number / 项目编号",
            "type": "text",
            "rect": [
              713.5,
              119.04,
              810.3,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectNumber",
            "group": "project-number"
          },
          {
            "id": "p3-f5",
            "label": "Supplier printed name / 姓名",
            "type": "text",
            "rect": [
              171,
              501,
              280,
              531
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "supplier-name",
            "role": "supplier"
          },
          {
            "id": "p3-f6",
            "label": "Supplier printed name",
            "type": "text",
            "rect": [
              585,
              501,
              723,
              531
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "supplier-name",
            "role": "supplier"
          },
          {
            "id": "p3-f7",
            "label": "Supplier date / 日期",
            "type": "text",
            "rect": [
              727,
              501,
              810,
              531
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "supplier-date",
            "role": "supplier-date"
          },
          {
            "id": "p3-f8",
            "label": "TINNOX printed name / 姓名",
            "type": "text",
            "rect": [
              171,
              534,
              280,
              564
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "issuer-name",
            "role": "issuer"
          },
          {
            "id": "p3-f9",
            "label": "TINNOX printed name",
            "type": "text",
            "rect": [
              585,
              534,
              723,
              564
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "issuer-name",
            "role": "issuer"
          },
          {
            "id": "p3-f10",
            "label": "Issue date / 日期",
            "type": "text",
            "rect": [
              727,
              534,
              810,
              564
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "issuer-date",
            "role": "issuer-date"
          },
          {
            "id": "p3-f11",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              22,
              700,
              51
            ],
            "fontSize": 16,
            "align": "left",
            "initialValue": "LED 项目订单信息确认表",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": true,
            "templateText": true
          },
          {
            "id": "p3-f12",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              49,
              700,
              66
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "LED Project Order Confirmation Sheet",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": false,
            "templateText": true
          },
          {
            "id": "p3-product-line",
            "label": "Product line / 产品系列",
            "type": "text",
            "rect": [
              205,
              67,
              390,
              81
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "PrecisionMicro",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "autoKey": "productLine",
            "templateText": true
          },
          {
            "id": "p3-inf",
            "label": "INF reference / INF编号",
            "type": "text",
            "rect": [
              395,
              67,
              811,
              81
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "infReference"
          }
        ]
      }
    ]
  },
  {
    "id": "precisionpro",
    "name": "PrecisionPro",
    "master": "LED videowall",
    "blank": false,
    "edition": "2026-11-22",
    "orientation": "landscape",
    "paper": "A4",
    "fontFamily": "SourceHelvetica, Arial, Microsoft YaHei, sans-serif",
    "fontUrl": "/templates/ocs/HelveticaNeue-source.ttf",
    "textColour": "#000000",
    "paperColour": "#FFFFFF",
    "logo": "/templates/ocs/tinnox-logo.png",
    "configurationSets": "repeat-for-distinct-configurations",
    "pages": [
      {
        "id": "page-1",
        "title": "Specifications",
        "width": 844,
        "height": 596.4,
        "image": "/templates/ocs/led-specifications.png",
        "fields": [
          {
            "id": "p1-f1",
            "label": "Module sample date / 模组首样日期",
            "type": "text",
            "rect": [
              28.67,
              118.83,
              126.89,
              140.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f2",
            "label": "Assembly start date / 组装开始日期",
            "type": "text",
            "rect": [
              127.69,
              118.7,
              225.91,
              140.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f3",
            "label": "Burn-in start date / 老化开始日期",
            "type": "text",
            "rect": [
              226.48,
              118.7,
              324.7,
              140.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f4",
            "label": "Pick-up date / 交货日期",
            "type": "text",
            "rect": [
              325.62,
              118.7,
              423.84,
              140.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f5",
            "label": "Project name / 项目名称",
            "type": "text",
            "rect": [
              571.96,
              119.04,
              711.24,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectName",
            "group": "set0-project-name"
          },
          {
            "id": "p1-f6",
            "label": "Project number / 项目编号",
            "type": "text",
            "rect": [
              712.5,
              119.04,
              809.3,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectNumber",
            "group": "project-number"
          },
          {
            "id": "p1-f7",
            "label": "Pixel pitch / 点间距",
            "type": "text",
            "rect": [
              115,
              175,
              268,
              203
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "P2.5",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "pixelPitch"
          },
          {
            "id": "p1-f8",
            "label": "Screen dimensions / 整屏尺寸",
            "type": "text",
            "rect": [
              115,
              205,
              268,
              233
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "screenDimensions"
          },
          {
            "id": "p1-f9",
            "label": "Service method / 维护方式",
            "type": "text",
            "rect": [
              115,
              265,
              268,
              293
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "磁吸前维护",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "serviceMethod"
          },
          {
            "id": "p1-f10",
            "label": "Scan / 扫描数",
            "type": "text",
            "rect": [
              115,
              355,
              268,
              383
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "32s",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "scan"
          },
          {
            "id": "p1-f11",
            "label": "Brightness / 亮度",
            "type": "text",
            "rect": [
              115,
              385,
              268,
              413
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "500nit（做完GOB以后）",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "brightness"
          },
          {
            "id": "p1-f12",
            "label": "Grey scale / 灰度",
            "type": "text",
            "rect": [
              115,
              415,
              268,
              443
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "14bit",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "greyScale"
          },
          {
            "id": "p1-f13",
            "label": "Refresh rate / 刷新率",
            "type": "text",
            "rect": [
              115,
              445,
              268,
              473
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "3840",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "refreshRate"
          },
          {
            "id": "p1-f14",
            "label": "Voltage / 电压",
            "type": "text",
            "rect": [
              115,
              475,
              268,
              503
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "220-240",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "voltage"
          },
          {
            "id": "p1-f15",
            "label": "Power consumption / 功耗",
            "type": "text",
            "rect": [
              115,
              505,
              268,
              533
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "powerConsumption"
          },
          {
            "id": "p1-f16",
            "label": "Indoor",
            "type": "checkbox",
            "rect": [
              121,
              303,
              133.45,
              315.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "indoor"
          },
          {
            "id": "p1-f17",
            "label": "Outdoor",
            "type": "checkbox",
            "rect": [
              192,
              303,
              204.45,
              315.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "outdoor"
          },
          {
            "id": "p1-f18",
            "label": "Wall Mnt.",
            "type": "checkbox",
            "rect": [
              121,
              333,
              133.45,
              345.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "wallMount"
          },
          {
            "id": "p1-f19",
            "label": "Top Hung",
            "type": "checkbox",
            "rect": [
              192,
              333,
              204.45,
              345.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "topHung"
          },
          {
            "id": "p1-f20",
            "label": "Internal",
            "type": "checkbox",
            "rect": [
              121,
              543,
              133.45,
              555.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f21",
            "label": "Rental",
            "type": "checkbox",
            "rect": [
              192,
              543,
              204.45,
              555.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f22",
            "label": "Cabinet dimensions & quantity / 箱体尺寸及数量",
            "type": "text",
            "rect": [
              399.04,
              175.67,
              539.07,
              239.52
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "cabinetDimensionsQty",
            "multiline": true
          },
          {
            "id": "p1-f23",
            "label": "Cabinet IP rating / 箱体IP等级",
            "type": "text",
            "rect": [
              399.04,
              240.5,
              539.07,
              272.15
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "IP30",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "cabinetIP"
          },
          {
            "id": "p1-f24",
            "label": "Surface treatment & colour / 表面处理及颜色",
            "type": "text",
            "rect": [
              399.04,
              337.96,
              539.07,
              369.61
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "深灰色",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f25",
            "label": "Power supply model / 电源品牌型号",
            "type": "text",
            "rect": [
              399.04,
              403.22,
              539.07,
              434.88
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "巨能伟业",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "powerSupplyModel"
          },
          {
            "id": "p1-f26",
            "label": "Power supply quantity / 电源数量",
            "type": "text",
            "rect": [
              399.04,
              435.75,
              539.07,
              467.41
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "powerSupplyQty"
          },
          {
            "id": "p1-f27",
            "label": "Receiver card model / 接收卡型号",
            "type": "text",
            "rect": [
              399.04,
              500.55,
              539.07,
              532.21
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "诺瓦MRV412-N",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "receiverModel"
          },
          {
            "id": "p1-f28",
            "label": "Receiver card quantity / 接收卡数量",
            "type": "text",
            "rect": [
              399.04,
              533.35,
              539.07,
              565.01
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "receiverQty"
          },
          {
            "id": "p1-f29",
            "label": "Sht. Met.",
            "type": "checkbox",
            "rect": [
              405.79,
              283,
              418.24,
              295.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f30",
            "label": "Al Profile",
            "type": "checkbox",
            "rect": [
              476.75,
              283,
              489.2,
              295.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f31",
            "label": "Al Diecast",
            "type": "checkbox",
            "rect": [
              405.79,
              314.91,
              418.24,
              327.51
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f32",
            "label": "Lock",
            "type": "checkbox",
            "rect": [
              405.79,
              380.78,
              418.24,
              393.38
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f33",
            "label": "Plate",
            "type": "checkbox",
            "rect": [
              476.75,
              380.78,
              489.2,
              393.38
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f34",
            "label": "Yes",
            "type": "checkbox",
            "rect": [
              405.79,
              477.94,
              418.24,
              490.55
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f35",
            "label": "No / 电源无CE认证",
            "type": "checkbox",
            "rect": [
              476.75,
              477.94,
              489.2,
              490.55
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f36",
            "label": "Module quantity / 模组数量",
            "type": "text",
            "rect": [
              670.01,
              175.07,
              810.03,
              206.73
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "moduleQty"
          },
          {
            "id": "p1-f37",
            "label": "Module resolution / 模组分辨率",
            "type": "text",
            "rect": [
              670.01,
              207.69,
              810.03,
              239.35
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "128x64",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "moduleResolution"
          },
          {
            "id": "p1-f38",
            "label": "Module dimensions / 模组长宽高",
            "type": "text",
            "rect": [
              670.01,
              240.31,
              810.03,
              271.97
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "320x160",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "moduleDimensions"
          },
          {
            "id": "p1-f39",
            "label": "Module weight / 模组重量",
            "type": "text",
            "rect": [
              670.01,
              272.51,
              810.03,
              304.17
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "340g（G0B模组）",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "moduleWeight"
          },
          {
            "id": "p1-f40",
            "label": "Frame material / 模组框架材质",
            "type": "text",
            "rect": [
              670.01,
              305.13,
              810.03,
              336.79
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "PC+纤",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f41",
            "label": "Diode model / 灯珠品牌及型号",
            "type": "text",
            "rect": [
              670.01,
              435.19,
              810.03,
              466.85
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "晶台SMD2020",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "diodeModel"
          },
          {
            "id": "p1-f42",
            "label": "Driver IC model / 驱动IC型号",
            "type": "text",
            "rect": [
              670.01,
              533.06,
              810.03,
              564.71
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "DP3364S",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "driverICModel"
          },
          {
            "id": "p1-f43",
            "label": "Magnetic",
            "type": "checkbox",
            "rect": [
              676.92,
              348.02,
              689.38,
              360.63
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f44",
            "label": "Screw",
            "type": "checkbox",
            "rect": [
              747.88,
              348.02,
              760.33,
              360.63
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f45",
            "label": "No Mask",
            "type": "checkbox",
            "rect": [
              676.92,
              379.96,
              689.38,
              392.56
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f46",
            "label": "Masked",
            "type": "checkbox",
            "rect": [
              747.88,
              379.96,
              760.33,
              392.56
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f47",
            "label": "GOB",
            "type": "checkbox",
            "rect": [
              676.92,
              412.92,
              689.38,
              425.52
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f48",
            "label": "COB",
            "type": "checkbox",
            "rect": [
              747.88,
              412.92,
              760.33,
              425.52
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f49",
            "label": "Copper",
            "type": "checkbox",
            "rect": [
              676.92,
              477.82,
              689.38,
              490.42
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f50",
            "label": "Gold",
            "type": "checkbox",
            "rect": [
              747.88,
              477.82,
              760.33,
              490.42
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f51",
            "label": "Black",
            "type": "checkbox",
            "rect": [
              676.92,
              509.96,
              689.38,
              522.56
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f52",
            "label": "White",
            "type": "checkbox",
            "rect": [
              747.88,
              509.96,
              760.33,
              522.56
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f53",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              22,
              700,
              51
            ],
            "fontSize": 16,
            "align": "left",
            "initialValue": "LED 项目订单信息确认表",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": true,
            "templateText": true
          },
          {
            "id": "p1-f54",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              49,
              700,
              66
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "LED Project Order Confirmation Sheet",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": false,
            "templateText": true
          },
          {
            "id": "p1-resolution",
            "label": "Screen resolution / 整屏分辨率",
            "type": "text",
            "rect": [
              115,
              235,
              268,
              263
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "screenResolution"
          },
          {
            "id": "p1-product-line",
            "label": "Product line / 产品系列",
            "type": "text",
            "rect": [
              205,
              67,
              390,
              81
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "PrecisionPro",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "autoKey": "productLine",
            "templateText": true
          },
          {
            "id": "p1-inf",
            "label": "INF reference / INF编号",
            "type": "text",
            "rect": [
              395,
              67,
              811,
              81
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "infReference"
          }
        ]
      },
      {
        "id": "page-2",
        "title": "Accessories & spares",
        "width": 844,
        "height": 596.4,
        "image": "/templates/ocs/led-accessories-spares.png",
        "fields": [
          {
            "id": "p2-f1",
            "label": "Project name / 项目名称",
            "type": "text",
            "rect": [
              572.15,
              119.04,
              711.44,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectName",
            "group": "set0-project-name"
          },
          {
            "id": "p2-f2",
            "label": "Project number / 项目编号",
            "type": "text",
            "rect": [
              712.7,
              119.04,
              809.5,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectNumber",
            "group": "project-number"
          },
          {
            "id": "p2-f3",
            "label": "Sending box model / 发送盒型号",
            "type": "text",
            "rect": [
              128.51,
              110.63,
              296.78,
              141.71
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "sendingBoxModel"
          },
          {
            "id": "p2-f4",
            "label": "Video processor model / 视频处理器型号",
            "type": "text",
            "rect": [
              128.51,
              143.04,
              296.78,
              174.12
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "processorModel"
          },
          {
            "id": "p2-f5",
            "label": "Power cable specification / 主电源线规格",
            "type": "text",
            "rect": [
              128.51,
              175.89,
              296.78,
              206.97
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "2.5平方",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f6",
            "label": "Power cable length & quantity / 主电源线长度数量",
            "type": "text",
            "rect": [
              128.51,
              208.3,
              296.78,
              239.38
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f7",
            "label": "CAT6 length & quantity / 主信号线长度数量",
            "type": "text",
            "rect": [
              128.51,
              273.2,
              296.78,
              304.28
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f8",
            "label": "Cabinets per CAT6 / 单线带载箱体数",
            "type": "text",
            "rect": [
              128.51,
              305.54,
              296.78,
              336.61
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f9",
            "label": "Cabinet screws / 箱体螺丝",
            "type": "text",
            "rect": [
              128.51,
              338.39,
              296.78,
              369.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f10",
            "label": "Connecting plates / 箱体连接片",
            "type": "text",
            "rect": [
              128.51,
              370.8,
              296.78,
              401.88
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f11",
            "label": "Plate screws / 连接片螺丝",
            "type": "text",
            "rect": [
              128.51,
              403.21,
              296.78,
              434.29
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f12",
            "label": "Other accessories / 其他配件",
            "type": "text",
            "rect": [
              128.51,
              435.62,
              296.78,
              564.38
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f13",
            "label": "AU 10A",
            "type": "checkbox",
            "rect": [
              134.91,
              250.01,
              147.36,
              262.61
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f14",
            "label": "AU 15A",
            "type": "checkbox",
            "rect": [
              219.97,
              250.01,
              232.42,
              262.61
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f15",
            "label": "Spare LED modules / 备品模组",
            "type": "text",
            "rect": [
              421.16,
              143.46,
              532.61,
              174.19
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f16",
            "label": "Spare power supplies / 备品电源",
            "type": "text",
            "rect": [
              421.16,
              175.74,
              532.61,
              206.48
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f17",
            "label": "Spare receiver cards / 备品接收卡",
            "type": "text",
            "rect": [
              421.16,
              208.03,
              532.61,
              238.76
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f18",
            "label": "Spare LED diodes / 备品灯珠",
            "type": "text",
            "rect": [
              421.16,
              240.63,
              532.61,
              271.36
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f19",
            "label": "Spare driver IC / 备品驱动IC",
            "type": "text",
            "rect": [
              421.16,
              273.22,
              532.61,
              303.96
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f20",
            "label": "Spare masks & screws / 备品面罩",
            "type": "text",
            "rect": [
              421.16,
              305.51,
              532.61,
              336.24
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f21",
            "label": "Spare module flat cables / 备品模组排线",
            "type": "text",
            "rect": [
              421.16,
              338.11,
              532.61,
              368.84
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f22",
            "label": "Spare cabinet power cables / 备品电源线",
            "type": "text",
            "rect": [
              421.16,
              370.7,
              532.61,
              401.44
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f23",
            "label": "Spare cabinet data cables / 备品信号线",
            "type": "text",
            "rect": [
              421.16,
              403.61,
              532.61,
              434.34
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f24",
            "label": "Other spares / 其他备品",
            "type": "text",
            "rect": [
              421.16,
              435.88,
              532.61,
              564.2
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f25",
            "label": "Flight case dimensions / 航空箱尺寸",
            "type": "text",
            "rect": [
              643.2,
              207.95,
              754.96,
              271.31
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f26",
            "label": "Plywood box dimensions / 木箱尺寸",
            "type": "text",
            "rect": [
              643.2,
              272.88,
              754.96,
              368.9
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f27",
            "label": "Flight case quantity / 航空箱数量",
            "type": "text",
            "rect": [
              756.53,
              207.95,
              811.23,
              271.31
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f28",
            "label": "Plywood box quantity / 木箱数量",
            "type": "text",
            "rect": [
              756.53,
              273.28,
              811.23,
              368.9
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f29",
            "label": "Attention / 注意事项",
            "type": "text",
            "rect": [
              572,
              435,
              811,
              564
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "1 信号线默认使用CAT6 六类网线。\nSupply CAT6 cables unless otherwise specified.\n2 备品航空箱丝印“SPARE PARTS”。\n“SPARE PARTS” to be screen printed on the SP flight case.\n3 备品航空箱贴项目编号贴纸。\nSpare parts info sticker to be placed on the SP flight case.\n4 所有箱体内部贴参数贴纸。\nCabinet spec stickers to be placed inside every cabinet.",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "multiline": true,
            "templateText": true
          },
          {
            "id": "p2-f30",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              22,
              700,
              51
            ],
            "fontSize": 16,
            "align": "left",
            "initialValue": "LED 项目订单信息确认表",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": true,
            "templateText": true
          },
          {
            "id": "p2-f31",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              49,
              700,
              66
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "LED Project Order Confirmation Sheet",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": false,
            "templateText": true
          },
          {
            "id": "p2-product-line",
            "label": "Product line / 产品系列",
            "type": "text",
            "rect": [
              205,
              67,
              390,
              81
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "PrecisionPro",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "autoKey": "productLine",
            "templateText": true
          },
          {
            "id": "p2-inf",
            "label": "INF reference / INF编号",
            "type": "text",
            "rect": [
              395,
              67,
              811,
              81
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "infReference"
          }
        ]
      },
      {
        "id": "page-3",
        "title": "Diagram & names",
        "width": 844,
        "height": 596.4,
        "image": "/templates/ocs/led-diagram-names.png",
        "fields": [
          {
            "id": "p3-f1",
            "label": "Project name / 项目名称",
            "type": "text",
            "rect": [
              572.96,
              119.04,
              712.24,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectName",
            "group": "set0-project-name"
          },
          {
            "id": "p3-f2",
            "label": "Cabinets wiring diagram / 箱体排列图",
            "type": "image",
            "rect": [
              30.53,
              110.85,
              537.4,
              466.62
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "multiline": true,
            "imageAspectRatio": 1.3333333333333333,
            "imageFit": "contain",
            "imagePadding": 1
          },
          {
            "id": "p3-f3",
            "label": "Notes / 备注",
            "type": "text",
            "rect": [
              572.51,
              175.68,
              810.91,
              467.07
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p3-f4",
            "label": "Project number / 项目编号",
            "type": "text",
            "rect": [
              713.5,
              119.04,
              810.3,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectNumber",
            "group": "project-number"
          },
          {
            "id": "p3-f5",
            "label": "Supplier printed name / 姓名",
            "type": "text",
            "rect": [
              171,
              501,
              280,
              531
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "supplier-name",
            "role": "supplier"
          },
          {
            "id": "p3-f6",
            "label": "Supplier printed name",
            "type": "text",
            "rect": [
              585,
              501,
              723,
              531
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "supplier-name",
            "role": "supplier"
          },
          {
            "id": "p3-f7",
            "label": "Supplier date / 日期",
            "type": "text",
            "rect": [
              727,
              501,
              810,
              531
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "supplier-date",
            "role": "supplier-date"
          },
          {
            "id": "p3-f8",
            "label": "TINNOX printed name / 姓名",
            "type": "text",
            "rect": [
              171,
              534,
              280,
              564
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "issuer-name",
            "role": "issuer"
          },
          {
            "id": "p3-f9",
            "label": "TINNOX printed name",
            "type": "text",
            "rect": [
              585,
              534,
              723,
              564
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "issuer-name",
            "role": "issuer"
          },
          {
            "id": "p3-f10",
            "label": "Issue date / 日期",
            "type": "text",
            "rect": [
              727,
              534,
              810,
              564
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "issuer-date",
            "role": "issuer-date"
          },
          {
            "id": "p3-f11",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              22,
              700,
              51
            ],
            "fontSize": 16,
            "align": "left",
            "initialValue": "LED 项目订单信息确认表",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": true,
            "templateText": true
          },
          {
            "id": "p3-f12",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              49,
              700,
              66
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "LED Project Order Confirmation Sheet",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": false,
            "templateText": true
          },
          {
            "id": "p3-product-line",
            "label": "Product line / 产品系列",
            "type": "text",
            "rect": [
              205,
              67,
              390,
              81
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "PrecisionPro",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "autoKey": "productLine",
            "templateText": true
          },
          {
            "id": "p3-inf",
            "label": "INF reference / INF编号",
            "type": "text",
            "rect": [
              395,
              67,
              811,
              81
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "infReference"
          }
        ]
      }
    ]
  },
  {
    "id": "precisionluma",
    "name": "PrecisionLuma",
    "master": "LED videowall",
    "blank": true,
    "edition": "2026-11-22",
    "orientation": "landscape",
    "paper": "A4",
    "fontFamily": "SourceHelvetica, Arial, Microsoft YaHei, sans-serif",
    "fontUrl": "/templates/ocs/HelveticaNeue-source.ttf",
    "textColour": "#000000",
    "paperColour": "#FFFFFF",
    "logo": "/templates/ocs/tinnox-logo.png",
    "configurationSets": "repeat-for-distinct-configurations",
    "pages": [
      {
        "id": "page-1",
        "title": "Specifications",
        "width": 844,
        "height": 596.4,
        "image": "/templates/ocs/led-specifications.png",
        "fields": [
          {
            "id": "p1-f1",
            "label": "Module sample date / 模组首样日期",
            "type": "text",
            "rect": [
              28.67,
              118.83,
              126.89,
              140.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f2",
            "label": "Assembly start date / 组装开始日期",
            "type": "text",
            "rect": [
              127.69,
              118.7,
              225.91,
              140.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f3",
            "label": "Burn-in start date / 老化开始日期",
            "type": "text",
            "rect": [
              226.48,
              118.7,
              324.7,
              140.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f4",
            "label": "Pick-up date / 交货日期",
            "type": "text",
            "rect": [
              325.62,
              118.7,
              423.84,
              140.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f5",
            "label": "Project name / 项目名称",
            "type": "text",
            "rect": [
              571.96,
              119.04,
              711.24,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectName",
            "group": "set0-project-name"
          },
          {
            "id": "p1-f6",
            "label": "Project number / 项目编号",
            "type": "text",
            "rect": [
              712.5,
              119.04,
              809.3,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectNumber",
            "group": "project-number"
          },
          {
            "id": "p1-f7",
            "label": "Pixel pitch / 点间距",
            "type": "text",
            "rect": [
              115,
              175,
              268,
              203
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "pixelPitch"
          },
          {
            "id": "p1-f8",
            "label": "Screen dimensions / 整屏尺寸",
            "type": "text",
            "rect": [
              115,
              205,
              268,
              233
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "screenDimensions"
          },
          {
            "id": "p1-f9",
            "label": "Service method / 维护方式",
            "type": "text",
            "rect": [
              115,
              265,
              268,
              293
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "serviceMethod"
          },
          {
            "id": "p1-f10",
            "label": "Scan / 扫描数",
            "type": "text",
            "rect": [
              115,
              355,
              268,
              383
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "scan"
          },
          {
            "id": "p1-f11",
            "label": "Brightness / 亮度",
            "type": "text",
            "rect": [
              115,
              385,
              268,
              413
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "brightness"
          },
          {
            "id": "p1-f12",
            "label": "Grey scale / 灰度",
            "type": "text",
            "rect": [
              115,
              415,
              268,
              443
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "greyScale"
          },
          {
            "id": "p1-f13",
            "label": "Refresh rate / 刷新率",
            "type": "text",
            "rect": [
              115,
              445,
              268,
              473
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "refreshRate"
          },
          {
            "id": "p1-f14",
            "label": "Voltage / 电压",
            "type": "text",
            "rect": [
              115,
              475,
              268,
              503
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "voltage"
          },
          {
            "id": "p1-f15",
            "label": "Power consumption / 功耗",
            "type": "text",
            "rect": [
              115,
              505,
              268,
              533
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "powerConsumption"
          },
          {
            "id": "p1-f16",
            "label": "Indoor",
            "type": "checkbox",
            "rect": [
              121,
              303,
              133.45,
              315.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "indoor"
          },
          {
            "id": "p1-f17",
            "label": "Outdoor",
            "type": "checkbox",
            "rect": [
              192,
              303,
              204.45,
              315.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "outdoor"
          },
          {
            "id": "p1-f18",
            "label": "Wall Mnt.",
            "type": "checkbox",
            "rect": [
              121,
              333,
              133.45,
              345.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "wallMount"
          },
          {
            "id": "p1-f19",
            "label": "Top Hung",
            "type": "checkbox",
            "rect": [
              192,
              333,
              204.45,
              345.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "topHung"
          },
          {
            "id": "p1-f20",
            "label": "Internal",
            "type": "checkbox",
            "rect": [
              121,
              543,
              133.45,
              555.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f21",
            "label": "Rental",
            "type": "checkbox",
            "rect": [
              192,
              543,
              204.45,
              555.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f22",
            "label": "Cabinet dimensions & quantity / 箱体尺寸及数量",
            "type": "text",
            "rect": [
              399.04,
              175.67,
              539.07,
              239.52
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "cabinetDimensionsQty",
            "multiline": true
          },
          {
            "id": "p1-f23",
            "label": "Cabinet IP rating / 箱体IP等级",
            "type": "text",
            "rect": [
              399.04,
              240.5,
              539.07,
              272.15
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "cabinetIP"
          },
          {
            "id": "p1-f24",
            "label": "Surface treatment & colour / 表面处理及颜色",
            "type": "text",
            "rect": [
              399.04,
              337.96,
              539.07,
              369.61
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f25",
            "label": "Power supply model / 电源品牌型号",
            "type": "text",
            "rect": [
              399.04,
              403.22,
              539.07,
              434.88
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "powerSupplyModel"
          },
          {
            "id": "p1-f26",
            "label": "Power supply quantity / 电源数量",
            "type": "text",
            "rect": [
              399.04,
              435.75,
              539.07,
              467.41
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "powerSupplyQty"
          },
          {
            "id": "p1-f27",
            "label": "Receiver card model / 接收卡型号",
            "type": "text",
            "rect": [
              399.04,
              500.55,
              539.07,
              532.21
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "receiverModel"
          },
          {
            "id": "p1-f28",
            "label": "Receiver card quantity / 接收卡数量",
            "type": "text",
            "rect": [
              399.04,
              533.35,
              539.07,
              565.01
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "receiverQty"
          },
          {
            "id": "p1-f29",
            "label": "Sht. Met.",
            "type": "checkbox",
            "rect": [
              405.79,
              283,
              418.24,
              295.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f30",
            "label": "Al Profile",
            "type": "checkbox",
            "rect": [
              476.75,
              283,
              489.2,
              295.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f31",
            "label": "Al Diecast",
            "type": "checkbox",
            "rect": [
              405.79,
              314.91,
              418.24,
              327.51
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f32",
            "label": "Lock",
            "type": "checkbox",
            "rect": [
              405.79,
              380.78,
              418.24,
              393.38
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f33",
            "label": "Plate",
            "type": "checkbox",
            "rect": [
              476.75,
              380.78,
              489.2,
              393.38
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f34",
            "label": "Yes",
            "type": "checkbox",
            "rect": [
              405.79,
              477.94,
              418.24,
              490.55
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f35",
            "label": "No / 电源无CE认证",
            "type": "checkbox",
            "rect": [
              476.75,
              477.94,
              489.2,
              490.55
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f36",
            "label": "Module quantity / 模组数量",
            "type": "text",
            "rect": [
              670.01,
              175.07,
              810.03,
              206.73
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "moduleQty"
          },
          {
            "id": "p1-f37",
            "label": "Module resolution / 模组分辨率",
            "type": "text",
            "rect": [
              670.01,
              207.69,
              810.03,
              239.35
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "moduleResolution"
          },
          {
            "id": "p1-f38",
            "label": "Module dimensions / 模组长宽高",
            "type": "text",
            "rect": [
              670.01,
              240.31,
              810.03,
              271.97
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "moduleDimensions"
          },
          {
            "id": "p1-f39",
            "label": "Module weight / 模组重量",
            "type": "text",
            "rect": [
              670.01,
              272.51,
              810.03,
              304.17
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "moduleWeight"
          },
          {
            "id": "p1-f40",
            "label": "Frame material / 模组框架材质",
            "type": "text",
            "rect": [
              670.01,
              305.13,
              810.03,
              336.79
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f41",
            "label": "Diode model / 灯珠品牌及型号",
            "type": "text",
            "rect": [
              670.01,
              435.19,
              810.03,
              466.85
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "diodeModel"
          },
          {
            "id": "p1-f42",
            "label": "Driver IC model / 驱动IC型号",
            "type": "text",
            "rect": [
              670.01,
              533.06,
              810.03,
              564.71
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "driverICModel"
          },
          {
            "id": "p1-f43",
            "label": "Magnetic",
            "type": "checkbox",
            "rect": [
              676.92,
              348.02,
              689.38,
              360.63
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f44",
            "label": "Screw",
            "type": "checkbox",
            "rect": [
              747.88,
              348.02,
              760.33,
              360.63
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f45",
            "label": "No Mask",
            "type": "checkbox",
            "rect": [
              676.92,
              379.96,
              689.38,
              392.56
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f46",
            "label": "Masked",
            "type": "checkbox",
            "rect": [
              747.88,
              379.96,
              760.33,
              392.56
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f47",
            "label": "GOB",
            "type": "checkbox",
            "rect": [
              676.92,
              412.92,
              689.38,
              425.52
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f48",
            "label": "COB",
            "type": "checkbox",
            "rect": [
              747.88,
              412.92,
              760.33,
              425.52
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f49",
            "label": "Copper",
            "type": "checkbox",
            "rect": [
              676.92,
              477.82,
              689.38,
              490.42
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f50",
            "label": "Gold",
            "type": "checkbox",
            "rect": [
              747.88,
              477.82,
              760.33,
              490.42
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f51",
            "label": "Black",
            "type": "checkbox",
            "rect": [
              676.92,
              509.96,
              689.38,
              522.56
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f52",
            "label": "White",
            "type": "checkbox",
            "rect": [
              747.88,
              509.96,
              760.33,
              522.56
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f53",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              22,
              700,
              51
            ],
            "fontSize": 16,
            "align": "left",
            "initialValue": "LED 项目订单信息确认表",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": true,
            "templateText": true
          },
          {
            "id": "p1-f54",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              49,
              700,
              66
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "LED Project Order Confirmation Sheet",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": false,
            "templateText": true
          },
          {
            "id": "p1-resolution",
            "label": "Screen resolution / 整屏分辨率",
            "type": "text",
            "rect": [
              115,
              235,
              268,
              263
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "screenResolution"
          },
          {
            "id": "p1-product-line",
            "label": "Product line / 产品系列",
            "type": "text",
            "rect": [
              205,
              67,
              390,
              81
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "PrecisionLuma",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "autoKey": "productLine",
            "templateText": true
          },
          {
            "id": "p1-inf",
            "label": "INF reference / INF编号",
            "type": "text",
            "rect": [
              395,
              67,
              811,
              81
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "infReference"
          }
        ]
      },
      {
        "id": "page-2",
        "title": "Accessories & spares",
        "width": 844,
        "height": 596.4,
        "image": "/templates/ocs/led-accessories-spares.png",
        "fields": [
          {
            "id": "p2-f1",
            "label": "Project name / 项目名称",
            "type": "text",
            "rect": [
              572.15,
              119.04,
              711.44,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectName",
            "group": "set0-project-name"
          },
          {
            "id": "p2-f2",
            "label": "Project number / 项目编号",
            "type": "text",
            "rect": [
              712.7,
              119.04,
              809.5,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectNumber",
            "group": "project-number"
          },
          {
            "id": "p2-f3",
            "label": "Sending box model / 发送盒型号",
            "type": "text",
            "rect": [
              128.51,
              110.63,
              296.78,
              141.71
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "sendingBoxModel"
          },
          {
            "id": "p2-f4",
            "label": "Video processor model / 视频处理器型号",
            "type": "text",
            "rect": [
              128.51,
              143.04,
              296.78,
              174.12
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "processorModel"
          },
          {
            "id": "p2-f5",
            "label": "Power cable specification / 主电源线规格",
            "type": "text",
            "rect": [
              128.51,
              175.89,
              296.78,
              206.97
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f6",
            "label": "Power cable length & quantity / 主电源线长度数量",
            "type": "text",
            "rect": [
              128.51,
              208.3,
              296.78,
              239.38
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f7",
            "label": "CAT6 length & quantity / 主信号线长度数量",
            "type": "text",
            "rect": [
              128.51,
              273.2,
              296.78,
              304.28
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f8",
            "label": "Cabinets per CAT6 / 单线带载箱体数",
            "type": "text",
            "rect": [
              128.51,
              305.54,
              296.78,
              336.61
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f9",
            "label": "Cabinet screws / 箱体螺丝",
            "type": "text",
            "rect": [
              128.51,
              338.39,
              296.78,
              369.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f10",
            "label": "Connecting plates / 箱体连接片",
            "type": "text",
            "rect": [
              128.51,
              370.8,
              296.78,
              401.88
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f11",
            "label": "Plate screws / 连接片螺丝",
            "type": "text",
            "rect": [
              128.51,
              403.21,
              296.78,
              434.29
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f12",
            "label": "Other accessories / 其他配件",
            "type": "text",
            "rect": [
              128.51,
              435.62,
              296.78,
              564.38
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f13",
            "label": "AU 10A",
            "type": "checkbox",
            "rect": [
              134.91,
              250.01,
              147.36,
              262.61
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f14",
            "label": "AU 15A",
            "type": "checkbox",
            "rect": [
              219.97,
              250.01,
              232.42,
              262.61
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f15",
            "label": "Spare LED modules / 备品模组",
            "type": "text",
            "rect": [
              421.16,
              143.46,
              532.61,
              174.19
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f16",
            "label": "Spare power supplies / 备品电源",
            "type": "text",
            "rect": [
              421.16,
              175.74,
              532.61,
              206.48
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f17",
            "label": "Spare receiver cards / 备品接收卡",
            "type": "text",
            "rect": [
              421.16,
              208.03,
              532.61,
              238.76
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f18",
            "label": "Spare LED diodes / 备品灯珠",
            "type": "text",
            "rect": [
              421.16,
              240.63,
              532.61,
              271.36
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f19",
            "label": "Spare driver IC / 备品驱动IC",
            "type": "text",
            "rect": [
              421.16,
              273.22,
              532.61,
              303.96
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f20",
            "label": "Spare masks & screws / 备品面罩",
            "type": "text",
            "rect": [
              421.16,
              305.51,
              532.61,
              336.24
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f21",
            "label": "Spare module flat cables / 备品模组排线",
            "type": "text",
            "rect": [
              421.16,
              338.11,
              532.61,
              368.84
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f22",
            "label": "Spare cabinet power cables / 备品电源线",
            "type": "text",
            "rect": [
              421.16,
              370.7,
              532.61,
              401.44
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f23",
            "label": "Spare cabinet data cables / 备品信号线",
            "type": "text",
            "rect": [
              421.16,
              403.61,
              532.61,
              434.34
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f24",
            "label": "Other spares / 其他备品",
            "type": "text",
            "rect": [
              421.16,
              435.88,
              532.61,
              564.2
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f25",
            "label": "Flight case dimensions / 航空箱尺寸",
            "type": "text",
            "rect": [
              643.2,
              207.95,
              754.96,
              271.31
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f26",
            "label": "Plywood box dimensions / 木箱尺寸",
            "type": "text",
            "rect": [
              643.2,
              272.88,
              754.96,
              368.9
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f27",
            "label": "Flight case quantity / 航空箱数量",
            "type": "text",
            "rect": [
              756.53,
              207.95,
              811.23,
              271.31
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f28",
            "label": "Plywood box quantity / 木箱数量",
            "type": "text",
            "rect": [
              756.53,
              273.28,
              811.23,
              368.9
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f29",
            "label": "Attention / 注意事项",
            "type": "text",
            "rect": [
              572,
              435,
              811,
              564
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "1 信号线默认使用CAT6 六类网线。\nSupply CAT6 cables unless otherwise specified.\n2 备品航空箱丝印“SPARE PARTS”。\n“SPARE PARTS” to be screen printed on the SP flight case.\n3 备品航空箱贴项目编号贴纸。\nSpare parts info sticker to be placed on the SP flight case.\n4 所有箱体内部贴参数贴纸。\nCabinet spec stickers to be placed inside every cabinet.",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "multiline": true,
            "templateText": true
          },
          {
            "id": "p2-f30",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              22,
              700,
              51
            ],
            "fontSize": 16,
            "align": "left",
            "initialValue": "LED 项目订单信息确认表",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": true,
            "templateText": true
          },
          {
            "id": "p2-f31",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              49,
              700,
              66
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "LED Project Order Confirmation Sheet",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": false,
            "templateText": true
          },
          {
            "id": "p2-product-line",
            "label": "Product line / 产品系列",
            "type": "text",
            "rect": [
              205,
              67,
              390,
              81
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "PrecisionLuma",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "autoKey": "productLine",
            "templateText": true
          },
          {
            "id": "p2-inf",
            "label": "INF reference / INF编号",
            "type": "text",
            "rect": [
              395,
              67,
              811,
              81
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "infReference"
          }
        ]
      },
      {
        "id": "page-3",
        "title": "Diagram & names",
        "width": 844,
        "height": 596.4,
        "image": "/templates/ocs/led-diagram-names.png",
        "fields": [
          {
            "id": "p3-f1",
            "label": "Project name / 项目名称",
            "type": "text",
            "rect": [
              572.96,
              119.04,
              712.24,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectName",
            "group": "set0-project-name"
          },
          {
            "id": "p3-f2",
            "label": "Cabinets wiring diagram / 箱体排列图",
            "type": "image",
            "rect": [
              30.53,
              110.85,
              537.4,
              466.62
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "multiline": true,
            "imageAspectRatio": 1.3333333333333333,
            "imageFit": "contain",
            "imagePadding": 1
          },
          {
            "id": "p3-f3",
            "label": "Notes / 备注",
            "type": "text",
            "rect": [
              572.51,
              175.68,
              810.91,
              467.07
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p3-f4",
            "label": "Project number / 项目编号",
            "type": "text",
            "rect": [
              713.5,
              119.04,
              810.3,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectNumber",
            "group": "project-number"
          },
          {
            "id": "p3-f5",
            "label": "Supplier printed name / 姓名",
            "type": "text",
            "rect": [
              171,
              501,
              280,
              531
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "supplier-name",
            "role": "supplier"
          },
          {
            "id": "p3-f6",
            "label": "Supplier printed name",
            "type": "text",
            "rect": [
              585,
              501,
              723,
              531
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "supplier-name",
            "role": "supplier"
          },
          {
            "id": "p3-f7",
            "label": "Supplier date / 日期",
            "type": "text",
            "rect": [
              727,
              501,
              810,
              531
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "supplier-date",
            "role": "supplier-date"
          },
          {
            "id": "p3-f8",
            "label": "TINNOX printed name / 姓名",
            "type": "text",
            "rect": [
              171,
              534,
              280,
              564
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "issuer-name",
            "role": "issuer"
          },
          {
            "id": "p3-f9",
            "label": "TINNOX printed name",
            "type": "text",
            "rect": [
              585,
              534,
              723,
              564
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "issuer-name",
            "role": "issuer"
          },
          {
            "id": "p3-f10",
            "label": "Issue date / 日期",
            "type": "text",
            "rect": [
              727,
              534,
              810,
              564
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "issuer-date",
            "role": "issuer-date"
          },
          {
            "id": "p3-f11",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              22,
              700,
              51
            ],
            "fontSize": 16,
            "align": "left",
            "initialValue": "LED 项目订单信息确认表",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": true,
            "templateText": true
          },
          {
            "id": "p3-f12",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              49,
              700,
              66
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "LED Project Order Confirmation Sheet",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": false,
            "templateText": true
          },
          {
            "id": "p3-product-line",
            "label": "Product line / 产品系列",
            "type": "text",
            "rect": [
              205,
              67,
              390,
              81
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "PrecisionLuma",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "autoKey": "productLine",
            "templateText": true
          },
          {
            "id": "p3-inf",
            "label": "INF reference / INF编号",
            "type": "text",
            "rect": [
              395,
              67,
              811,
              81
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "infReference"
          }
        ]
      }
    ]
  },
  {
    "id": "precisionflex",
    "name": "PrecisionFlex",
    "master": "LED videowall",
    "blank": true,
    "edition": "2026-11-22",
    "orientation": "landscape",
    "paper": "A4",
    "fontFamily": "SourceHelvetica, Arial, Microsoft YaHei, sans-serif",
    "fontUrl": "/templates/ocs/HelveticaNeue-source.ttf",
    "textColour": "#000000",
    "paperColour": "#FFFFFF",
    "logo": "/templates/ocs/tinnox-logo.png",
    "configurationSets": "repeat-for-distinct-configurations",
    "pages": [
      {
        "id": "page-1",
        "title": "Specifications",
        "width": 844,
        "height": 596.4,
        "image": "/templates/ocs/led-specifications.png",
        "fields": [
          {
            "id": "p1-f1",
            "label": "Module sample date / 模组首样日期",
            "type": "text",
            "rect": [
              28.67,
              118.83,
              126.89,
              140.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f2",
            "label": "Assembly start date / 组装开始日期",
            "type": "text",
            "rect": [
              127.69,
              118.7,
              225.91,
              140.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f3",
            "label": "Burn-in start date / 老化开始日期",
            "type": "text",
            "rect": [
              226.48,
              118.7,
              324.7,
              140.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f4",
            "label": "Pick-up date / 交货日期",
            "type": "text",
            "rect": [
              325.62,
              118.7,
              423.84,
              140.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f5",
            "label": "Project name / 项目名称",
            "type": "text",
            "rect": [
              571.96,
              119.04,
              711.24,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectName",
            "group": "set0-project-name"
          },
          {
            "id": "p1-f6",
            "label": "Project number / 项目编号",
            "type": "text",
            "rect": [
              712.5,
              119.04,
              809.3,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectNumber",
            "group": "project-number"
          },
          {
            "id": "p1-f7",
            "label": "Pixel pitch / 点间距",
            "type": "text",
            "rect": [
              115,
              175,
              268,
              203
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "pixelPitch"
          },
          {
            "id": "p1-f8",
            "label": "Screen dimensions / 整屏尺寸",
            "type": "text",
            "rect": [
              115,
              205,
              268,
              233
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "screenDimensions"
          },
          {
            "id": "p1-f9",
            "label": "Service method / 维护方式",
            "type": "text",
            "rect": [
              115,
              265,
              268,
              293
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "serviceMethod"
          },
          {
            "id": "p1-f10",
            "label": "Scan / 扫描数",
            "type": "text",
            "rect": [
              115,
              355,
              268,
              383
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "scan"
          },
          {
            "id": "p1-f11",
            "label": "Brightness / 亮度",
            "type": "text",
            "rect": [
              115,
              385,
              268,
              413
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "brightness"
          },
          {
            "id": "p1-f12",
            "label": "Grey scale / 灰度",
            "type": "text",
            "rect": [
              115,
              415,
              268,
              443
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "greyScale"
          },
          {
            "id": "p1-f13",
            "label": "Refresh rate / 刷新率",
            "type": "text",
            "rect": [
              115,
              445,
              268,
              473
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "refreshRate"
          },
          {
            "id": "p1-f14",
            "label": "Voltage / 电压",
            "type": "text",
            "rect": [
              115,
              475,
              268,
              503
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "voltage"
          },
          {
            "id": "p1-f15",
            "label": "Power consumption / 功耗",
            "type": "text",
            "rect": [
              115,
              505,
              268,
              533
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "powerConsumption"
          },
          {
            "id": "p1-f16",
            "label": "Indoor",
            "type": "checkbox",
            "rect": [
              121,
              303,
              133.45,
              315.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "indoor"
          },
          {
            "id": "p1-f17",
            "label": "Outdoor",
            "type": "checkbox",
            "rect": [
              192,
              303,
              204.45,
              315.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "outdoor"
          },
          {
            "id": "p1-f18",
            "label": "Wall Mnt.",
            "type": "checkbox",
            "rect": [
              121,
              333,
              133.45,
              345.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "wallMount"
          },
          {
            "id": "p1-f19",
            "label": "Top Hung",
            "type": "checkbox",
            "rect": [
              192,
              333,
              204.45,
              345.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "topHung"
          },
          {
            "id": "p1-f20",
            "label": "Internal",
            "type": "checkbox",
            "rect": [
              121,
              543,
              133.45,
              555.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f21",
            "label": "Rental",
            "type": "checkbox",
            "rect": [
              192,
              543,
              204.45,
              555.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f22",
            "label": "Cabinet dimensions & quantity / 箱体尺寸及数量",
            "type": "text",
            "rect": [
              399.04,
              175.67,
              539.07,
              239.52
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "cabinetDimensionsQty",
            "multiline": true
          },
          {
            "id": "p1-f23",
            "label": "Cabinet IP rating / 箱体IP等级",
            "type": "text",
            "rect": [
              399.04,
              240.5,
              539.07,
              272.15
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "cabinetIP"
          },
          {
            "id": "p1-f24",
            "label": "Surface treatment & colour / 表面处理及颜色",
            "type": "text",
            "rect": [
              399.04,
              337.96,
              539.07,
              369.61
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f25",
            "label": "Power supply model / 电源品牌型号",
            "type": "text",
            "rect": [
              399.04,
              403.22,
              539.07,
              434.88
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "powerSupplyModel"
          },
          {
            "id": "p1-f26",
            "label": "Power supply quantity / 电源数量",
            "type": "text",
            "rect": [
              399.04,
              435.75,
              539.07,
              467.41
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "powerSupplyQty"
          },
          {
            "id": "p1-f27",
            "label": "Receiver card model / 接收卡型号",
            "type": "text",
            "rect": [
              399.04,
              500.55,
              539.07,
              532.21
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "receiverModel"
          },
          {
            "id": "p1-f28",
            "label": "Receiver card quantity / 接收卡数量",
            "type": "text",
            "rect": [
              399.04,
              533.35,
              539.07,
              565.01
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "receiverQty"
          },
          {
            "id": "p1-f29",
            "label": "Sht. Met.",
            "type": "checkbox",
            "rect": [
              405.79,
              283,
              418.24,
              295.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f30",
            "label": "Al Profile",
            "type": "checkbox",
            "rect": [
              476.75,
              283,
              489.2,
              295.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f31",
            "label": "Al Diecast",
            "type": "checkbox",
            "rect": [
              405.79,
              314.91,
              418.24,
              327.51
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f32",
            "label": "Lock",
            "type": "checkbox",
            "rect": [
              405.79,
              380.78,
              418.24,
              393.38
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f33",
            "label": "Plate",
            "type": "checkbox",
            "rect": [
              476.75,
              380.78,
              489.2,
              393.38
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f34",
            "label": "Yes",
            "type": "checkbox",
            "rect": [
              405.79,
              477.94,
              418.24,
              490.55
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f35",
            "label": "No / 电源无CE认证",
            "type": "checkbox",
            "rect": [
              476.75,
              477.94,
              489.2,
              490.55
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f36",
            "label": "Module quantity / 模组数量",
            "type": "text",
            "rect": [
              670.01,
              175.07,
              810.03,
              206.73
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "moduleQty"
          },
          {
            "id": "p1-f37",
            "label": "Module resolution / 模组分辨率",
            "type": "text",
            "rect": [
              670.01,
              207.69,
              810.03,
              239.35
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "moduleResolution"
          },
          {
            "id": "p1-f38",
            "label": "Module dimensions / 模组长宽高",
            "type": "text",
            "rect": [
              670.01,
              240.31,
              810.03,
              271.97
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "moduleDimensions"
          },
          {
            "id": "p1-f39",
            "label": "Module weight / 模组重量",
            "type": "text",
            "rect": [
              670.01,
              272.51,
              810.03,
              304.17
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "moduleWeight"
          },
          {
            "id": "p1-f40",
            "label": "Frame material / 模组框架材质",
            "type": "text",
            "rect": [
              670.01,
              305.13,
              810.03,
              336.79
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f41",
            "label": "Diode model / 灯珠品牌及型号",
            "type": "text",
            "rect": [
              670.01,
              435.19,
              810.03,
              466.85
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "diodeModel"
          },
          {
            "id": "p1-f42",
            "label": "Driver IC model / 驱动IC型号",
            "type": "text",
            "rect": [
              670.01,
              533.06,
              810.03,
              564.71
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "driverICModel"
          },
          {
            "id": "p1-f43",
            "label": "Magnetic",
            "type": "checkbox",
            "rect": [
              676.92,
              348.02,
              689.38,
              360.63
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f44",
            "label": "Screw",
            "type": "checkbox",
            "rect": [
              747.88,
              348.02,
              760.33,
              360.63
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f45",
            "label": "No Mask",
            "type": "checkbox",
            "rect": [
              676.92,
              379.96,
              689.38,
              392.56
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f46",
            "label": "Masked",
            "type": "checkbox",
            "rect": [
              747.88,
              379.96,
              760.33,
              392.56
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f47",
            "label": "GOB",
            "type": "checkbox",
            "rect": [
              676.92,
              412.92,
              689.38,
              425.52
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f48",
            "label": "COB",
            "type": "checkbox",
            "rect": [
              747.88,
              412.92,
              760.33,
              425.52
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f49",
            "label": "Copper",
            "type": "checkbox",
            "rect": [
              676.92,
              477.82,
              689.38,
              490.42
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f50",
            "label": "Gold",
            "type": "checkbox",
            "rect": [
              747.88,
              477.82,
              760.33,
              490.42
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f51",
            "label": "Black",
            "type": "checkbox",
            "rect": [
              676.92,
              509.96,
              689.38,
              522.56
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f52",
            "label": "White",
            "type": "checkbox",
            "rect": [
              747.88,
              509.96,
              760.33,
              522.56
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f53",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              22,
              700,
              51
            ],
            "fontSize": 16,
            "align": "left",
            "initialValue": "LED 项目订单信息确认表",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": true,
            "templateText": true
          },
          {
            "id": "p1-f54",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              49,
              700,
              66
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "LED Project Order Confirmation Sheet",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": false,
            "templateText": true
          },
          {
            "id": "p1-resolution",
            "label": "Screen resolution / 整屏分辨率",
            "type": "text",
            "rect": [
              115,
              235,
              268,
              263
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "screenResolution"
          },
          {
            "id": "p1-product-line",
            "label": "Product line / 产品系列",
            "type": "text",
            "rect": [
              205,
              67,
              390,
              81
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "PrecisionFlex",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "autoKey": "productLine",
            "templateText": true
          },
          {
            "id": "p1-inf",
            "label": "INF reference / INF编号",
            "type": "text",
            "rect": [
              395,
              67,
              811,
              81
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "infReference"
          }
        ]
      },
      {
        "id": "page-2",
        "title": "Accessories & spares",
        "width": 844,
        "height": 596.4,
        "image": "/templates/ocs/led-accessories-spares.png",
        "fields": [
          {
            "id": "p2-f1",
            "label": "Project name / 项目名称",
            "type": "text",
            "rect": [
              572.15,
              119.04,
              711.44,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectName",
            "group": "set0-project-name"
          },
          {
            "id": "p2-f2",
            "label": "Project number / 项目编号",
            "type": "text",
            "rect": [
              712.7,
              119.04,
              809.5,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectNumber",
            "group": "project-number"
          },
          {
            "id": "p2-f3",
            "label": "Sending box model / 发送盒型号",
            "type": "text",
            "rect": [
              128.51,
              110.63,
              296.78,
              141.71
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "sendingBoxModel"
          },
          {
            "id": "p2-f4",
            "label": "Video processor model / 视频处理器型号",
            "type": "text",
            "rect": [
              128.51,
              143.04,
              296.78,
              174.12
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "processorModel"
          },
          {
            "id": "p2-f5",
            "label": "Power cable specification / 主电源线规格",
            "type": "text",
            "rect": [
              128.51,
              175.89,
              296.78,
              206.97
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f6",
            "label": "Power cable length & quantity / 主电源线长度数量",
            "type": "text",
            "rect": [
              128.51,
              208.3,
              296.78,
              239.38
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f7",
            "label": "CAT6 length & quantity / 主信号线长度数量",
            "type": "text",
            "rect": [
              128.51,
              273.2,
              296.78,
              304.28
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f8",
            "label": "Cabinets per CAT6 / 单线带载箱体数",
            "type": "text",
            "rect": [
              128.51,
              305.54,
              296.78,
              336.61
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f9",
            "label": "Cabinet screws / 箱体螺丝",
            "type": "text",
            "rect": [
              128.51,
              338.39,
              296.78,
              369.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f10",
            "label": "Connecting plates / 箱体连接片",
            "type": "text",
            "rect": [
              128.51,
              370.8,
              296.78,
              401.88
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f11",
            "label": "Plate screws / 连接片螺丝",
            "type": "text",
            "rect": [
              128.51,
              403.21,
              296.78,
              434.29
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f12",
            "label": "Other accessories / 其他配件",
            "type": "text",
            "rect": [
              128.51,
              435.62,
              296.78,
              564.38
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f13",
            "label": "AU 10A",
            "type": "checkbox",
            "rect": [
              134.91,
              250.01,
              147.36,
              262.61
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f14",
            "label": "AU 15A",
            "type": "checkbox",
            "rect": [
              219.97,
              250.01,
              232.42,
              262.61
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f15",
            "label": "Spare LED modules / 备品模组",
            "type": "text",
            "rect": [
              421.16,
              143.46,
              532.61,
              174.19
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f16",
            "label": "Spare power supplies / 备品电源",
            "type": "text",
            "rect": [
              421.16,
              175.74,
              532.61,
              206.48
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f17",
            "label": "Spare receiver cards / 备品接收卡",
            "type": "text",
            "rect": [
              421.16,
              208.03,
              532.61,
              238.76
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f18",
            "label": "Spare LED diodes / 备品灯珠",
            "type": "text",
            "rect": [
              421.16,
              240.63,
              532.61,
              271.36
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f19",
            "label": "Spare driver IC / 备品驱动IC",
            "type": "text",
            "rect": [
              421.16,
              273.22,
              532.61,
              303.96
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f20",
            "label": "Spare masks & screws / 备品面罩",
            "type": "text",
            "rect": [
              421.16,
              305.51,
              532.61,
              336.24
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f21",
            "label": "Spare module flat cables / 备品模组排线",
            "type": "text",
            "rect": [
              421.16,
              338.11,
              532.61,
              368.84
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f22",
            "label": "Spare cabinet power cables / 备品电源线",
            "type": "text",
            "rect": [
              421.16,
              370.7,
              532.61,
              401.44
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f23",
            "label": "Spare cabinet data cables / 备品信号线",
            "type": "text",
            "rect": [
              421.16,
              403.61,
              532.61,
              434.34
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f24",
            "label": "Other spares / 其他备品",
            "type": "text",
            "rect": [
              421.16,
              435.88,
              532.61,
              564.2
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f25",
            "label": "Flight case dimensions / 航空箱尺寸",
            "type": "text",
            "rect": [
              643.2,
              207.95,
              754.96,
              271.31
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f26",
            "label": "Plywood box dimensions / 木箱尺寸",
            "type": "text",
            "rect": [
              643.2,
              272.88,
              754.96,
              368.9
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f27",
            "label": "Flight case quantity / 航空箱数量",
            "type": "text",
            "rect": [
              756.53,
              207.95,
              811.23,
              271.31
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f28",
            "label": "Plywood box quantity / 木箱数量",
            "type": "text",
            "rect": [
              756.53,
              273.28,
              811.23,
              368.9
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f29",
            "label": "Attention / 注意事项",
            "type": "text",
            "rect": [
              572,
              435,
              811,
              564
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "1 信号线默认使用CAT6 六类网线。\nSupply CAT6 cables unless otherwise specified.\n2 备品航空箱丝印“SPARE PARTS”。\n“SPARE PARTS” to be screen printed on the SP flight case.\n3 备品航空箱贴项目编号贴纸。\nSpare parts info sticker to be placed on the SP flight case.\n4 所有箱体内部贴参数贴纸。\nCabinet spec stickers to be placed inside every cabinet.",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "multiline": true,
            "templateText": true
          },
          {
            "id": "p2-f30",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              22,
              700,
              51
            ],
            "fontSize": 16,
            "align": "left",
            "initialValue": "LED 项目订单信息确认表",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": true,
            "templateText": true
          },
          {
            "id": "p2-f31",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              49,
              700,
              66
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "LED Project Order Confirmation Sheet",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": false,
            "templateText": true
          },
          {
            "id": "p2-product-line",
            "label": "Product line / 产品系列",
            "type": "text",
            "rect": [
              205,
              67,
              390,
              81
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "PrecisionFlex",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "autoKey": "productLine",
            "templateText": true
          },
          {
            "id": "p2-inf",
            "label": "INF reference / INF编号",
            "type": "text",
            "rect": [
              395,
              67,
              811,
              81
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "infReference"
          }
        ]
      },
      {
        "id": "page-3",
        "title": "Diagram & names",
        "width": 844,
        "height": 596.4,
        "image": "/templates/ocs/led-diagram-names.png",
        "fields": [
          {
            "id": "p3-f1",
            "label": "Project name / 项目名称",
            "type": "text",
            "rect": [
              572.96,
              119.04,
              712.24,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectName",
            "group": "set0-project-name"
          },
          {
            "id": "p3-f2",
            "label": "Cabinets wiring diagram / 箱体排列图",
            "type": "image",
            "rect": [
              30.53,
              110.85,
              537.4,
              466.62
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "multiline": true,
            "imageAspectRatio": 1.3333333333333333,
            "imageFit": "contain",
            "imagePadding": 1
          },
          {
            "id": "p3-f3",
            "label": "Notes / 备注",
            "type": "text",
            "rect": [
              572.51,
              175.68,
              810.91,
              467.07
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p3-f4",
            "label": "Project number / 项目编号",
            "type": "text",
            "rect": [
              713.5,
              119.04,
              810.3,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectNumber",
            "group": "project-number"
          },
          {
            "id": "p3-f5",
            "label": "Supplier printed name / 姓名",
            "type": "text",
            "rect": [
              171,
              501,
              280,
              531
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "supplier-name",
            "role": "supplier"
          },
          {
            "id": "p3-f6",
            "label": "Supplier printed name",
            "type": "text",
            "rect": [
              585,
              501,
              723,
              531
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "supplier-name",
            "role": "supplier"
          },
          {
            "id": "p3-f7",
            "label": "Supplier date / 日期",
            "type": "text",
            "rect": [
              727,
              501,
              810,
              531
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "supplier-date",
            "role": "supplier-date"
          },
          {
            "id": "p3-f8",
            "label": "TINNOX printed name / 姓名",
            "type": "text",
            "rect": [
              171,
              534,
              280,
              564
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "issuer-name",
            "role": "issuer"
          },
          {
            "id": "p3-f9",
            "label": "TINNOX printed name",
            "type": "text",
            "rect": [
              585,
              534,
              723,
              564
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "issuer-name",
            "role": "issuer"
          },
          {
            "id": "p3-f10",
            "label": "Issue date / 日期",
            "type": "text",
            "rect": [
              727,
              534,
              810,
              564
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "issuer-date",
            "role": "issuer-date"
          },
          {
            "id": "p3-f11",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              22,
              700,
              51
            ],
            "fontSize": 16,
            "align": "left",
            "initialValue": "LED 项目订单信息确认表",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": true,
            "templateText": true
          },
          {
            "id": "p3-f12",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              49,
              700,
              66
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "LED Project Order Confirmation Sheet",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": false,
            "templateText": true
          },
          {
            "id": "p3-product-line",
            "label": "Product line / 产品系列",
            "type": "text",
            "rect": [
              205,
              67,
              390,
              81
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "PrecisionFlex",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "autoKey": "productLine",
            "templateText": true
          },
          {
            "id": "p3-inf",
            "label": "INF reference / INF编号",
            "type": "text",
            "rect": [
              395,
              67,
              811,
              81
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "infReference"
          }
        ]
      }
    ]
  },
  {
    "id": "durablaze",
    "name": "DuraBlaze",
    "master": "LED videowall",
    "blank": false,
    "edition": "2026-11-22",
    "orientation": "landscape",
    "paper": "A4",
    "fontFamily": "SourceHelvetica, Arial, Microsoft YaHei, sans-serif",
    "fontUrl": "/templates/ocs/HelveticaNeue-source.ttf",
    "textColour": "#000000",
    "paperColour": "#FFFFFF",
    "logo": "/templates/ocs/tinnox-logo.png",
    "configurationSets": "repeat-for-distinct-configurations",
    "pages": [
      {
        "id": "page-1",
        "title": "Specifications",
        "width": 844,
        "height": 596.4,
        "image": "/templates/ocs/led-specifications.png",
        "fields": [
          {
            "id": "p1-f1",
            "label": "Module sample date / 模组首样日期",
            "type": "text",
            "rect": [
              28.67,
              118.83,
              126.89,
              140.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f2",
            "label": "Assembly start date / 组装开始日期",
            "type": "text",
            "rect": [
              127.69,
              118.7,
              225.91,
              140.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f3",
            "label": "Burn-in start date / 老化开始日期",
            "type": "text",
            "rect": [
              226.48,
              118.7,
              324.7,
              140.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f4",
            "label": "Pick-up date / 交货日期",
            "type": "text",
            "rect": [
              325.62,
              118.7,
              423.84,
              140.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f5",
            "label": "Project name / 项目名称",
            "type": "text",
            "rect": [
              571.96,
              119.04,
              711.24,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectName",
            "group": "set0-project-name"
          },
          {
            "id": "p1-f6",
            "label": "Project number / 项目编号",
            "type": "text",
            "rect": [
              712.5,
              119.04,
              809.3,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectNumber",
            "group": "project-number"
          },
          {
            "id": "p1-f7",
            "label": "Pixel pitch / 点间距",
            "type": "text",
            "rect": [
              115,
              175,
              268,
              203
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "P4. 44",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "pixelPitch"
          },
          {
            "id": "p1-f8",
            "label": "Screen dimensions / 整屏尺寸",
            "type": "text",
            "rect": [
              115,
              205,
              268,
              233
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "screenDimensions"
          },
          {
            "id": "p1-f9",
            "label": "Service method / 维护方式",
            "type": "text",
            "rect": [
              115,
              265,
              268,
              293
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "前维护",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "serviceMethod"
          },
          {
            "id": "p1-f10",
            "label": "Scan / 扫描数",
            "type": "text",
            "rect": [
              115,
              355,
              268,
              383
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "9s",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "scan"
          },
          {
            "id": "p1-f11",
            "label": "Brightness / 亮度",
            "type": "text",
            "rect": [
              115,
              385,
              268,
              413
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "6000nits",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "brightness"
          },
          {
            "id": "p1-f12",
            "label": "Grey scale / 灰度",
            "type": "text",
            "rect": [
              115,
              415,
              268,
              443
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "16bit",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "greyScale"
          },
          {
            "id": "p1-f13",
            "label": "Refresh rate / 刷新率",
            "type": "text",
            "rect": [
              115,
              445,
              268,
              473
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "7680",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "refreshRate"
          },
          {
            "id": "p1-f14",
            "label": "Voltage / 电压",
            "type": "text",
            "rect": [
              115,
              475,
              268,
              503
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "220-240",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "voltage"
          },
          {
            "id": "p1-f15",
            "label": "Power consumption / 功耗",
            "type": "text",
            "rect": [
              115,
              505,
              268,
              533
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "powerConsumption"
          },
          {
            "id": "p1-f16",
            "label": "Indoor",
            "type": "checkbox",
            "rect": [
              121,
              303,
              133.45,
              315.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "indoor"
          },
          {
            "id": "p1-f17",
            "label": "Outdoor",
            "type": "checkbox",
            "rect": [
              192,
              303,
              204.45,
              315.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "outdoor"
          },
          {
            "id": "p1-f18",
            "label": "Wall Mnt.",
            "type": "checkbox",
            "rect": [
              121,
              333,
              133.45,
              345.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "wallMount"
          },
          {
            "id": "p1-f19",
            "label": "Top Hung",
            "type": "checkbox",
            "rect": [
              192,
              333,
              204.45,
              345.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "topHung"
          },
          {
            "id": "p1-f20",
            "label": "Internal",
            "type": "checkbox",
            "rect": [
              121,
              543,
              133.45,
              555.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f21",
            "label": "Rental",
            "type": "checkbox",
            "rect": [
              192,
              543,
              204.45,
              555.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f22",
            "label": "Cabinet dimensions & quantity / 箱体尺寸及数量",
            "type": "text",
            "rect": [
              399.04,
              175.67,
              539.07,
              239.52
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "cabinetDimensionsQty",
            "multiline": true
          },
          {
            "id": "p1-f23",
            "label": "Cabinet IP rating / 箱体IP等级",
            "type": "text",
            "rect": [
              399.04,
              240.5,
              539.07,
              272.15
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "IP66",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "cabinetIP"
          },
          {
            "id": "p1-f24",
            "label": "Surface treatment & colour / 表面处理及颜色",
            "type": "text",
            "rect": [
              399.04,
              337.96,
              539.07,
              369.61
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "白色",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f25",
            "label": "Power supply model / 电源品牌型号",
            "type": "text",
            "rect": [
              399.04,
              403.22,
              539.07,
              434.88
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "行修",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "powerSupplyModel"
          },
          {
            "id": "p1-f26",
            "label": "Power supply quantity / 电源数量",
            "type": "text",
            "rect": [
              399.04,
              435.75,
              539.07,
              467.41
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "powerSupplyQty"
          },
          {
            "id": "p1-f27",
            "label": "Receiver card model / 接收卡型号",
            "type": "text",
            "rect": [
              399.04,
              500.55,
              539.07,
              532.21
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "诺瓦A5SPLUS",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "receiverModel"
          },
          {
            "id": "p1-f28",
            "label": "Receiver card quantity / 接收卡数量",
            "type": "text",
            "rect": [
              399.04,
              533.35,
              539.07,
              565.01
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "receiverQty"
          },
          {
            "id": "p1-f29",
            "label": "Sht. Met.",
            "type": "checkbox",
            "rect": [
              405.79,
              283,
              418.24,
              295.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f30",
            "label": "Al Profile",
            "type": "checkbox",
            "rect": [
              476.75,
              283,
              489.2,
              295.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f31",
            "label": "Al Diecast",
            "type": "checkbox",
            "rect": [
              405.79,
              314.91,
              418.24,
              327.51
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f32",
            "label": "Lock",
            "type": "checkbox",
            "rect": [
              405.79,
              380.78,
              418.24,
              393.38
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f33",
            "label": "Plate",
            "type": "checkbox",
            "rect": [
              476.75,
              380.78,
              489.2,
              393.38
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f34",
            "label": "Yes",
            "type": "checkbox",
            "rect": [
              405.79,
              477.94,
              418.24,
              490.55
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f35",
            "label": "No / 电源无CE认证",
            "type": "checkbox",
            "rect": [
              476.75,
              477.94,
              489.2,
              490.55
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f36",
            "label": "Module quantity / 模组数量",
            "type": "text",
            "rect": [
              670.01,
              175.07,
              810.03,
              206.73
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "moduleQty"
          },
          {
            "id": "p1-f37",
            "label": "Module resolution / 模组分辨率",
            "type": "text",
            "rect": [
              670.01,
              207.69,
              810.03,
              239.35
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "108x72",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "moduleResolution"
          },
          {
            "id": "p1-f38",
            "label": "Module dimensions / 模组长宽高",
            "type": "text",
            "rect": [
              670.01,
              240.31,
              810.03,
              271.97
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "480x320x24",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "moduleDimensions"
          },
          {
            "id": "p1-f39",
            "label": "Module weight / 模组重量",
            "type": "text",
            "rect": [
              670.01,
              272.51,
              810.03,
              304.17
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "2.3kg",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "moduleWeight"
          },
          {
            "id": "p1-f40",
            "label": "Frame material / 模组框架材质",
            "type": "text",
            "rect": [
              670.01,
              305.13,
              810.03,
              336.79
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "铝底壳",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f41",
            "label": "Diode model / 灯珠品牌及型号",
            "type": "text",
            "rect": [
              670.01,
              435.19,
              810.03,
              466.85
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "国星1921",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "diodeModel"
          },
          {
            "id": "p1-f42",
            "label": "Driver IC model / 驱动IC型号",
            "type": "text",
            "rect": [
              670.01,
              533.06,
              810.03,
              564.71
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "driverICModel"
          },
          {
            "id": "p1-f43",
            "label": "Magnetic",
            "type": "checkbox",
            "rect": [
              676.92,
              348.02,
              689.38,
              360.63
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f44",
            "label": "Screw",
            "type": "checkbox",
            "rect": [
              747.88,
              348.02,
              760.33,
              360.63
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f45",
            "label": "No Mask",
            "type": "checkbox",
            "rect": [
              676.92,
              379.96,
              689.38,
              392.56
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f46",
            "label": "Masked",
            "type": "checkbox",
            "rect": [
              747.88,
              379.96,
              760.33,
              392.56
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f47",
            "label": "GOB",
            "type": "checkbox",
            "rect": [
              676.92,
              412.92,
              689.38,
              425.52
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f48",
            "label": "COB",
            "type": "checkbox",
            "rect": [
              747.88,
              412.92,
              760.33,
              425.52
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f49",
            "label": "Copper",
            "type": "checkbox",
            "rect": [
              676.92,
              477.82,
              689.38,
              490.42
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f50",
            "label": "Gold",
            "type": "checkbox",
            "rect": [
              747.88,
              477.82,
              760.33,
              490.42
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f51",
            "label": "Black",
            "type": "checkbox",
            "rect": [
              676.92,
              509.96,
              689.38,
              522.56
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f52",
            "label": "White",
            "type": "checkbox",
            "rect": [
              747.88,
              509.96,
              760.33,
              522.56
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f53",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              22,
              700,
              51
            ],
            "fontSize": 16,
            "align": "left",
            "initialValue": "LED 项目订单信息确认表",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": true,
            "templateText": true
          },
          {
            "id": "p1-f54",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              49,
              700,
              66
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "LED Project Order Confirmation Sheet",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": false,
            "templateText": true
          },
          {
            "id": "p1-resolution",
            "label": "Screen resolution / 整屏分辨率",
            "type": "text",
            "rect": [
              115,
              235,
              268,
              263
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "screenResolution"
          },
          {
            "id": "p1-product-line",
            "label": "Product line / 产品系列",
            "type": "text",
            "rect": [
              205,
              67,
              390,
              81
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "DuraBlaze",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "autoKey": "productLine",
            "templateText": true
          },
          {
            "id": "p1-inf",
            "label": "INF reference / INF编号",
            "type": "text",
            "rect": [
              395,
              67,
              811,
              81
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "infReference"
          }
        ]
      },
      {
        "id": "page-2",
        "title": "Accessories & spares",
        "width": 844,
        "height": 596.4,
        "image": "/templates/ocs/led-accessories-spares.png",
        "fields": [
          {
            "id": "p2-f1",
            "label": "Project name / 项目名称",
            "type": "text",
            "rect": [
              572.15,
              119.04,
              711.44,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectName",
            "group": "set0-project-name"
          },
          {
            "id": "p2-f2",
            "label": "Project number / 项目编号",
            "type": "text",
            "rect": [
              712.7,
              119.04,
              809.5,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectNumber",
            "group": "project-number"
          },
          {
            "id": "p2-f3",
            "label": "Sending box model / 发送盒型号",
            "type": "text",
            "rect": [
              128.51,
              110.63,
              296.78,
              141.71
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "sendingBoxModel"
          },
          {
            "id": "p2-f4",
            "label": "Video processor model / 视频处理器型号",
            "type": "text",
            "rect": [
              128.51,
              143.04,
              296.78,
              174.12
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "processorModel"
          },
          {
            "id": "p2-f5",
            "label": "Power cable specification / 主电源线规格",
            "type": "text",
            "rect": [
              128.51,
              175.89,
              296.78,
              206.97
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "4平方",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f6",
            "label": "Power cable length & quantity / 主电源线长度数量",
            "type": "text",
            "rect": [
              128.51,
              208.3,
              296.78,
              239.38
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f7",
            "label": "CAT6 length & quantity / 主信号线长度数量",
            "type": "text",
            "rect": [
              128.51,
              273.2,
              296.78,
              304.28
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f8",
            "label": "Cabinets per CAT6 / 单线带载箱体数",
            "type": "text",
            "rect": [
              128.51,
              305.54,
              296.78,
              336.61
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f9",
            "label": "Cabinet screws / 箱体螺丝",
            "type": "text",
            "rect": [
              128.51,
              338.39,
              296.78,
              369.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f10",
            "label": "Connecting plates / 箱体连接片",
            "type": "text",
            "rect": [
              128.51,
              370.8,
              296.78,
              401.88
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f11",
            "label": "Plate screws / 连接片螺丝",
            "type": "text",
            "rect": [
              128.51,
              403.21,
              296.78,
              434.29
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f12",
            "label": "Other accessories / 其他配件",
            "type": "text",
            "rect": [
              128.51,
              435.62,
              296.78,
              564.38
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f13",
            "label": "AU 10A",
            "type": "checkbox",
            "rect": [
              134.91,
              250.01,
              147.36,
              262.61
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f14",
            "label": "AU 15A",
            "type": "checkbox",
            "rect": [
              219.97,
              250.01,
              232.42,
              262.61
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f15",
            "label": "Spare LED modules / 备品模组",
            "type": "text",
            "rect": [
              421.16,
              143.46,
              532.61,
              174.19
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f16",
            "label": "Spare power supplies / 备品电源",
            "type": "text",
            "rect": [
              421.16,
              175.74,
              532.61,
              206.48
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f17",
            "label": "Spare receiver cards / 备品接收卡",
            "type": "text",
            "rect": [
              421.16,
              208.03,
              532.61,
              238.76
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f18",
            "label": "Spare LED diodes / 备品灯珠",
            "type": "text",
            "rect": [
              421.16,
              240.63,
              532.61,
              271.36
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f19",
            "label": "Spare driver IC / 备品驱动IC",
            "type": "text",
            "rect": [
              421.16,
              273.22,
              532.61,
              303.96
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f20",
            "label": "Spare masks & screws / 备品面罩",
            "type": "text",
            "rect": [
              421.16,
              305.51,
              532.61,
              336.24
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f21",
            "label": "Spare module flat cables / 备品模组排线",
            "type": "text",
            "rect": [
              421.16,
              338.11,
              532.61,
              368.84
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f22",
            "label": "Spare cabinet power cables / 备品电源线",
            "type": "text",
            "rect": [
              421.16,
              370.7,
              532.61,
              401.44
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f23",
            "label": "Spare cabinet data cables / 备品信号线",
            "type": "text",
            "rect": [
              421.16,
              403.61,
              532.61,
              434.34
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f24",
            "label": "Other spares / 其他备品",
            "type": "text",
            "rect": [
              421.16,
              435.88,
              532.61,
              564.2
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f25",
            "label": "Flight case dimensions / 航空箱尺寸",
            "type": "text",
            "rect": [
              643.2,
              207.95,
              754.96,
              271.31
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f26",
            "label": "Plywood box dimensions / 木箱尺寸",
            "type": "text",
            "rect": [
              643.2,
              272.88,
              754.96,
              368.9
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f27",
            "label": "Flight case quantity / 航空箱数量",
            "type": "text",
            "rect": [
              756.53,
              207.95,
              811.23,
              271.31
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f28",
            "label": "Plywood box quantity / 木箱数量",
            "type": "text",
            "rect": [
              756.53,
              273.28,
              811.23,
              368.9
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f29",
            "label": "Attention / 注意事项",
            "type": "text",
            "rect": [
              572,
              435,
              811,
              564
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "1 信号线默认使用CAT6 六类网线。\nSupply CAT6 cables unless otherwise specified.\n2 备品航空箱丝印“SPARE PARTS”。\n“SPARE PARTS” to be screen printed on the SP flight case.\n3 备品航空箱贴项目编号贴纸。\nSpare parts info sticker to be placed on the SP flight case.\n4 所有箱体内部贴参数贴纸。\nCabinet spec stickers to be placed inside every cabinet.",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "multiline": true,
            "templateText": true
          },
          {
            "id": "p2-f30",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              22,
              700,
              51
            ],
            "fontSize": 16,
            "align": "left",
            "initialValue": "LED 项目订单信息确认表",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": true,
            "templateText": true
          },
          {
            "id": "p2-f31",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              49,
              700,
              66
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "LED Project Order Confirmation Sheet",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": false,
            "templateText": true
          },
          {
            "id": "p2-product-line",
            "label": "Product line / 产品系列",
            "type": "text",
            "rect": [
              205,
              67,
              390,
              81
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "DuraBlaze",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "autoKey": "productLine",
            "templateText": true
          },
          {
            "id": "p2-inf",
            "label": "INF reference / INF编号",
            "type": "text",
            "rect": [
              395,
              67,
              811,
              81
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "infReference"
          }
        ]
      },
      {
        "id": "page-3",
        "title": "Diagram & names",
        "width": 844,
        "height": 596.4,
        "image": "/templates/ocs/led-diagram-names.png",
        "fields": [
          {
            "id": "p3-f1",
            "label": "Project name / 项目名称",
            "type": "text",
            "rect": [
              572.96,
              119.04,
              712.24,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectName",
            "group": "set0-project-name"
          },
          {
            "id": "p3-f2",
            "label": "Cabinets wiring diagram / 箱体排列图",
            "type": "image",
            "rect": [
              30.53,
              110.85,
              537.4,
              466.62
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "multiline": true,
            "imageAspectRatio": 1.3333333333333333,
            "imageFit": "contain",
            "imagePadding": 1
          },
          {
            "id": "p3-f3",
            "label": "Notes / 备注",
            "type": "text",
            "rect": [
              572.51,
              175.68,
              810.91,
              467.07
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p3-f4",
            "label": "Project number / 项目编号",
            "type": "text",
            "rect": [
              713.5,
              119.04,
              810.3,
              139.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectNumber",
            "group": "project-number"
          },
          {
            "id": "p3-f5",
            "label": "Supplier printed name / 姓名",
            "type": "text",
            "rect": [
              171,
              501,
              280,
              531
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "supplier-name",
            "role": "supplier"
          },
          {
            "id": "p3-f6",
            "label": "Supplier printed name",
            "type": "text",
            "rect": [
              585,
              501,
              723,
              531
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "supplier-name",
            "role": "supplier"
          },
          {
            "id": "p3-f7",
            "label": "Supplier date / 日期",
            "type": "text",
            "rect": [
              727,
              501,
              810,
              531
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "supplier-date",
            "role": "supplier-date"
          },
          {
            "id": "p3-f8",
            "label": "TINNOX printed name / 姓名",
            "type": "text",
            "rect": [
              171,
              534,
              280,
              564
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "issuer-name",
            "role": "issuer"
          },
          {
            "id": "p3-f9",
            "label": "TINNOX printed name",
            "type": "text",
            "rect": [
              585,
              534,
              723,
              564
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "issuer-name",
            "role": "issuer"
          },
          {
            "id": "p3-f10",
            "label": "Issue date / 日期",
            "type": "text",
            "rect": [
              727,
              534,
              810,
              564
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "issuer-date",
            "role": "issuer-date"
          },
          {
            "id": "p3-f11",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              22,
              700,
              51
            ],
            "fontSize": 16,
            "align": "left",
            "initialValue": "LED 项目订单信息确认表",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": true,
            "templateText": true
          },
          {
            "id": "p3-f12",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              49,
              700,
              66
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "LED Project Order Confirmation Sheet",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": false,
            "templateText": true
          },
          {
            "id": "p3-product-line",
            "label": "Product line / 产品系列",
            "type": "text",
            "rect": [
              205,
              67,
              390,
              81
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "DuraBlaze",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "autoKey": "productLine",
            "templateText": true
          },
          {
            "id": "p3-inf",
            "label": "INF reference / INF编号",
            "type": "text",
            "rect": [
              395,
              67,
              811,
              81
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "infReference"
          }
        ]
      }
    ]
  },
  {
    "id": "structurasign",
    "name": "StructuraSign",
    "master": "StructuraSign",
    "blank": false,
    "edition": "2026-11-22",
    "orientation": "landscape",
    "paper": "A4",
    "fontFamily": "SourceHelvetica, Arial, Microsoft YaHei, sans-serif",
    "fontUrl": "/templates/ocs/HelveticaNeue-source.ttf",
    "textColour": "#000000",
    "paperColour": "#FFFFFF",
    "logo": "/templates/ocs/tinnox-logo.png",
    "configurationSets": "repeat-for-distinct-configurations",
    "pages": [
      {
        "id": "page-1",
        "title": "Appearance & dimensions",
        "width": 844,
        "height": 596.4,
        "image": "/templates/ocs/structurasign-appearance.png",
        "fields": [
          {
            "id": "p1-f1",
            "label": "Assembly finish date / 组装完成日期",
            "type": "text",
            "rect": [
              28.67,
              117.7,
              126.89,
              139.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f2",
            "label": "Burn-in start date / 老化开始日期",
            "type": "text",
            "rect": [
              127.99,
              117.7,
              226.21,
              139.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f3",
            "label": "Pick-up date / 交货日期",
            "type": "text",
            "rect": [
              227.3,
              117.7,
              325.53,
              139.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f4",
            "label": "Warehouse cutoff date / 截仓日期",
            "type": "text",
            "rect": [
              326.62,
              117.7,
              424.84,
              139.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f5",
            "label": "Project name / 项目名称",
            "type": "text",
            "rect": [
              572.96,
              118.04,
              712.24,
              138.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectName",
            "group": "set0-project-name"
          },
          {
            "id": "p1-f6",
            "label": "Project number / 项目编号",
            "type": "text",
            "rect": [
              713.5,
              118.04,
              810.3,
              138.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectNumber",
            "group": "project-number"
          },
          {
            "id": "p1-f7",
            "label": "Appearance / 外观",
            "type": "image",
            "rect": [
              28.21,
              173.74,
              269.12,
              499.51
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "multiline": true,
            "imageAspectRatio": 1.3333333333333333,
            "imageFit": "contain",
            "imagePadding": 1
          },
          {
            "id": "p1-f8",
            "label": "Critical dimensions / 关键尺寸图",
            "type": "image",
            "rect": [
              300.15,
              173.84,
              813.53,
              467.73
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "multiline": true,
            "imageAspectRatio": 1.3333333333333333,
            "imageFit": "contain",
            "imagePadding": 1
          },
          {
            "id": "p1-f9",
            "label": "Printed Logo",
            "type": "checkbox",
            "rect": [
              329.76,
              542.93,
              342.45,
              555.62
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f10",
            "label": "Touch Screen",
            "type": "checkbox",
            "rect": [
              403.79,
              542.93,
              416.48,
              555.62
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f11",
            "label": "Glass Panel",
            "type": "checkbox",
            "rect": [
              476.65,
              542.93,
              489.34,
              555.62
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f12",
            "label": "Mounting Bracket",
            "type": "checkbox",
            "rect": [
              549.63,
              542.93,
              562.32,
              555.62
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f13",
            "label": "Ad. Media Player",
            "type": "checkbox",
            "rect": [
              623.55,
              542.93,
              636.24,
              555.62
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f14",
            "label": "4G Module",
            "type": "checkbox",
            "rect": [
              696.65,
              542.93,
              709.34,
              555.62
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f15",
            "label": "4G Module",
            "type": "checkbox",
            "rect": [
              770.68,
              542.93,
              783.37,
              555.62
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f16",
            "label": "Colour code / 机壳色号",
            "type": "text",
            "rect": [
              114.65,
              533.02,
              268.17,
              564.25
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "RAL 7043",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "colourCode"
          },
          {
            "id": "p1-f17",
            "label": "Order quantity / 订单数量",
            "type": "text",
            "rect": [
              114.65,
              500.58,
              268.17,
              531.81
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "orderQty"
          },
          {
            "id": "p1-f18",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              22,
              700,
              51
            ],
            "fontSize": 16,
            "align": "left",
            "initialValue": "LED 整机订单信息确认表",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": true,
            "templateText": true
          },
          {
            "id": "p1-f19",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              49,
              700,
              66
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "LED Kiosk Order Confirmation Sheet",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": false,
            "templateText": true
          },
          {
            "id": "p1-product-line",
            "label": "Product line / 产品系列",
            "type": "text",
            "rect": [
              205,
              67,
              390,
              81
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "StructuraSign",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "autoKey": "productLine",
            "templateText": true
          },
          {
            "id": "p1-inf",
            "label": "INF reference / INF编号",
            "type": "text",
            "rect": [
              395,
              67,
              811,
              81
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "infReference"
          }
        ]
      },
      {
        "id": "page-2",
        "title": "Specifications & spares",
        "width": 844,
        "height": 596.4,
        "image": "/templates/ocs/structurasign-specifications.png",
        "fields": [
          {
            "id": "p2-f1",
            "label": "Project name / 项目名称",
            "type": "text",
            "rect": [
              572.96,
              118.04,
              712.24,
              138.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectName",
            "group": "set0-project-name"
          },
          {
            "id": "p2-f2",
            "label": "Project number / 项目编号",
            "type": "text",
            "rect": [
              713.5,
              118.04,
              810.3,
              138.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectNumber",
            "group": "project-number"
          },
          {
            "id": "p2-f3",
            "label": "Pixel pitch / 点间距",
            "type": "text",
            "rect": [
              128.2,
              108.77,
              268.71,
              140.9
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "P4.8",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "pixelPitch"
          },
          {
            "id": "p2-f4",
            "label": "Screen dimensions / 整屏尺寸",
            "type": "text",
            "rect": [
              128.2,
              141.39,
              268.71,
              173.52
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "screenDimensions"
          },
          {
            "id": "p2-f5",
            "label": "Screen resolution / 整屏分辨率",
            "type": "text",
            "rect": [
              128.2,
              174.01,
              268.71,
              206.13
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "screenResolution"
          },
          {
            "id": "p2-f6",
            "label": "Power consumption / 功耗",
            "type": "text",
            "rect": [
              128.2,
              206.62,
              268.71,
              238.75
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "powerConsumption"
          },
          {
            "id": "p2-f7",
            "label": "Power supply model / 电源品牌型号",
            "type": "text",
            "rect": [
              128.2,
              239.24,
              268.71,
              271.36
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "明纬LRS-350-5",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "powerSupplyModel"
          },
          {
            "id": "p2-f8",
            "label": "Power supply quantity / 电源数量",
            "type": "text",
            "rect": [
              128.2,
              271.85,
              268.71,
              303.98
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "powerSupplyQty"
          },
          {
            "id": "p2-f9",
            "label": "Receiver card model / 接收卡型号",
            "type": "text",
            "rect": [
              128.2,
              337,
              268.71,
              369.13
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "诺瓦DH7516-S",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "receiverModel"
          },
          {
            "id": "p2-f10",
            "label": "Receiver card quantity / 接收卡数量",
            "type": "text",
            "rect": [
              128.2,
              369.46,
              268.71,
              401.59
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "receiverQty"
          },
          {
            "id": "p2-f11",
            "label": "Sending box model / 发送盒型号",
            "type": "text",
            "rect": [
              128.2,
              401.93,
              268.71,
              434.05
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "sendingBoxModel"
          },
          {
            "id": "p2-f12",
            "label": "Power cable specification / 主电源线规格",
            "type": "text",
            "rect": [
              128.2,
              467.83,
              268.71,
              499.95
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "2.5平方单相",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f13",
            "label": "CAT6 quantity / 信号线数量",
            "type": "text",
            "rect": [
              128.2,
              500.29,
              268.71,
              532.41
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f14",
            "label": "Casing IP rating / 机壳IP等级",
            "type": "text",
            "rect": [
              128.2,
              532.75,
              268.71,
              564.88
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "IP67",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f15",
            "label": "Yes",
            "type": "checkbox",
            "rect": [
              134.94,
              314.96,
              147.39,
              327.56
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f16",
            "label": "Diode Model",
            "type": "checkbox",
            "rect": [
              205.9,
              314.96,
              218.35,
              327.56
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f17",
            "label": "Internal",
            "type": "checkbox",
            "rect": [
              134.94,
              445.12,
              147.39,
              457.72
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f18",
            "label": "External",
            "type": "checkbox",
            "rect": [
              205.9,
              445.12,
              218.35,
              457.72
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f19",
            "label": "Module quantity / 模组数量",
            "type": "text",
            "rect": [
              399.88,
              108.77,
              540.39,
              140.9
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "moduleQty"
          },
          {
            "id": "p2-f20",
            "label": "Module resolution / 模组分辨率",
            "type": "text",
            "rect": [
              399.88,
              174.01,
              540.39,
              206.13
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "52 x 52",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "moduleResolution"
          },
          {
            "id": "p2-f21",
            "label": "Module dimensions / 模组长宽高",
            "type": "text",
            "rect": [
              399.88,
              141.39,
              540.39,
              173.52
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "250 x 250",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "moduleDimensions"
          },
          {
            "id": "p2-f22",
            "label": "Diode model / 灯珠品牌及型号",
            "type": "text",
            "rect": [
              399.88,
              304.46,
              540.39,
              336.59
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "国星SMD1921",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "diodeModel"
          },
          {
            "id": "p2-f23",
            "label": "Driver IC model / 驱动IC型号",
            "type": "text",
            "rect": [
              399.88,
              402.14,
              540.39,
              434.27
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "driverICModel"
          },
          {
            "id": "p2-f24",
            "label": "Scan / 扫描数",
            "type": "text",
            "rect": [
              399.88,
              434.85,
              540.39,
              466.97
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "6s/7s",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "scan"
          },
          {
            "id": "p2-f25",
            "label": "Brightness / 亮度",
            "type": "text",
            "rect": [
              399.88,
              467.55,
              540.39,
              499.67
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "6000 nits",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "brightness"
          },
          {
            "id": "p2-f26",
            "label": "Grey scale / 灰度",
            "type": "text",
            "rect": [
              399.88,
              500.25,
              540.39,
              532.38
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "16bit",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "greyScale"
          },
          {
            "id": "p2-f27",
            "label": "Refresh rate / 刷新率",
            "type": "text",
            "rect": [
              399.88,
              532.95,
              540.39,
              565.08
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "3840",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "refreshRate"
          },
          {
            "id": "p2-f28",
            "label": "Magnetic",
            "type": "checkbox",
            "rect": [
              407.01,
              216.96,
              419.46,
              229.56
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f29",
            "label": "Screw",
            "type": "checkbox",
            "rect": [
              477.97,
              216.96,
              490.42,
              229.56
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f30",
            "label": "Copper",
            "type": "checkbox",
            "rect": [
              407.01,
              346.97,
              419.46,
              359.57
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f31",
            "label": "Gold",
            "type": "checkbox",
            "rect": [
              477.97,
              346.97,
              490.42,
              359.57
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f32",
            "label": "Black",
            "type": "checkbox",
            "rect": [
              407.01,
              380.11,
              419.46,
              392.72
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f33",
            "label": "White",
            "type": "checkbox",
            "rect": [
              477.97,
              380.11,
              490.42,
              392.72
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f34",
            "label": "No Mask",
            "type": "checkbox",
            "rect": [
              406.88,
              250.11,
              419.33,
              262.72
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f35",
            "label": "Masked",
            "type": "checkbox",
            "rect": [
              477.84,
              250.11,
              490.29,
              262.72
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f36",
            "label": "GOB",
            "type": "checkbox",
            "rect": [
              406.88,
              281.97,
              419.33,
              294.57
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f37",
            "label": "COB",
            "type": "checkbox",
            "rect": [
              477.84,
              281.97,
              490.29,
              294.57
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f38",
            "label": "Spare LED modules / 备品模组",
            "type": "text",
            "rect": [
              671.61,
              206.22,
              812.12,
              238.35
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f39",
            "label": "Spare power supplies / 备品电源",
            "type": "text",
            "rect": [
              671.61,
              238.78,
              812.12,
              270.91
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f40",
            "label": "Spare receiver cards / 备品接收卡",
            "type": "text",
            "rect": [
              671.61,
              271.35,
              812.12,
              303.47
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f41",
            "label": "Spare LED diodes / 备品灯珠",
            "type": "text",
            "rect": [
              671.61,
              303.91,
              812.12,
              336.04
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f42",
            "label": "Spare driver IC / 备品驱动IC",
            "type": "text",
            "rect": [
              671.61,
              336.47,
              812.12,
              368.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f43",
            "label": "Spare module flat cables / 备品模组排线",
            "type": "text",
            "rect": [
              671.61,
              369.04,
              812.12,
              401.16
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f44",
            "label": "Spare module power cables / 备品模组电源线",
            "type": "text",
            "rect": [
              671.61,
              401.6,
              812.12,
              433.73
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f45",
            "label": "Other spares / 其他备品",
            "type": "text",
            "rect": [
              671.73,
              434.92,
              812.24,
              565.04
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f46",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              22,
              700,
              51
            ],
            "fontSize": 16,
            "align": "left",
            "initialValue": "LED 整机订单信息确认表",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": true,
            "templateText": true
          },
          {
            "id": "p2-f47",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              49,
              700,
              66
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "LED Kiosk Order Confirmation Sheet",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": false,
            "templateText": true
          },
          {
            "id": "p2-product-line",
            "label": "Product line / 产品系列",
            "type": "text",
            "rect": [
              205,
              67,
              390,
              81
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "StructuraSign",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "autoKey": "productLine",
            "templateText": true
          },
          {
            "id": "p2-inf",
            "label": "INF reference / INF编号",
            "type": "text",
            "rect": [
              395,
              67,
              811,
              81
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "infReference"
          }
        ]
      },
      {
        "id": "page-3",
        "title": "Packaging & names",
        "width": 844,
        "height": 632.4,
        "image": "/templates/ocs/structurasign-packaging.png",
        "fields": [
          {
            "id": "p3-f1",
            "label": "Project name / 项目名称",
            "type": "text",
            "rect": [
              572.96,
              136.04,
              712.24,
              156.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectName",
            "group": "set0-project-name"
          },
          {
            "id": "p3-f2",
            "label": "Project number / 项目编号",
            "type": "text",
            "rect": [
              713.5,
              136.04,
              810.3,
              156.45
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectNumber",
            "group": "project-number"
          },
          {
            "id": "p3-f3",
            "label": "Cable entry location / 进线孔位置图",
            "type": "image",
            "rect": [
              28.15,
              126.65,
              297.82,
              485.35
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "multiline": true,
            "imageAspectRatio": 1.3333333333333333,
            "imageFit": "contain",
            "imagePadding": 1
          },
          {
            "id": "p3-f4",
            "label": "Flight case dimensions / 航空箱尺寸",
            "type": "text",
            "rect": [
              379.31,
              160.12,
              491.29,
              190.86
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p3-f5",
            "label": "Flight case weight / 航空箱重量",
            "type": "text",
            "rect": [
              492.47,
              160.12,
              533.73,
              190.86
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p3-f6",
            "label": "Crate 1 dimensions / 木箱1尺寸",
            "type": "text",
            "rect": [
              379.31,
              192.64,
              491.29,
              223.38
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p3-f7",
            "label": "Crate 1 weight / 木箱1重量",
            "type": "text",
            "rect": [
              492.47,
              192.64,
              533.73,
              223.38
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p3-f8",
            "label": "Crate 2 dimensions / 木箱2尺寸",
            "type": "text",
            "rect": [
              379.31,
              225.16,
              491.29,
              255.89
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p3-f9",
            "label": "Crate 2 weight / 木箱2重量",
            "type": "text",
            "rect": [
              492.47,
              225.16,
              533.73,
              255.89
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p3-f10",
            "label": "Crate 3 dimensions / 木箱3尺寸",
            "type": "text",
            "rect": [
              379.31,
              257.95,
              491.29,
              288.68
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p3-f11",
            "label": "Crate 3 weight / 木箱3重量",
            "type": "text",
            "rect": [
              492.47,
              257.95,
              533.73,
              288.68
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p3-f12",
            "label": "Crate 4 dimensions / 木箱4尺寸",
            "type": "text",
            "rect": [
              379.31,
              290.46,
              491.29,
              321.2
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p3-f13",
            "label": "Crate 4 weight / 木箱4重量",
            "type": "text",
            "rect": [
              492.47,
              290.46,
              533.73,
              321.2
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p3-f14",
            "label": "Accessories / 配件清单",
            "type": "text",
            "rect": [
              336.21,
              356.01,
              533.39,
              485.07
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p3-f15",
            "label": "Notes / 备注",
            "type": "text",
            "rect": [
              572.51,
              193.68,
              810.91,
              485.07
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p3-f16",
            "label": "Supplier printed name / 姓名",
            "type": "text",
            "rect": [
              171,
              522,
              280,
              552
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "supplier-name",
            "role": "supplier"
          },
          {
            "id": "p3-f17",
            "label": "Supplier printed name",
            "type": "text",
            "rect": [
              585,
              522,
              723,
              552
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "supplier-name",
            "role": "supplier"
          },
          {
            "id": "p3-f18",
            "label": "Supplier date / 日期",
            "type": "text",
            "rect": [
              727,
              522,
              810,
              552
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "supplier-date",
            "role": "supplier-date"
          },
          {
            "id": "p3-f19",
            "label": "TINNOX printed name / 姓名",
            "type": "text",
            "rect": [
              171,
              555,
              280,
              585
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "issuer-name",
            "role": "issuer"
          },
          {
            "id": "p3-f20",
            "label": "TINNOX printed name",
            "type": "text",
            "rect": [
              585,
              555,
              723,
              585
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "issuer-name",
            "role": "issuer"
          },
          {
            "id": "p3-f21",
            "label": "Issue date / 日期",
            "type": "text",
            "rect": [
              727,
              555,
              810,
              585
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "issuer-date",
            "role": "issuer-date"
          },
          {
            "id": "p3-f22",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              22,
              700,
              51
            ],
            "fontSize": 16,
            "align": "left",
            "initialValue": "LED 整机订单信息确认表",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": true,
            "templateText": true
          },
          {
            "id": "p3-f23",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              49,
              700,
              66
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "LED Kiosk Order Confirmation Sheet",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": false,
            "templateText": true
          },
          {
            "id": "p3-product-line",
            "label": "Product line / 产品系列",
            "type": "text",
            "rect": [
              205,
              67,
              390,
              81
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "StructuraSign",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "autoKey": "productLine",
            "templateText": true
          },
          {
            "id": "p3-inf",
            "label": "INF reference / INF编号",
            "type": "text",
            "rect": [
              395,
              67,
              811,
              81
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "infReference"
          }
        ]
      }
    ]
  },
  {
    "id": "digital-kiosk",
    "name": "Digital kiosk",
    "master": "Digital kiosk",
    "blank": false,
    "edition": "2026-11-22",
    "orientation": "landscape",
    "paper": "A4",
    "fontFamily": "SourceHelvetica, Arial, Microsoft YaHei, sans-serif",
    "fontUrl": "/templates/ocs/HelveticaNeue-source.ttf",
    "textColour": "#000000",
    "paperColour": "#FFFFFF",
    "logo": "/templates/ocs/tinnox-logo.png",
    "configurationSets": "repeat-for-distinct-configurations",
    "pages": [
      {
        "id": "page-1",
        "title": "Appearance & dimensions",
        "width": 844,
        "height": 596.4,
        "image": "/templates/ocs/digital-kiosk-appearance.png",
        "fields": [
          {
            "id": "p1-f1",
            "label": "Assembly finish date / 组装完成日期",
            "type": "text",
            "rect": [
              28,
              118,
              126,
              140
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f2",
            "label": "Pick-up date / 交货日期",
            "type": "text",
            "rect": [
              128,
              118,
              226,
              140
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f3",
            "label": "Warehouse cutoff date / 截仓日期",
            "type": "text",
            "rect": [
              228,
              118,
              326,
              140
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true
          },
          {
            "id": "p1-f4",
            "label": "Appearance / 外观",
            "type": "image",
            "rect": [
              29,
              176,
              268,
              466
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "imageAspectRatio": 1.3333333333333333,
            "imageFit": "contain",
            "imagePadding": 1
          },
          {
            "id": "p1-f5",
            "label": "Critical dimensions / 关键尺寸图",
            "type": "image",
            "rect": [
              302,
              176,
              812,
              466
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "imageAspectRatio": 1.3333333333333333,
            "imageFit": "contain",
            "imagePadding": 1
          },
          {
            "id": "p1-f6",
            "label": "Order quantity / 订单数量",
            "type": "text",
            "rect": [
              115,
              468,
              268,
              499
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "orderQty"
          },
          {
            "id": "p1-f7",
            "label": "Colour code / 机壳色号",
            "type": "text",
            "rect": [
              115,
              534,
              268,
              565
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "RAL7043",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "colourCode"
          },
          {
            "id": "p1-f8",
            "label": "Indoor / 户内",
            "type": "checkbox",
            "rect": [
              121,
              509,
              134,
              522
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "indoor"
          },
          {
            "id": "p1-f9",
            "label": "Outdoor / 户外",
            "type": "checkbox",
            "rect": [
              191,
              509,
              204,
              522
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": true,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "autoKey": "outdoor"
          },
          {
            "id": "p1-f10",
            "label": "Kiosk colour / 机壳颜色",
            "type": "checkbox",
            "rect": [
              330,
              544,
              343,
              557
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f11",
            "label": "Printed logo / 丝印Logo",
            "type": "checkbox",
            "rect": [
              403.7,
              544,
              416.7,
              557
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f12",
            "label": "Touch screen / 触屏功能",
            "type": "checkbox",
            "rect": [
              477.4,
              544,
              490.4,
              557
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "touchScreen"
          },
          {
            "id": "p1-f13",
            "label": "Anti-glare glass / AG玻璃",
            "type": "checkbox",
            "rect": [
              551.1,
              544,
              564.1,
              557
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "antiGlare"
          },
          {
            "id": "p1-f14",
            "label": "External media player / 外接播放盒",
            "type": "checkbox",
            "rect": [
              624.8,
              544,
              637.8,
              557
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "externalMediaPlayer"
          },
          {
            "id": "p1-f15",
            "label": "LCD brightness / LCD亮度",
            "type": "checkbox",
            "rect": [
              698.5,
              544,
              711.5,
              557
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": false,
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p1-f16",
            "label": "4G module / 4G模块",
            "type": "checkbox",
            "rect": [
              772.2,
              544,
              785.2,
              557
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": null,
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "fourGModule"
          },
          {
            "id": "p1-f17",
            "label": "Project name / 项目名称",
            "type": "text",
            "rect": [
              574,
              119,
              712,
              140
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectName",
            "group": "set0-project-name"
          },
          {
            "id": "p1-f18",
            "label": "Project number / 项目编号",
            "type": "text",
            "rect": [
              714,
              119,
              812,
              140
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectNumber",
            "group": "project-number"
          },
          {
            "id": "p1-f19",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              22,
              700,
              51
            ],
            "fontSize": 16,
            "align": "left",
            "initialValue": "LCD 整机订单信息确认表",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": true,
            "templateText": true
          },
          {
            "id": "p1-f20",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              49,
              700,
              66
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "LCD Kiosk Order Confirmation Sheet",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": false,
            "templateText": true
          },
          {
            "id": "p1-overall-dimensions",
            "label": "Overall dimensions / 整体尺寸",
            "type": "text",
            "rect": [
              441,
              87,
              547,
              112
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "overallDimensions"
          },
          {
            "id": "p1-screen-resolution",
            "label": "Screen resolution / 屏幕分辨率",
            "type": "text",
            "rect": [
              441,
              114,
              547,
              139
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "screenResolution"
          },
          {
            "id": "p1-product-line",
            "label": "Product line / 产品系列",
            "type": "text",
            "rect": [
              205,
              67,
              390,
              81
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "Digital kiosk",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "autoKey": "productLine",
            "templateText": true
          },
          {
            "id": "p1-inf",
            "label": "INF reference / INF编号",
            "type": "text",
            "rect": [
              395,
              67,
              811,
              81
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "infReference"
          }
        ]
      },
      {
        "id": "page-2",
        "title": "Packaging & names",
        "width": 844,
        "height": 596.4,
        "image": "/templates/ocs/digital-kiosk-packaging.png",
        "fields": [
          {
            "id": "p2-f1",
            "label": "Cable entry location / 进线孔位置图",
            "type": "image",
            "rect": [
              29,
              110,
              297,
              467
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "imageAspectRatio": 1.3333333333333333,
            "imageFit": "contain",
            "imagePadding": 1
          },
          {
            "id": "p2-f2",
            "label": "Crate 1 Dimensions / 尺寸",
            "type": "text",
            "rect": [
              380,
              143,
              490,
              174
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f3",
            "label": "Crate 1 Weight / 重量",
            "type": "text",
            "rect": [
              493,
              143,
              535,
              174
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f4",
            "label": "Crate 2 Dimensions / 尺寸",
            "type": "text",
            "rect": [
              380,
              175.6,
              490,
              206.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f5",
            "label": "Crate 2 Weight / 重量",
            "type": "text",
            "rect": [
              493,
              175.6,
              535,
              206.6
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f6",
            "label": "Crate 3 Dimensions / 尺寸",
            "type": "text",
            "rect": [
              380,
              208.2,
              490,
              239.2
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f7",
            "label": "Crate 3 Weight / 重量",
            "type": "text",
            "rect": [
              493,
              208.2,
              535,
              239.2
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f8",
            "label": "Crate 4 Dimensions / 尺寸",
            "type": "text",
            "rect": [
              380,
              240.8,
              490,
              271.8
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f9",
            "label": "Crate 4 Weight / 重量",
            "type": "text",
            "rect": [
              493,
              240.8,
              535,
              271.8
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f10",
            "label": "Crate 5 Dimensions / 尺寸",
            "type": "text",
            "rect": [
              380,
              273.4,
              490,
              304.4
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f11",
            "label": "Crate 5 Weight / 重量",
            "type": "text",
            "rect": [
              493,
              273.4,
              535,
              304.4
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false
          },
          {
            "id": "p2-f12",
            "label": "Accessories / 配件清单",
            "type": "text",
            "rect": [
              336,
              338,
              535,
              467
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f13",
            "label": "Notes / 备注",
            "type": "text",
            "rect": [
              574,
              175,
              812,
              467
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": true,
            "currentOrderOnly": false,
            "multiline": true
          },
          {
            "id": "p2-f14",
            "label": "Project name / 项目名称",
            "type": "text",
            "rect": [
              574,
              119,
              712,
              140
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectName",
            "group": "set0-project-name"
          },
          {
            "id": "p2-f15",
            "label": "Project number / 项目编号",
            "type": "text",
            "rect": [
              714,
              119,
              812,
              140
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "projectNumber",
            "group": "project-number"
          },
          {
            "id": "p2-f16",
            "label": "Supplier printed name / 姓名",
            "type": "text",
            "rect": [
              171,
              507,
              280,
              537
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "supplier-name",
            "role": "supplier"
          },
          {
            "id": "p2-f17",
            "label": "Supplier printed name",
            "type": "text",
            "rect": [
              585,
              507,
              723,
              537
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "supplier-name",
            "role": "supplier"
          },
          {
            "id": "p2-f18",
            "label": "Supplier date / 日期",
            "type": "text",
            "rect": [
              727,
              507,
              810,
              537
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "supplier-date",
            "role": "supplier-date"
          },
          {
            "id": "p2-f19",
            "label": "TINNOX printed name / 姓名",
            "type": "text",
            "rect": [
              171,
              540,
              280,
              570
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "issuer-name",
            "role": "issuer"
          },
          {
            "id": "p2-f20",
            "label": "TINNOX printed name",
            "type": "text",
            "rect": [
              585,
              540,
              723,
              570
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "issuer-name",
            "role": "issuer"
          },
          {
            "id": "p2-f21",
            "label": "Issue date / 日期",
            "type": "text",
            "rect": [
              727,
              540,
              810,
              570
            ],
            "fontSize": 10,
            "align": "center",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "group": "issuer-date",
            "role": "issuer-date"
          },
          {
            "id": "p2-f22",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              22,
              700,
              51
            ],
            "fontSize": 16,
            "align": "left",
            "initialValue": "LCD 整机订单信息确认表",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": true,
            "templateText": true
          },
          {
            "id": "p2-f23",
            "label": "Document title / 文件标题",
            "type": "text",
            "rect": [
              204,
              49,
              700,
              66
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "LCD Kiosk Order Confirmation Sheet",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "bold": false,
            "templateText": true
          },
          {
            "id": "p2-product-line",
            "label": "Product line / 产品系列",
            "type": "text",
            "rect": [
              205,
              67,
              390,
              81
            ],
            "fontSize": 8,
            "align": "left",
            "initialValue": "Digital kiosk",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": false,
            "autoKey": "productLine",
            "templateText": true
          },
          {
            "id": "p2-inf",
            "label": "INF reference / INF编号",
            "type": "text",
            "rect": [
              395,
              67,
              811,
              81
            ],
            "fontSize": 10,
            "align": "left",
            "initialValue": "",
            "editable": true,
            "inherit": false,
            "currentOrderOnly": true,
            "autoKey": "infReference"
          }
        ]
      }
    ]
  }
];

const normalizeProductLine = (line: string) => line.trim().toLowerCase().replace(/[^a-z0-9]+/g, '');
export function getOrderConfirmationTemplate(productLine: string): OrderConfirmationTemplate | undefined {
  const key = normalizeProductLine(productLine);
  const exact = orderConfirmationTemplates.find(template => normalizeProductLine(template.id) === key || normalizeProductLine(template.name) === key);
  if (exact) return exact;
  if (key.includes('kiosk')) return orderConfirmationTemplates.find(template => template.id === 'digital-kiosk');
  return undefined;
}

/** Start a new form only. Never re-run over a saved draft: preserve staff edits separately. */
export function prefillOrderConfirmation(productLine: string, quoteFacts: OrderConfirmationFacts = {}, previous?: PreviousOrderConfirmation) {
  const template = getOrderConfirmationTemplate(productLine);
  if (!template) throw new Error('No order confirmation template is assigned to this product line.');
  const values: OrderConfirmationValues = {};
  const origins: Record<string, OrderConfirmationOrigin> = {};
  // Product lines sharing a kiosk layout must still have independent inheritance histories.
  const sameLine = previous?.finalized === true && normalizeProductLine(previous.productLine) === normalizeProductLine(productLine);
  for (const page of template.pages) for (const field of page.fields) {
    let value = field.initialValue;
    let origin: OrderConfirmationOrigin = field.templateText ? 'template' : value === '' || value === null ? 'blank' : 'product-line-baseline';
    if (sameLine && field.inherit && Object.prototype.hasOwnProperty.call(previous!.values, field.id)) {
      const inherited = previous!.values[field.id];
      if (typeof inherited === 'string' || typeof inherited === 'boolean' || inherited === null) {
        value = inherited; origin = 'previous-finalised-form';
      }
    }
    // Explicit false and blank values are meaningful; do not use truthiness fallback.
    if (field.autoKey && Object.prototype.hasOwnProperty.call(quoteFacts, field.autoKey) && quoteFacts[field.autoKey] !== undefined) {
      const fact = quoteFacts[field.autoKey];
      value = typeof fact === 'number' ? String(fact) : fact as OrderConfirmationValue;
      origin = 'current-project';
    }
    if (field.autoKey === 'productLine') { value = productLine; origin = 'current-project'; }
    values[field.id] = value;
    origins[field.id] = origin;
  }
  return { values, origins };
}
export function initialValues(productLine: string, quoteFacts: OrderConfirmationFacts = {}, previous?: PreviousOrderConfirmation): OrderConfirmationValues {
  return prefillOrderConfirmation(productLine, quoteFacts, previous).values;
}

/** Repeated groups (project number, issuer name, dates) share one entered value across all pages. */
export function updateOrderConfirmationValue(template: OrderConfirmationTemplate, values: OrderConfirmationValues, fieldId: string, value: OrderConfirmationValue): OrderConfirmationValues {
  const fields = template.pages.flatMap(page => page.fields);
  const field = fields.find(item => item.id === fieldId);
  if (!field) throw new Error('Unknown order confirmation field.');
  const next = { ...values, [fieldId]: value };
  if (field.group) for (const linked of fields) if (linked.group === field.group) next[linked.id] = value;
  return next;
}

export const orderConfirmationSanitization = {
  edition: '2026-11-22',
  baselinePolicy: 'Reusable product specifications only; all current-order identity, dates, counts, packing, notes and images begin blank unless supplied by the current quote.',
  blankProductLines: ['PrecisionLuma', 'PrecisionFlex'],
  previousFormPolicy: 'Latest finalised form within the exact product line only. Current-project quote facts override inherited fields, including explicit false or empty values.',
  removed: ['Historical project and customer identifiers', 'Dates and printed names', 'All uploaded diagrams and photos', 'Historical quantities and packaging measurements', 'Historical free-text order notes'],
  configurationPolicy: 'One order confirmation per project product line. Repeat the page set for distinct actual configurations; do not seed additional configurations.',
  imagePolicy: '4:3 upload workspace; maximum proportional fit inside each existing document box, 1pt padding; never crop technical content.',
  signoffPolicy: 'Editable printed names and dates; supplier signed PDF is attached to the live order record.'
} as const;
