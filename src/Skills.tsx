import * as React from 'react';
import {NumberInput} from "./fields/NumberInput";
import {SheetContext, SheetData} from "./Sheet";
import {List, Map} from "immutable";
import {div} from "./utils";
import Select from 'react-select';

interface SubSkill {
  label: string;
  en?: string;
  initial?: number;
}


interface ISkill {
  label: string;
  en: string;
  initial?: number;
  contains?: Array<SubSkill>;
  tag?: string;
}


const languages: Array<SubSkill> = [
  {label: "汉语", en: "chinese"},
  {label: "英语", en: "english"},
  {label: "日语", en: "japanese"},
  {label: "拉丁语", en: "latin"}
];


const skills: Array<ISkill> = [
  {label: "心理学", en: "Psychology", initial: 10},
  {label: "信用评级", en: "Credit Rating", initial: 0},
  {label: "话术", en: "Fast Talk", initial: 5},
  {label: "恐吓", en: "Intimidate", initial: 15},
  {label: "魅惑", en: "Charm", initial: 15},
  {label: "说服", en: "Persuade", initial: 10},
  {label: "领航", en: "Navigate", initial: 10},
  {
    label: "生存", en: "Survival", initial: 10, tag: "blank", contains: [
      {label: "沙漠"},
      {label: "海洋"},
      {label: "极地"},
    ]
  },
  {label: "跳跃", en: "Jump", initial: 20},
  {label: "攀爬", en: "Climb", initial: 15},
  {label: "游泳", en: "Swim", initial: 20},
  {label: "汽车驾驶", en: "Drive Auto", initial: 20},
  {
    label: "驾驶", en: "Pilot", initial: 1, tag: "blank", contains: [
      {label: "飞行器"},
      {label: "船"}
    ]
  },
  {label: "骑术", en: "Ride", initial: 5},
  {label: "潜行", en: "Stealth", initial: 20},
  {label: "追踪", en: "Track", initial: 10},
  {label: "乔装", en: "Disguise", initial: 5},
  {label: "锁匠", en: "Locksmith", initial: 1},
  {label: "妙手", en: "Sleight of Hand", initial: 10},
  {label: "会计", en: "Accounting", initial: 5},
  {label: "法律", en: "Law", initial: 5},
  {label: "神秘学", en: "Occult", initial: 5},
  {label: "历史", en: "History", initial: 5},
  {label: "人类学", en: "Anthropology", initial: 1},
  {label: "考古学", en: "Archaeology", initial: 1},
  {label: "博物学", en: "Natural World", initial: 10},
  {label: "电子学", en: "Electronics", initial: 1, tag: "modern"},
  {
    label: "科学", en: "Science", initial: 1, contains: [
      {label: "天文学", en: "Astronomy"},
      {label: "地质学", en: "Geology"},
      {label: "气象学", en: "Meteorology"},
      {label: "生物学", en: "Biology"},
      {label: "司法科学", en: "Forensics"},
      {label: "药学", en: "Pharmacy"},
      {label: "植物学", en: "Botany"},
      {label: "物理学", en: "Physics"},
      {label: "化学", en: "Chemistry"},
      {label: "密码学", en: "Cryptography"},
      {label: "动物学", en: "Zoology"},
      {label: "数学", en: "Mathematics"},
    ]
  },
  {label: "侦查", en: "Spot Hidden", initial: 25},
  {label: "聆听", en: "Listen", initial: 20},
  {label: "图书馆利用", en: "Library Use", initial: 20},
  {label: "估价", en: "Appraise", initial: 5},
  {label: "克苏鲁神话", en: "Cthulhu Mythos", initial: 0},
  {label: "精神分析", en: "Psychoanalysis", initial: 1},
  {label: "急救", en: "First Aid", initial: 30},
  {label: "医学", en: "Medicine", initial: 1},
  {label: "催眠", en: "Hypnosis", initial: 1, tag: "irregular"},
  {label: "闪避", en: "Dodge", initial: undefined},
  {
    label: "格斗", en: "Fighting", initial: undefined, contains: [
      {label: "斗殴", en: "Brawl", initial: 25},
      {label: "剑", en: "Sword", initial: 20},
      {label: "矛", en: "Spear", initial: 20},
      {label: "斧头", en: "Axe", initial: 15},
      {label: "绞索", en: "Garrote", initial: 15},
      {label: "电锯", en: "Chainsaw", initial: 10},
      {label: "连枷", en: "Flail", initial: 10},
      {label: "鞭子", en: "Whip", initial: 5},
    ]
  },
  {label: "投掷", en: "Throw", initial: 20},
  {
    label: "射击", en: "Firearms", initial: undefined, contains: [
      {label: "弓术", en: "Bow", initial: 15},
      {label: "手枪", en: "Handgun", initial: 20},
      {label: "步枪/霰弹枪", en: "Rifle/Shotgun", initial: 25},
      {label: "冲锋枪", en: "Submachine Gun", initial: 15},
      {label: "火焰喷射器", en: "Flamethrower", initial: 10},
      {label: "重武器", en: "Heavy Weapons", initial: 10},
      {label: "机关枪", en: "Machine Gun", initial: 10},
    ]
  },
  {label: "操作重型机械", en: "Operate Heavy Machinery", initial: 1},
  {label: "机械维修", en: "Mechanical Repair", initial: 10},
  {label: "电气维修", en: "Electrical Repair", initial: 10},
  {label: "计算机使用", en: "Computer Use", initial: 5, tag: "modern"},
  {
    label: "艺术与手艺", en: "Art and Craft", initial: 5, tag: "blank", contains: [
      {label: "表演"},
      {label: "美术"},
      {label: "伪造"},
      {label: "摄影"}
    ]
  },
  {label: "动物驯养", en: "Animal Handling", initial: 5, tag: "irregular"},
  {label: "读唇", en: "Read Lips", initial: 1, tag: "irregular"},
  {label: "潜水", en: "Diving", initial: 1, tag: "irregular"},
  {label: "炮术", en: "Artillery", initial: 1, tag: "irregular"},
  {label: "爆破", en: "Demolitions", initial: 1, tag: "irregular"},
  {label: "语言", en: "Language (Other)", initial: 1, tag: "blank", contains: languages},
  {label: "语言（母语）", en: "Language (Own)", initial: undefined, tag: "blank", contains: languages}
];



