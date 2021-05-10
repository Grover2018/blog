import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "2",
      midImg: "https://p6-tt.byteimg.com/origin/pgc-image/954a8e599bda4fa383c44b275b992f21?from=pc",
      bigImg: "https://p3-tt.byteimg.com/origin/pgc-image/46057f8c7f6649f5b08f8e0c57404f4d?from=pc",
      title: "看春秋",
      description: "都说人生短短几个秋，不醉不罢休。多数人穷其一生，也只是为了生活为了他人了。",
    },
    {
      id: "1",
      midImg:
        "https://p6-tt.byteimg.com/origin/pgc-image/954a8e599bda4fa383c44b275b992f21?from=pc",
      bigImg:
        "https://p1-tt.byteimg.com/origin/pgc-image/03ff231ddfd24698abf915500c694ad0?from=pc",
      title: "缘起则聚，缘灭则散",
      description: "夜，结束了一天的喧嚣后安静下来，伴随着远处路灯那微弱的光。",
    },
    {
      id: "3",
      midImg: "https://p6-tt.byteimg.com/origin/pgc-image/cada73b1cc61432f8a0ba44e2e2b2cff?from=pc",
      bigImg: "https://p3-tt.byteimg.com/origin/pgc-image/3e875599135643dfb386a5aa88659538?from=pc",
      title: "此去经年",
      description: "曾经以为，相爱的人一定要相守，只有相守，情感才能长久。",
    },
  ],
});
