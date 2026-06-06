let catObj = {
  name: [`茶マル`, `chamalu`],
  age: 11,
  feature: `毛並みが茶色くて、丸っこい猫です。`,
  interests: [`食事`, `昼寝`, `夜の散歩`],
  bio: function () {
    document.body.append(`${catObj.name[0]} は ${catObj.age} 歳の ${catObj.feature}`);
  },
  greeting: function() {
    document.body.append(`にゃおーにゃおにゃお！（${catObj.interests[0]}と${catObj.interests[1]}が大好きな${catObj.name[0]}だよ！）`);
  }
}
catObj.bio(); // bio 関数を実行して、猫が自己紹介をする。
catObj.greeting(); // greeting 関数を実行して、猫が挨拶をする。