interface SkillData {
  occupation?: number;
  interest?: number;
  grow?: number;
}


class CommonSkill extends React.Component<ISkill, SkillData> {
  constructor(props: ISkill) {
    super(props);
    this.state = {}
  }

  render() {
    const tag = this.props.tag;
    const is_blank = tag !== undefined && tag.includes("blank");
    let label = null;
    if (this.props.contains !== undefined) {
      const options = this.props.contains
        .map((item: SubSkill, index) => ({label: item.label, value: index}));
      label = <span>{this.props.label}: <Select options={options}/></span>;
    }
    else if (is_blank) {
      label = <span>{this.props.label}: <input/></span>;
    }
    else {
      label = <span>{this.props.label}</span>;
    }
    const initial = this.props.initial;
    const occupation = this.state.occupation;
    const interest = this.state.interest;
    const grow = this.state.grow;
    let sum = 0;
    if (initial !== undefined) sum += initial;
    if (occupation !== undefined) sum += occupation;
    if (interest !== undefined) sum += interest;
    if (grow !== undefined) sum += grow;

    const is_mythos = this.props.en === "Cthulhu Mythos";
    const is_changed = sum !== initial;
    return <tr className={is_changed ? "skill-row changed" : "skill-row"}>
      <td>
        <input type="checkbox" disabled={is_mythos}/>
      </td>
      <td className="">
        {label}
        <p className="help">{this.props.en}</p>
      </td>
      <td>{initial}</td>
      <td>
        <NumberInput upper={100} value={occupation} className=""
                     editable={!is_mythos}
                     onChange={(n) => this.setState({occupation: n})}/>
      </td>
      <td>
        <NumberInput upper={100} value={interest} className=""
                     editable={!is_mythos}
                     onChange={(n) => this.setState({interest: n})}/>
      </td>
      <td>
        <NumberInput upper={100} value={grow} className=""
                     onChange={(n) => this.setState({grow: n})}/>
      </td>
      <td className={sum >= 100 ? "skill-out-range" : ""}>{sum}</td>
    </tr>;
  }
}


class LanguageOwn extends React.Component<ISkill> {
  render() {
    const skill = (ctx: SheetData) => {
      const edu = ctx.attributes.get("dex", 0);
      return <CommonSkill {...this.props} initial={div(edu, 2)}/>;
    };

    return <SheetContext.Consumer>{skill}</SheetContext.Consumer>
  }
}


class Dodge extends React.Component<ISkill> {
  render() {
    const skill = (ctx: SheetData) => (
      <CommonSkill {...this.props} initial={ctx.attributes.get("dex", 0)}/>
    );
    return <SheetContext.Consumer>{skill}</SheetContext.Consumer>
  }
}


class Skill extends React.Component<ISkill> {
  render() {
    const map: { [key: string]: (props: ISkill) => JSX.Element } = {
      "Dodge": (p) => <Dodge {...p}/>,
      "Language (Own)": (p) => <LanguageOwn {...p}/>
    };
    if (map.hasOwnProperty(this.props.en)) {
      return map[this.props.en](this.props);
    }

    return <CommonSkill {...this.props} />
  }
}


interface Props {
  attributes: Map<string, number>;
}


interface State {
  filter: string;
  custom_skills: List<ISkill>;
}


export class Skills extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {filter: "", custom_skills: List()}
  }

  // add_skill = (skill: ISkill) =>

  render() {
    const filter = this.state.filter;
    const rows = skills.concat(this.state.custom_skills.toArray())
      .sort((a, b) => a.en.localeCompare(b.en))
      .filter((row) => row.en.toLowerCase().includes(filter) || row.label.includes(filter))
      .map((row, i) => <Skill key={i} {...row}/>);
    const skill_filter = (<div className="">
      <label className="" htmlFor="skill-filter">筛选</label>
      <input id="skill-filter" className="" value={filter} placeholder="筛选技能名"
             onChange={(e) => this.setState({filter: e.currentTarget.value})}/>
    </div>);
    const table_header = (<tr>
      <th/>
      <th>名称</th>
      <th>初始值</th>
      <th>本职</th>
      <th>兴趣</th>
      <th>成长</th>
      <th>合计</th>
    </tr>);
    return (
      <div className="">
        {skill_filter}
        <table className="">
          <tbody>
          {table_header}
          {rows}
          </tbody>
        </table>
      </div>
    )
  }
}
