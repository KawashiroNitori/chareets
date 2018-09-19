import * as React from 'react';
import {Map} from "immutable";
import {BackstoryField as Field} from "./fields/BackstoryField";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDice} from "@fortawesome/free-solid-svg-icons";
import {choice} from "./utils";


const hint = {
  "personalDescription": () => {
    const blood_types = choice(['A', 'B', 'AB', 'O']);
    const mbti = [['E', 'I'], ['S', 'N'], ['T', 'F'], ['J', 'P']].map(choice).join("");
    const constellation = choice([
      '摩羯', '水瓶', '双鱼', '白羊', '金牛', '双子',
      '巨蟹', '狮子', '处女', '天秤', '天蝎', '射手'
    ]);
    return `${blood_types}型血 / MBTI人格类型：${mbti} / ${constellation}座`;
  },
  "ideologyOrBeliefs": () => choice([
    '你信仰并祈并一位大能。(例如毗沙门天、耶稣基督、海尔·塞拉西一世)',
    '人类无需上帝。(例如坚定的无神论者，人文主义者，世俗主义者)',
    '科学万能!科学万岁!你将选择其中之一。(例如进化论，低温学，太空探索)',
    '命中注定。(例如因果报应，种姓系统，超自然存在)',
    '社团或秘密结社的一员。(例如共济会，女协，匿名者)',
    '社会坏掉了，而你将成为正义的伙伴。\n应斩除之物是？(例如毒品，暴力，种族歧视)',
    '神秘依然在。(例如占星术，招魂术，塔罗)',
    '键盘政治局委员。(例如保守党，共产党，自由党)',
    '“金钱就是力量，我的朋友，我将竭尽全力获取我能看到的一切。”(例如贪婪心，进取心，冷酷心)',
  ]),
  "significantPeople": () => {
    const who = [
      "你的父辈。(例如母亲，父亲，继母)",
      "你的祖父辈。(例如外祖母、祖父)",
      "你的兄弟姐妹。(例如妹妹、半血亲妹妹、无血缘妹妹、表妹)",
      "你的孩子。(儿子或女儿)",
      "你的另一半。(例如配偶，未婚夫，爱人)",
      "那位指引你人生技能的人。指明该技能和该人。(例如学校教师，师傅，父亲)",
      "你自幼熟识的人。(例如同学，邻居，幼驯染)",
      "一位名人、偶像或者英雄。当然也许你从未见过他。 (例如电影明星，政治家，音乐家。)",
      "游戏中的另一位调查员伙伴。随机或自选。",
      "游戏中另一位NPC。详情咨询你的守秘人。",
    ];
    const why = [
      "你欠了他们人情。他们帮助了你什么？(例如， 经济上，困难时期的庇护，给你第一份工作)",
      "他们教会了你一些东西。(例如，技能，如何去爱，如何成为男子汉)",
      "他们给了你生命的意义。(例如，你渴望成为他们 那样的人，你苦苦追寻着他们，你想让他们高兴)",
      "你曾害了他们，而现在寻求救赎。例如，偷窃了他们的钱财，向警方报告了他们的行踪，在他们绝望时拒绝救助)",
      "同甘共苦。(例如，你们共同经历过困难时期，你们携手成长，共同度过战争)",
      "你想向他们证明自己。(例如，自己找到工作，自己搞到老婆，自己考到学历)",
      "你崇拜他们。(例如，崇拜他们的名头，他们的魅力，他们的工作)",
      "后悔的感觉。(例如，你本应死在他们面前，你背弃了你的誓言，你在可以助人之时驻足不前)",
      "你试图证明你比他们更出色。他们的缺点是? (例如，懒惰，酗酒，冷漠)",
      "他们扰乱了你的人生，而你寻求复仇。发生了什么？(例如，射杀爱人之日，国破家亡之时，明镜两分之际)",
    ];
    return `${choice(who)} 因为${choice(why)}`;
  },
  "meaningfulLocations": () => choice([
    "你最爱的学府。(例如，中学，大学)",
    "你的故乡。(例如，乡下老家，小镇村，大都市)",
    "相识初恋之处。(例如，音乐会，度假村，核弹避难所)",
    "静思之地。(例如，图书馆，你的乡土别墅，钓鱼中)",
    "社交之地。(例如，绅士俱乐部，地方酒吧，叔叔的家)",
    "联系你思想 / 信念的场所。(例如，小教堂，麦加， 巨石阵)",
    "重要之人的坟墓。(例如，另一半，孩子，爱人)",
    "家族所在。(例如，乡下小屋，租屋，幼年的孤儿院)",
    "生命中最高兴时的所在。(例如，初吻时坐着的公园长椅，你的大学)",
    "工作地点。(例如，办公室，图书馆，银行)",
  ]),
  "treasuredPossessions": () => choice([
    "与你得意技相关之物。(例如华服，假身份证，青铜指虎)",
    "职业必需品。(例如医疗包，汽车，撬锁器)",
    "童年的遗留物。(例如漫画书，随身小刀，幸运币)",
    "逝者遗物。(例如烛堡，钱包里的遗照，信)",
    "重要之人给予之物。(例如戒指，日志，地图)",
    "收藏品。(例如车票，标本，记录)",
    "你发掘而不知真相的东西。答案追寻中。(例如， 橱柜里找到的未知语言信件，一根奇怪的从父亲出继承来的来源不明的风琴，花园里挖出来的奇妙的银球)",
    "体育用品。(例如，球棒，签名棒球，鱼竿)",
    "武器。(例如，半自动左轮，老旧的猎用来福，靴刃)",
    "宠物。(例如狗，猫，乌龟)",
  ]),
  "traits": () => choice([
    "慷慨大方。(例如，小费大手，及时雨，慈善家)",
    "善待动物。(例如，爱猫人士，农场出生，与小马同舞)",
    "梦想家。(例如，惯常异想天开，预言家，创造者)",
    "享乐主义者。(例如，派对大师，酒吧醉汉，“放纵到死”)",
    "赌徒，冒险家。(例如，扑克脸，任何事都来一遍，活在生死边缘)",
    "好厨子，好吃货。(例如，烤得一手好蛋糕，无米之炊都能做好，优雅的食神)",
    "女人缘 / 万人迷。(例如，长袖善舞，甜言蜜语，电眼乱放)",
    "忠心在我。(例如，背负自己的朋友，从未破誓， 为信念而死)",
    "好名声。(例如，村里最好的饭后聊天人士，虔信圣徒，不惧任何危险)",
    "雄心壮志。(例如，梦想远大，目标是成为 BOSS，渴求一切)",
  ]),
};

