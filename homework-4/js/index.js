console.log("Weapon");

//Code for Adventure

const journeyRef = document.querySelector("#journey");

let myWeapon = null;

function startJourney() {
  journeyRef.innerHTML =
    "<p>Today is your first day out of Adventuring Academy! What weapon will you choose as you begin your journey as a legendary new hero?</p>";

  const starterWeapon = [
    {
      name: "Sword",
      img: "https://p.turbosquid.com/ts-thumb/ME/w4WKOk/7x/ts_urp_custom..._26.02.2022_150937/jpg/1645859659/600x600/fit_q87/43adbcef4b3416ace9399462a747d480f0881c16/ts_urp_custom..._26.02.2022_150937.jpg",
      CC: 1
    },
    {
      name: "Axe",
      img: "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-a-metal-axe-image_1161001.jpg",
      CC: 1
    },
    {
      name: "Bow",
      img: "https://cdn3.iconfinder.com/data/icons/medieval-2d-rpg-game-items-weapons-armour-helmets-/26/GAME-SVG_--46-512.png",
      CC: 1
    },
    {
      name: "My fists!",
      img: "https://png.pngtree.com/png-vector/20220425/ourmid/pngtree-fist-vector-illustration-png-image_4556306.png",
      CC: -1
    },
  ];

  for (let index = 0; index < starterWeapon.length; index++) {
    const weapon = starterWeapon[index];

    const newSection = document.createElement("section");
    newSection.innerHTML +=
      "<img height='100' width ='100' src='" +
      weapon.img +
      "'  alt ='" +
      weapon.name +
      "' />";

    newSection.innerHtml += "<h4>" + weapon.name + "</h4>";

    newSection.dataset.weaponName = weapon.name;
    newSection.dataset.weaponImage = weapon.img;
    newSection.dataset.weaponCC = weapon.CC;
    newSection.onclick = chooseWeapon;

    journeyRef.appendChild(newSection);

    console.log(weapon);
  }
}

function chooseWeapon(e) {
  console.log(e.currentTarget);
  const weaponName = e.currentTarget.dataset.weaponName;
  const weaponImg = e.currentTarget.dataset.weaponImage;
  const weaponCC = e.currentTarget.dataset.weaponCC;

  const confirmChoice = confirm("You chose " + weaponName);
  if (confirmChoice) {
    if(weaponCC == -1 ) {
      journeyRef.innerHTML +=
      "You chose " + weaponName + " as your starter weapon! Are you sure about that? <button onclick= 'starterTask()'>Continue</button>";
    } else {
      journeyRef.innerHTML +=
        "You chose " + weaponName + " as your starter weapon! Great Choice! <button onclick= 'starterTask()'>Continue</button> ";
    }

    myWeapon = { name: weaponName, img: weaponImg };
  }
}

// Continue journey


function starterTask() {
  journeyRef.innerHTML =
    "<p>Now, what will be your first heroic deed?</p>";

  const starterTask = [
    {
      name: "Slay a Dragon",
      img: "https://sm.ign.com/ign_br/screenshot/default/dragonlance2_cnt9.jpg",
      CC: 1
    },
    {
      name: "Rescue a Princess",
      img: "https://play.nintendo.com/images/Masthead_Peach.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png",
      CC: 1
    },
    {
      name: "Save a Kingdom",
      img: "https://opengameart.org/sites/default/files/castle_4.png",
      CC: 1
    },
    {
      name: "Head to the Pub!",
      img: "https://t3.ftcdn.net/jpg/02/87/87/36/360_F_287873640_UsbSnT9tY3hLNqFAAvB8Jy8rVu6DmBm6.jpg",
      CC: -1
    },
  ];

  for (let index = 0; index < starterTask.length; index++) {
    const task = starterTask[index];

    const newSection = document.createElement("section");
    newSection.innerHTML +=
      "<img height='100' width ='100' src='" +
      task.img +
      "'  alt ='" +
      task.name +
      "' />";

    newSection.innerHtml += "<h4>" + task.name + "</h4>";

    newSection.dataset.taskName = task.name;
    newSection.dataset.taskImage = task.img;
    newSection.dataset.taskCC = task.CC;
    newSection.onclick = chooseTask;

    journeyRef.appendChild(newSection);

    console.log(task);
  }


function chooseTask(e) {
  console.log(e.currentTarget);
  const taskName = e.currentTarget.dataset.taskName;
  const taskImg = e.currentTarget.dataset.taskImage;
  const taskCC = e.currentTarget.dataset.taskCC;

  const confirmChoice = confirm("You chose " + taskName);
  if (confirmChoice) {
    if(taskCC == -1 ) {
      journeyRef.innerHTML +=
      "You chose " + taskName + " as your first quest? You need to go back to adventuring academy! <button onclick= 'startJourney()'>Back to School!</button>";
    } else {
      journeyRef.innerHTML +=
        "You chose " + taskName + " as your first quest! You'll be a legend in no time!";
    }

    myTask = { name: weaponName, img: weaponImg, CC: taskCC };
  }
}
}
