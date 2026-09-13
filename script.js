const story = document.getElementById("story")
const audio = document.getElementById("rain")
let toldConnorTruth = false
let coffeeChoice = ""
const scenes = {
    title: {
        text: `<h1>Night Shift </h1>
        <p class="subtitle">"I was just studying."</p>`,
        choices: [{label: "Start", goTo: "arrival"}],
    },
    arrival: {
  text: `
  <p>You arrive at the call center.</p>
  <p>You turn off the beat up sedan and start walking to the building.</p>
  <p>You open the door and get slammed with loud clamoring and calling sound, but yet it sounds... empty.</p> `,
  choices: [{label: "Continue", goTo: "coffee"}]
    },
    coffee: {
        text: `
        <p>You take the elevator to the 3rd floor.</p>
        <p>After the elevator door opens up, you open the giant glass door and walk to the coffee dispenser.</p>
        <p>There are 3 choices, Black Coffee, Cappucino, or a latte.</p>`,
        choices: [{label: "Black Coffee", goTo: "connor", drink: "black coffee"},
                {label: "Cappucino", goTo: "connor", drink: "cappuccino"},
                {label: "Latte", goTo: "connor", drink: "latte"},
        ]
    },
    connor: {
        text: `
        <p> You get your coffee and walk to your desk in the near corner of the room.</p>
        <p>Right as you are about to pull your chair out of your desk, your friend Connor, stops you from sitting.</p>
        <p>"Hey James you kinda look rough man. How was your days off?"</p>`,
        choices: [{label: "It was alright", goTo: "sitdown", remember: true},
            {label: "I don't want to talk right now", goTo: "sitdown", remember: false},
        ]
    },
    sitdown: {
        text: `
        <p>After talking to Connor, you notice everybody leaving, including Connor.</p>
        <p>You remember that you are working overtime to pay rent since you got that notice from the landlord today in the mail.</p>
        <p>You sigh as you turn on the computer. </p>
        <p>As you're about to enter the password, you see a picture you duct-taped to the monitor. The picture looks old and it's already curled.</p>
        <p>You, your parents, and a girl standing between you and your mother on the porch of a farmhouse.</p> `,
        choices: [{label: "Continue", goTo: "quiet"}],
    },
    quiet: {
        text: `
        <p>It's 11:52, August 20.</p>
        <p>Your coffee's gone cold, and it's raining hard outside.</p>
        <p>The building echoes every time a big rain drop hits that old roof.</p>
        <p>You sit there, staring at the computer blankly.</p>`,
        choices: [{label: "Continue", goTo: "firstcall"}],
    },
    firstcall: {
        text: `
        <p>The phone rings.</p>
        <p>You pick up your headset and answer the call.</p>
        <p>"911, what's your emergency?"</p>`,
        choices: [{label: "Continue", goTo: "whisper"}],
    },
    whisper: {
        text: `
        <p>Your ear is filled with heavy breathing.</p>
        <p>You ask, "Hello?"</p>
        <p>"Someone is here."</p>`,
        choices: [{label: "Continue", goTo: "ellie"}],
    },
    ellie: {
        text: `
        <p>"What's your name?"</p>
        <p>"Ellie."</p>
        <p>"How old are you?"</p>
        <p>"I'm thirteen."</p>
        <p>"Ellie, are your parents there?"</p>
        <p>"It's only me and my mom and she's working overnight."</p>
        <p>"Okay, Ellie, where are you in the house right now?"</p>
        <p>"I'm in the bathroom."</p>
        <p>Ellie's address pops up on your screen, you send the nearest unit to Ellie.</p>
        <p>"Ellie, the unit's eleven minutes out."</p>`,
        choices: [{label: "Continue", goTo: "thewait"}],
    },
    thewait: {
        text: `
        <p>"Is my mom going to find out about this?"</p>
        <p>"Yes, we contacted your mother about it, but don't worry, you did nothing wrong."</p>
        <p>"Should I call my mom?"</p>
        <p>"No, Ellie, I need you to stay in this call."</p>
        <p>"Oh okay."</p>
        <p>"It's cold in this bathroom."</p>
        <p>"I know, hang on tight, okay? You're doing really well, Ellie."</p>
        <p>"Um, how was your—?"</p>
        <p>You hear static.</p>
        <p>"Sorry, what was that, Ellie?"</p>
        <p>"Uh, nothing, never mind."</p>
        <p>You check the time. It's almost midnight.</p>
        <p>"I'm really tired. Can I sleep?"</p>
        <p>"I know that—"</p>
        <p>You hear footsteps getting louder again.</p>`,
        choices: [{label: "Continue", goTo: "thechoice"}],
    },

    thechoice: {
        text: `
        <p>You can hear Ellie breathing loudly.</p>
        <p>Seconds pass, your hand is trembling.</p>`,
        choices: [{label: "Stay where you are, Ellie.", goTo: "stay"},
        {label: "Go through the window", goTo: "window"},
        ]
    },
    // 2 endings start here. The good ending... kinda
    stay: {
        text: `
        <p>"Ellie, I need you to lock the bathroom door and put something heavy on the door."</p>
        <p>"There's nothing heavy here."</p>
        <p>"Okay, just stay quiet and don't make any noise."</p>
        <p>"Okay."</p>
        <p>"My name is James. I'm here with you."</p>
        <p>You hear nothing.</p>`,
        choices: [{label: "Continue", goTo: "wait"}],
    },
    wait: {
        text: `
        <p>"Ellie, are you there?"</p>
        <p>No answer. Just her breathing, and footsteps somewhere below her.</p>
        <p>You see the time till the units arrive ticking down, the rain is getting lighter.</p>`,
        choices: [{label: "Continue", goTo: "close"}],
    },
    close:{
        text: `
        <p>You can hear her whimpering, but she doesn't answer.</p>
        <p>Your mind wanders to that old picture just for a second, your dad, you, her, and your mom in that old rundown farmhouse.</p>
        <p>You can still see the phone face up with the text open.</p>
        <p>"Hello James?"</p>
        <p>"Ellie, are you okay?"</p>
        <p>"Yes but someone's coming closer, I can hear them."</p>
        <p>"I'm so scared, I was just studying."</p>`,
        choices: [{label: "Continue", goTo: "sirens"}],
    },
    sirens: {
        text: `
        <p>ETA 3 minutes.</p>
        <p>You can hear sirens through the line.</p>
        <p>"Ellie, the police is almost there hang tight."</p>
        <p>No sounds, just footsteps fading as seconds pass by.</p>
        <p>Loud footsteps abrubtly breaks the silence.</p>
        <p>The footsteps are coming closer and closer.</p>
        <p>You hear Ellie whimper again.</p>
        <p>"Ellie, I need you to keep quiet."</p>
        <p>A knock on the bathroom door.</p>
        <p>You hear Ellie's phone drop.</p>
        <p>The call disconnects.</p>`,
        choices: [{label: "Continue", goTo: "finish"}]
    },
    finish: {
        text: `
        <p>You try calling her back.</p>
        <p>No response.</p>
        <p>Your mind feels like it's spinning, what happens to her?</p>
        <p>Is she fine? Did the police arrive in time?</p>
        <p>Minutes pass by, it feels like hours.</p>
        <p>Then, you get a call from the police at the scene.</p>
        <p>Ellie is all fine, yet shaken. The intruder has escaped from the backyard door.</p>
        <p>You sigh a breath of relief.</p>
        <p>August 27, 9:30 pm.</p>
        <p>You turn off your sedan, and walk to the call center.</p>
        <p>You take the elevator, you get your COFFEE, and head to your desk.</p>
        <p>You see Connor heading your way.</p>`,
        choices: [{label: "Morning Connnor.", goTo: "finish2"},
            {label: "Hey man.", goTo: "finish2"},
        ]
    },
    finish2: {
        text: `
        <p>"Oh hey James."</p>
        <p>"Great call a week ago, man. You saved a life!"</p>
        <p>"Thanks man. Do you have any news on Ellie or the intruder?"</p>
        <p>"Right, yeah I wanted to tell you about it. So Ellie is fine, she's with her mom and police are still investigating the motive."</p>
        <p>"Wait, so does that mean they know who the intruder is?"</p>
        <p>"Yep, by the name of Katie Clark, a high school freshman. But here's the thing, Ellie told the police that she knows her."</p>
        <p>You stop for a few seconds.</p>
        <p>"Alright, thanks Connor."</p>
        <p>"You bet."</p>
        <p>You sit at your desk, the picture, still there. You type in your password, put on your headset, and get ready to receive a call.</p>`,
        choices: [{label: "Play Again", goTo: "arrival"}],
    },
    finish2cold: {
        text: `
        <p>"Oh, hey Connor."</p>
        <p>"Hey. Nice call on that girl."</p>
        <p>"So, uh, do you have any news on Ellie or the intruder?"</p>
        <p>"Yeah so Ellie is fine, she's with her mom and police are still investigating the motive."</p>
        <p>"Wait, so does that mean they know who the intruder is?"</p>
        <p>"Yep, by the name of Katie Clark, a high school freshman. But here's the thing, Ellie told the police that she knows her."</p>
        <p>You stop for a few seconds.</p>
        <p>"Thanks."</p>
        <p>"Yep."</p>
        <p>You sit at your desk, the picture, still there. You type in your password, put on your headset, and get ready to receive a call.</p>`,
        choices: [{label: "Play Again", goTo: "arrival"}],
    },
    // This is the first ending, the "relief" ending.

    window: {
        text: `
        <p>"Ellie, I want you to be calm, now I want you to head for any window that is closest to you."</p>
        <p>"What?? Are you crazy??"</p>
        <p>"I know I know, but it's not safe hiding in a bathroom. It's okay, Ellie."</p>
        <p>"Okay. Okay. Umm... There is a window near my bedroom."</p>
        <p>"Okay, Ellie, I want you to wait for the footsteps to be far away and go."</p>
        <p>You don't hear Ellie answer.</p>`,
        choices: [{label: "Continue", goTo: "go"}],
    },
    go: {
        text: `
        <p>"James?"</p>
        <p>"Ellie, there you are! Are you okay?"</p>
        <p>"Yeah, I'm fine. Just... hold on, I'm about to go."</p>
        <p>You hear the door creaking little by little.</p>
        <p>Ellie's breathing is heavy and inconsistent.</p>
        <p>You hear quiet footsteps walking.</p>`,
        choices: [{label: "You whisper her name.", goTo: "hallway"},
            {label: "You wait.", goTo: "hallway"},
        ]
    },
    hallway: {
        text: `
        <p>Seconds pass by as you only hear footsteps.</p>
        <p>Then you hear a sound downstairs.</p>
        <p>Ellie stops.</p>
        <p>You hear her crying silently.</p>
        <p>Her footsteps resume.</p>`,
        choices: [{label: "Continue", goTo: "door"}],
    },
    door: {
        text: `
        <p>"James, I'm in my bedroom."</p>
        <p>"Okay, Ellie, I want you to open up the window quietly."</p>
        <p>"Okay."</p>
        <p>You hear her phone being put down.</p>
        <p>Then you hear a loud crack.</p>`,
        choices: [{label: "Stop.", goTo: "loud"},
            {label: "Ellie?", goTo: "loud"},
        ]
    },
    loud: {
        text: `
        <p>"I think I'm fine."</p>
        <p>"Ellie, was that you?"</p>
        <p>"I, I don't know."</p>
        <p>"Okay, open the window slowly."</p>
        <p>You hear her opening the window.</p>
        <p>It's still raining hard outside.</p>`,
        choices: [{label: "Continue", goTo: "escaping"}],
    },
    escaping: {
        text: `
        <p>"Okay, I opened the window."</p>
        <p>"Is there a porch roof, or something Ellie?"</p>
        <p>"It's a porch roof. It's close to my neighbour's yard."</p>
        <p>"Okay, good. Carefully go on the roof."</p>`,
        choices: [{label: "Continue", goTo: "roof"}],
    },
    roof: {
        text: `
        <p>The rain is still pouring hard.</p>
        <p>"Alright, I'm at the roof."</p>
        <p>"Is that—"</p>
        <p>"Wait, what are you—"</p>
        <p>The line ends.</p>`,
        choices: [{label: "Continue", goTo: "later"}],
    },
    later: {
        text: `
        <p>You try calling back.</p>
        <p>No answer.</p>
        <p>You try again.</p>
        <p>Still no answer.</p>
        <p>"Unit 07, status on the address?"</p>`,
        choices: [{label: "Continue", goTo: "nothing"}],
    },
    nothing: {
        text: `
        <p>It's two minutes after the line ended.</p>
        <p>You're just there. Staring at the screen.</p>
        <p>On the screen, it shows an ETA of 0 minutes.</p>`,
        choices: [{label: "Continue", goTo: "nothing2"}],
    },
    nothing2: {
        text: `
        <p>Hours pass by. A few calls here and there.</p>
        <p>It's way past midnight.</p>
        <p>You're tired. You drink that cold coffee you have on your desk.</p>
        <p>As you pack up, another call comes through.</p>`,
        choices:[{label: "911, what's your emergency?", goTo:"news"}],
    },
    news: {
        text: `
        <p>"Hey Connor."</p>
        <p>"Oh hey man."</p>
        <p>"Do you have any news on Ellie or the intruder?"</p>
        <p>"Right, yeah I wanted to tell you about it. So Ellie is in the hospital with a surgery coming up."</p>
        <p>"Has she woken up?"</p>
        <p>"Sadly, not yet."</p>
        <p>"But they did find the intruder's kitchen knife."</p>
        <p>"Who?"</p>
        <p>"Katie Clark, a high school freshman. But here's the thing, Ellie's teacher told us that Ellie and Katie are close friends."</p>
        <p>You stop for a few seconds.</p>
        <p>"Alright, thanks Connor."</p>
        <p>"You bet."</p>
        <p>You sit at your desk, the picture, still there. You type in your password, put on your headset, and get ready to receive a call.</p>`,
        choices: [{label: "Play Again", goTo: "arrival"}],
    },

};

function showScene(scenesId) {
if (scenesId === "finish2" && toldConnorTruth === false){
    scenesId = "finish2cold"
}
    const scene = scenes[scenesId]
    story.innerHTML = scene.text.replace("COFFEE", coffeeChoice)

for (const choices of scene.choices) {
    const btn = document.createElement("button");
    btn.addEventListener("click", () => {
        if (choices.remember){
            toldConnorTruth = choices.remember
        }
        if (choices.drink){
            coffeeChoice = choices.drink
        }
        if(audio.paused){
            audio.play()
        }
        showScene(choices.goTo)
    })
    btn.textContent = choices.label
    story.appendChild(btn)
    }
}

showScene("title")