interface Props {
  backstory: Map<string, string>,
  setter: (next: Map<string, string>) => void;
}


interface State {
  hint: Map<string, string>,
}


export class Backstory extends React.Component<Props, State> {
  autoGenerate = () => {
    for (let key in hint) {
      this.setState(prevState => ({hint: prevState.hint.set(key, hint[key]())}));
    }
  };

  constructor(props: Props) {
    super(props);
    this.state = {hint: Map()};
  }

  render() {
    const name = (name: string) => ({
      value: this.state[name],
      name: name,
      hint: this.state.hint.get(name, ""),
      onChange: (value: string) =>
        this.props.setter(this.props.backstory.set(name, value))
    });
    return (
      <div className="Backstory container">

        <p className="title is-4">背景</p>
        <div className="field">
          <div className="control" onClick={this.autoGenerate}>
            <button className="button">
              <span className="icon is-small"><FontAwesomeIcon icon={faDice}/></span>
              <span>随机提示</span>
            </button>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <Field label="个人描述" {...name("personalDescription")}/>
            <Field label="思想/信念" {...name("ideologyOrBeliefs")}/>
            <Field label="重要之人" {...name("significantPeople")}/>
            <Field label="意义非凡之地" {...name("meaningfulLocations")}/>
          </div>
          <div className="column">
            <Field label="宝贵之物" {...name("treasuredPossessions")}/>
            <Field label="特质" {...name("traits")}/>
            <Field label="伤口与疤痕" {...name("injuriesAndScars")}/>
            <Field label="恐惧症和狂躁症" {...name("phobiasAndManias")}/>
          </div>
        </div>
      </div>
    );
  }
}
