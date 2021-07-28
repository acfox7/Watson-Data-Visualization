const { db, Book } = require('./server/db');

const seed = async () => {
  try {
    await db.sync({ force: true });

    const harryPotter = await Book.create({
      title: 'Harry Potter & The Prisoner of Azkaban',
      author: 'J.K. (Joanne) Rowling',
      excerptTitle: `Chapter 2
      Aunt Marge's Big Mistake`,
      excerpt: `Harry went down to breakfast the next morning to find the three Dursleys already sitting around the kitchen table. They were watching a brand-new television, a welcome- home-for- the-summer present for Dudley, who had been complaining loudly about the long walk between the fridge and the television in the living room. Dudley had spent most of the summer in the kitchen, his piggy little eyes fixed on the screen and his five chins wobbling as he ate continually.

      Harry sat down between Dudley and Uncle Vernon, a large, beefy man with very little neck and a lot of mustache. Far from wishing Harry a happy birthday, none of the Dursleys made any sign that they had noticed Harry enter the room, but Harry was far too used to this to care. He helped himself to a piece of toast and then looked up at the reporter on the television, who was halfway through a report on an escaped convict:

      "... The public is warned that Black is armed and extremely dangerous. A special hotline has been set up, and any sighting of Black should be reported immediately."

      "No need to tell us he's no good," snorted Uncle Vernon, staring over the top of his newspaper at the prisoner. "Look at the state of him, the filthy layabout! Look at his hair!"

      He shot a nasty look sideways at Harry, whose untidy hair had always been a source of great annoyance to Uncle Vernon. Compared to the man on the television, however, whose gaunt face was surrounded by a matted, elbow-length tangle, Harry felt very well groomed indeed.

      The reporter had reappeared.

      "The Ministry of Agriculture and Fisheries will announce today --"

      "Hang on!" barked Uncle Vernon, staring furiously at the reporter. "You didn't tell us where that maniac's escaped from! What use is that? Lunatic could be coming up the street right now!"

      Aunt Petunia, who was bony and horse-faced, whipped around and peered intently out of the kitchen window. Harry knew Aunt Petunia would simply love to be the one to call the hotline number. She was the nosiest woman in the world and spent most of her life spying on the boring, law-abiding neighbors.

      "When will they learn," said Uncle Vernon, pounding the table with his large purple fist, "that hanging's the only way to deal with these people?"

      "Very true," said Aunt Petunia, who was still squinting into next door's runner beans.

      Uncle Vernon drained his teacup, glanced at his watch, and added, "I'd better be off in a minute, Petunia. Marge's train gets in at ten."

      Harry, whose thoughts had been upstairs with the Broomstick Servicing Kit, was brought back to earth with an unpleasant bump.

      "Aunt Marge?" he blurted out. "Sh - she's not coming here, is she?"

      Aunt Marge was Uncle Vernon's sister. Even though she was not a blood relative of Harry's (whose mother had been Aunt Petunia's sister), he had been forced to call her "Aunt" all his life. Aunt Marge lived in the country, in a house with a large garden, where she bred bulldogs. She didn't often stay at Privet Drive, because she couldn't bear to leave her precious dogs, but each of her visits stood out horribly vividly in Harry's mind.

      At Dudley's fifth birthday party, Aunt Marge had whacked Harry around the shins with her walking stick to stop him from beating Dudley at musical statues. A few years later, she had turned up at Christmas with a computerized robot for Dudley and a box of dog biscuits for Harry. On her last visit, the year before Harry started at Hogwarts, Harry had accidentally trodden on the tail of her favorite dog. Ripper had chased Harry out into the garden and up a tree, and Aunt Marge had refused to call him off until past midnight. The memory of this incident still brought tears of laughter to Dudley's eyes.

      "Marge'll be here for a week," Uncle Vernon snarled, "and while we're on the subject" - he pointed a fat finger threateningly at Harry - "we need to get a few things straight before I go and collect her."

      Dudley smirked and withdrew his gaze from the television. Watching Harry being bullied by Uncle Vernon was Dudley's favorite form of entertainment.

      "Firstly," growled Uncle Vernon, "you'll keep a civil tongue in your head when you're talking to Marge."

      "All right," said Harry bitterly, "if she does when she's talking to me."

      "Secondly," said Uncle Vernon, acting as though he had not heard Harry's reply, "as Marge doesn't know anything about your abnormality, I don't want any - any funny stuff while she's here. You behave yourself, got me?"

      "I will if she does," said Harry through gritted teeth.

      "And thirdly," said Uncle Vernon, his mean little eyes now slits in his great purple face, "we've told Marge you attend St. Brutus's Secure Center for Incurably Criminal Boys."

      "What?" Harry yelled.

      "And you'll be sticking to that story, boy, or there'll be trouble," spat Uncle Vernon.

      Harry sat there, white-faced and furious, staring at Uncle Vernon, hardly able to believe it. Aunt Marge coming for a week-long visit - it was the worst birthday present the Dursleys had ever given him, including that pair of Uncle Vernon's old socks.

      "Well, Petunia," said Uncle Vernon, getting heavily to his feet, "I'll be off to the station, then. Want to come along for the ride, Dudders?"

      "No," said Dudley, whose attention had returned to the television now that Uncle Vernon had finished threatening Harry.

      "Duddy's got to make himself smart for his auntie," said Aunt Petunia, smoothing Dudley's thick blond hair. "Mummy's bought him a lovely new bow tie."

      Uncle Vernon clapped Dudley on his porky shoulder.

      "See you in a bit, then," he said, and he left the kitchen.

      Harry, who had been sitting in a kind of horrified trance, had a sudden idea. Abandoning his toast, he got quickly to his feet and followed Uncle Vernon to the front door.

      Uncle Vernon was pulling on his car coat.

      "I'm not taking you," he snarled as he turned to see Harry watching him.

      "Like I wanted to come," said Harry coldly. "I want to ask you something."

      Uncle Vernon eyed him suspiciously.

      "Third years at Hog - at my school are allowed to visit the village sometimes," said Harry.

      "So?" snapped Uncle Vernon, taking his car keys from a hook next to the door.

      "I need you to sign the permission form," said Harry in a rush.

      "And why should I do that?" sneered Uncle Vernon.

      "Well," said Harry, choosing his words carefully, "it'll be hard work, pretending to Aunt Marge I go to that St. Whatsits -"

      "St. Brutus's Secure Center for Incurably Criminal Boys!" bellowed Uncle Vernon, and Harry was pleased to hear a definite note of panic in Uncle Vernon's voice.

      "Exactly," said Harry, looking calmly up into Uncle Vernon's large, purple face. "It's a lot to remember. I'll have to make it sound convincing, won't I? What if I accidentally let something slip?"

      "You'll get the stuffing knocked out of you, won't you?" roared Uncle Vernon, advancing on Harry with his fist raised. But Harry stood his ground.

      "Knocking the stuffing out of me won't make Aunt Marge forget what I could tell her," he said grimly.

      Uncle Vernon stopped, his fist still raised, his face an ugly puce.

      "But if you sign my permission form," Harry went on quickly, "I swear I'll remember where I'm supposed to go to school, and I'll act like a Mug - like I'm normal and everything."

      Harry could tell that Uncle Vernon was thinking it over, even if his teeth were bared and a vein was throbbing in his temple.

      "Right," he snapped finally. "I shall monitor your behavior carefully during Marge's visit. If, at the end of it, you've toed the line and kept to the story, I'll sign your ruddy form."

      He wheeled around, pulled open the front door, and slammed it so hard that one of the little panes of glass at the top fell out.

      Harry didn't return to the kitchen. He went back upstairs to his bedroom. If he was going to act like a real Muggle, he'd better start now. Slowly and sadly he gathered up all his presents and his birthday cards and hid them under the loose floorboard with his homework. Then he went to Hedwig's cage. Errol seemed to have recovered; he and Hedwig were both asleep, heads under their wings. Harry sighed, then poked them both awake.

      "Hedwig," he said gloomily, "you're going to have to clear off for a week. Go with Errol. Ron'll look after you. I'll write him a note, explaining. And don't look at me like that" - Hedwig's large amber eyes were reproachful - "it's not my fault. It's the only way I'll be allowed to visit Hogsmeade with Ron and Hermione."

      Ten minutes later, Errol and Hedwig (who had a note to Ron bound to her leg) soared out of the window and out of sight. Harry, now feeling thoroughly miserable, put the empty cage away inside the wardrobe.

      But Harry didn't have long to brood. In next to no time, Aunt Petunia was shrieking up the stairs for Harry to come down and get ready to welcome their guest.

      "Do something about your hair!" Aunt Petunia snapped as he reached the hall.

      Harry couldn't see the point of trying to make his hair lie flat. Aunt Marge loved criticizing him, so the untidier he looked, the happier she would be.

      All too soon, there was a crunch of gravel outside as Uncle Vernon's car pulled back into the driveway, then the clunk of the car doors and footsteps on the garden path.

      "Get the door!" Aunt Petunia hissed at Harry.

      A feeling of great gloom in his stomach, Harry pulled the door open.

      On the threshold stood Aunt Marge. She was very like Uncle Vernon: large, beefy, and purple-faced, she even had a mustache, though not as bushy as his. In one hand she held an enormous suitcase, and tucked under the other was an old and evil-tempered bulldog.

      "Where's my Dudders?" roared Aunt Marge. "Where's my neffy- poo?"

      Dudley came waddling down the hall, his blond hair plastered flat to his fat head, a bow tie just visible under his many chins. Aunt Marge thrust the suitcase into Harry's stomach, knocking the wind out of him, seized Dudley in a tight one-armed hug, and planted a large kiss on his cheek.

      Harry knew perfectly well that Dudley only put up with Aunt Marge's hugs because he was well paid for it, and sure enough, when they broke apart, Dudley had a crisp twenty-pound note clutched in his fat fist.

      "Petunia!" shouted Aunt Marge, striding past Harry as though he was a hat stand. Aunt Marge and Aunt Petunia kissed, or rather, Aunt Marge bumped her large jaw against Aunt Petunia's bony cheekbone.

      Uncle Vernon now came in, smiling jovially as he shut the door.

      "Tea, Marge?" he said. "And what will Ripper take?"

      "Ripper can have some tea out of my saucer," said Aunt Marge as they all proceeded into the kitchen, leaving Harry alone in the hall with the suitcase. But Harry wasn't complaining; any excuse not to be with Aunt Marge was fine by him, so he began to heave the case upstairs into the spare bedroom, taking as long as he could.

      By the time he got back to the kitchen, Aunt Marge had been supplied with tea and fruitcake, and Ripper was lapping noisily in the corner. Harry saw Aunt Petunia wince slightly as specks of tea and drool flecked her clean floor. Aunt Petunia hated animals.

      "Who's looking after the other dogs, Marge?" Uncle Vernon asked.

      "Oh, I've got Colonel Fubster managing them," boomed Aunt Marge. "He's retired now, good for him to have something to do. But I couldn't leave poor old Ripper. He pines if he's away from me."

      Ripper began to growl again as Harry sat down. This directed Aunt Marge's attention to Harry for the first time.

      "So!" she barked. "Still here, are you?"

      "Yes," said Harry.

      "Don't you say 'yes' in that ungrateful tone," Aunt Marge growled. "It's damn good of Vernon and Petunia to keep you. Wouldn't have done it myself. You'd have gone straight to an orphanage if you'd been dumped on my doorstep."

      Harry was bursting to say that he'd rather live in an orphanage than with the Dursleys, but the thought of the Hogsmeade form stopped him. He forced his face into a painful smile.

      "Don't you smirk at me!" boomed Aunt Marge. "I can see you haven't improved since I last saw you. I hoped school would knock some manners into you." She took a large gulp of tea, wiped her mustache, and said, "Where is it that you send him, again, Vernon?"

      "St. Brutus's," said Uncle Vernon promptly. "It's a first-rate institution for hopeless cases."

      "I see," said Aunt Marge. "Do they use the cane at St. Brutus's, boy?" she barked across the table.

      "Er -"

      Uncle Vernon nodded curtly behind Aunt Marge's back.

      "Yes," said Harry. Then, feeling he might as well do the thing properly, he added, "all the time."

      "Excellent," said Aunt Marge. "I won't have this namby-pamby, wishy-washy nonsense about not hitting people who deserve it. A good thrashing is what's needed in ninety-nine cases out of a hundred. Have you been beaten often?"

      "Oh, yeah," said Harry, "loads of times."

      Aunt Marge narrowed her eyes.

      "I still don't like your tone, boy," she said. "If you can speak of your beatings in that casual way, they clearly aren't hitting you hard enough. Petunia, I'd write if I were you. Make it clear that you approve the use of extreme force in this boy's case."

      Perhaps Uncle Vernon was worried that Harry might forget their bargain; in any case, he changed the subject abruptly.

      "Heard the news this morning, Marge? What about that escaped prisoner, eh?"

      As Aunt Marge started to make herself at home, Harry caught himself thinking almost longingly of life at number four without her. Uncle Vernon and Aunt Petunia usually encouraged Harry to stay out of their way, which Harry was only too happy to do. Aunt Marge, on the other hand, wanted Harry under her eye at all times, so that she could boom out suggestions for his improvement. She delighted in comparing Harry with Dudley, and took huge pleasure in buying Dudley expensive presents while glaring at Harry, as though daring him to ask why he hadn't got a present too. She also kept throwing out dark hints about what made Harry such an unsatisfactory person.

      "You mustn't blame yourself for the way the boy's turned out, Vernon," she said over lunch on the third day. "If there's something rotten on the inside, there's nothing anyone can do about it."

      Harry tried to concentrate on his food, but his hands shook and his face was starting to burn with anger. Remember the form, he told himself. Think about Hogsmeade. Don't say anything. Don't rise --

      Aunt Marge reached for her glass of wine.

      "It's one of the basic rules of breeding," she said. "You see it all the time with dogs. If there's something wrong with the bitch, there'll be something wrong with the pup -"

      At that moment, the wineglass Aunt Marge was holding exploded in her hand. Shards of glass flew in every direction and Aunt Marge sputtered and blinked, her great ruddy face dripping.

      "Marge!" squealed Aunt Petunia. "Marge, are you all right?"

      "Not to worry," grunted Aunt Marge, mopping her face with her napkin. "Must have squeezed it too hard. Did the same thing at Colonel Fubster's the other day. No need to fuss, Petunia, I have a very firm grip ..."

      But Aunt Petunia and Uncle Vernon were both looking at Harry suspiciously, so he decided he'd better skip dessert and escape from the table as soon as he could.

      Outside in the hall, he leaned against the wall, breathing deeply. It had been a long time since he'd lost control and made something explode. He couldn't afford to let it happen again. The Hogsmeade form wasn't the only thing at stake - if he carried on like that, he'd be in trouble with the Ministry of Magic.

      Harry was still an underage wizard, and he was forbidden by wizard law to do magic outside school. His record wasn't exactly clean either. Only last summer he'd gotten an official warning that had stated quite clearly that if the Ministry got wind of any more magic in Privet Drive, Harry would face expulsion from Hogwarts.

      He heard the Dursleys leaving the table and hurried upstairs out of the way.

      Harry got through the next three days by forcing himself to think about his Handbook of Do-It-Yourself Broomcare whenever Aunt Marge started on him. This worked quite well, though it seemed to give him a glazed look, because Aunt Marge started voicing the opinion that he was mentally subnormal.

      At last, at long last, the final evening of Marge's stay arrived. Aunt Petunia cooked a fancy dinner and Uncle Vernon uncorked several bottles of wine. They got all the way through the soup and the salmon without a single mention of Harry's faults; during the lemon meringue pie, Uncle Vernon bored them all with a long talk about Grunnings, his drill-making company; then Aunt Petunia made coffee and Uncle Vernon brought out a bottle of brandy.

      "Can I tempt you, Marge?"

      Aunt Marge had already had quite a lot of wine. Her huge face was very red.

      "Just a small one, then," she chuckled. "A bit more than that . . . and a bit more . . . that's the ticket."

      Dudley was eating his fourth slice of pie. Aunt Petunia was sipping coffee with her little finger sticking out. Harry really wanted to disappear into his bedroom, but he met Uncle Vernon's angry little eyes and knew he would have to sit it out.

      "Aah," said Aunt Marge, smacking her lips and putting the empty brandy glass back down. "Excellent nosh, Petunia. It's normally just a fry-up for me of an evening, with twelve dogs to look after. . . ." She burped richly and patted her great tweed stomach. "Pardon me. But I do like to see a healthy-sized boy," she went on, winking at Dudley. "You'll be a proper-sized man, Dudders, like your father. Yes, I'll have a spot more brandy, Vernon. . . ."

      "Now, this one here -"

      She jerked her head at Harry, who felt his stomach clench. The Handbook, he thought quickly.

      "This one's got a mean, runty look about him. You get that with dogs. I had Colonel Fubster drown one last year. Ratty little thing it was. Weak. Underbred."

      Harry was trying to remember page twelve of his book: A Charm to Cure Reluctant Reversers.

      "It all comes down to blood, as I was saying the other day. Bad blood will out. Now, I'm saying nothing against your family, Petunia" - she patted Aunt Petunia's bony hand with her shovel-like one - "but your sister was a bad egg. They turn up in the best families. Then she ran off with a wastrel and here's the result right in front of us."

      Harry was staring at his plate, a funny ringing in his ears. Grasp your broom firmly by the tail, he thought. But he couldn't remember what came next. Aunt Marge's voice seemed to be boring into him like one of Uncle Vernon's drills.

      "This Potter," said Aunt Marge loudly, seizing the brandy bottle and splashing more into her glass and over the tablecloth, "you never told me what he did?"

      Uncle Vernon and Aunt Petunia were looking extremely tense. Dudley had even looked up from his pie to gape at his parents.

      "He - didn't work," said Uncle Vernon, with half a glance at Harry. "Unemployed."

      "As I expected!" said Aunt Marge, taking a huge swig of brandy and wiping her chin on her sleeve. "A no-account, good-for-nothing, lazy scrounger who -"

      "He was not," said Harry suddenly. The table went very quiet. Harry was shaking all over. He had never felt so angry in his life.

      "MORE BRANDY!" yelled Uncle Vernon, who had gone very white. He emptied the bottle into Aunt Marge's glass. "You, boy," he snarled at Harry. "Go to bed, go on -"

      "No, Vernon," hiccuped Aunt Marge, holding up a hand, her tiny bloodshot eyes fixed on Harry's. "Go on, boy, go on. Proud of your parents, are you? They go and get themselves killed in a car crash (drunk, I expect) -"

      "They didn't die in a car crash!" said Harry, who found himself on his feet.

      "They died in a car crash, you nasty little liar, and left you to be a burden on their decent, hardworking relatives!" screamed Aunt Marge, swelling with fury. "You are an insolent, ungrateful little --"

      But Aunt Marge suddenly stopped speaking. For a moment, it looked as though words had failed her. She seemed to be swelling with inexpressible anger - but the swelling didn't stop. Her great red face started to expand, her tiny eyes bulged, and her mouth stretched too tightly for speech - next second, several buttons had just burst from her tweed jacket and pinged off the walls - she was inflating like a monstrous balloon, her stomach bursting free of her tweed waistband, each of her fingers blowing up like a salami --

      "MARGE!" yelled Uncle Vernon and Aunt Petunia together as Aunt Marge's whole body began to rise off her chair toward the ceiling. She was entirely round, now, like a vast life buoy with piggy eyes, and her hands and feet stuck out weirdly as she drifted up into the air, making apoplectic popping noises. Ripper came skidding into the room, barking madly.

      "NOOOOOOO!"

      Uncle Vernon seized one of Marge's feet and tried to pull her down again, but was almost lifted from the floor himself. A second later, Ripper leapt forward and sank his teeth into Uncle Vernon's leg.

      Harry tore from the dining room before anyone could stop him, heading for the cupboard under the stairs. The cupboard door burst magically open as he reached it. In seconds, he had heaved his trunk to the front door. He sprinted upstairs and threw himself under the bed, wrenching up the loose floorboard, and grabbed the pillowcase full of his books and birthday presents. He wriggled out, seized Hedwig's empty cage, and dashed back downstairs to his trunk, just as Uncle Vernon burst out of the dining room, his trouser leg in bloody tatters.

      "COME BACK IN HERE!" he bellowed. "COME BACK AND PUT HER RIGHT!"

      But a reckless rage had come over Harry. He kicked his trunk open, pulled out his wand, and pointed it at Uncle Vernon.

      "She deserved it," Harry said, breathing very fast. "She deserved what she got. You keep away from me."

      He fumbled behind him for the latch on the door.

      "I'm going," Harry said. "I've had enough."

      And in the next moment, he was out in the dark, quiet street, heaving his heavy trunk behind him, Hedwig's cage under his arm.`,
      sourceURL:
        'https://www.bookbrowse.com/excerpts/index.cfm/book_number/451/harry-potter-the-prisoner-of-azkaban#excerpt',
      imageURL: 'https://www.bookbrowse.com/images/jackets-p/9780439136365.jpg',
    });
    //add two-three more book options
    const sirensOfTitan = await Book.create({
      title: 'The Sirens of Titan',
      author: 'Kurt Vonnegut',
      excerpt: `Between Timid and Timbuktu

      "I guess somebody up there likes me."—Malachi Constant


      Everyone now knows how to find the meaning of life within himself.

      But mankind wasn't always so lucky. Less than a century ago men and women did not have easy access to the puzzle boxes within them.

      They could not name even one of the fifty-three portals to the soul.

      Gimcrack religions were big business.

      Mankind, ignorant of the truths that lie within every human being, looked outward–pushed ever outward. What mankind hoped to learn in its outward push was who was actually in charge of all creation, and what all creation was all about.

      Mankind flung its advance agents ever outward, ever outward. Eventually it flung them out into space, into the colorless, tasteless, weightless sea of outwardness without end.

      It flung them like stones.

      These unhappy agents found what had already been found in abundance on Earth—a nightmare of meaninglessness without end. The bounties of space, of infinite outwardness, were three: empty heroics, low comedy, and pointless death.

      Outwardness lost, at last, its imagined attractions.

      Only inwardness remained to be explored.

      Only the human soul remained terra incognita.

      This was the beginning of goodness and wisdom.

      What were people like in olden times, with their souls as yet unexplored?

      The following is a true story from the Nightmare Ages, falling roughly, give or take a few years, between the Second World War and the Third Great Depression.

      There was a crowd.

      The crowd had gathered because there was to be a materialization. A man and his dog were going to materialize, were going to appear out of thin air—wispily at first, becoming, finally, as substantial as any man and dog alive.

      The crowd wasn't going to get to see the materialization. The materialization was strictly a private affair on private property, and the crowd was empthatically not invited to feast its eyes.

      The materialization was going to take place, like a modern, civilized hanging, within high, blank, guarded walls. And the crowd outside the walls was very much like a crowd outside the walls at a hanging.

      The crowd knew it wasn't going to see anything, yet its members found pleasure in being near, in staring at the blank walls and imagining what was happening inside. The mysteries of the materialization, like the mysteries of a hanging, were enhanced by the wall; were made pornographic by the magic lantern slides of morbid imaginations—magic lantern slides projected by the crowd on the blank stone walls.

      The town was Newport, Rhode Island, U.S.A., Earth, Solar System, Milky Way. The walls were those of the Rumfoord estate.

      Ten minutes before the materialization was to take place, agents of the police spread the rumor that the materialization had happened prematurely, had happened outside the walls, and that the man and his dog could be seen plain as day two blocks away. The crowd galloped away to see the miracle at the intersection.

      The crowd was crazy about miracles.

      At the tail end of the crowd was a woman who weighed three hundred pounds. She had a goiter, a caramel apple, and a gray little six-year-old girl. She had the little girl by the hand and was jerking her this way and that, like a ball on the end of a rubber band. "Wanda June," she said, "if you don't start acting right, I'm never going to take you to a materialization again."

      The materializations had been happening for nine years, once every fifty-nine days. The most learned and trustworthy men in the world had begged heartbrokenly for the privilege of seeing a materialization. No matter how the great men worded their requests, they were turned down cold. The refusal was always the same, handwritten by Mrs. Rumfoord's social secretary.

      Mrs. Winston Niles Rumfoord asks me to inform you that she is unable to extend the invitation you request. She is sure you will understand her feeling in the matter: that the phenomenon you wish to observe is a tragic family affair, hardly a fit subject for the scrutiny of outsiders, no matter how nobly motivated their curiosities.

      Mrs. Rumfoord and her staff answered none of the tens of thousands of questions that were put to them about the materializations. Mrs. Rumfoord felt that she owed the world very little indeed in the way of information. She discharged that incalculably small obligation by issuing a report twenty-four hours after each materialization. Her report never exceeded one hundred words. It was posted by her butler in a glass case bolted to the wall next to the one entrance to the estate.

      The one entrance to the estate was an Alice-in-Wonderland door in the west wall. The door was only four-and-a-half feet high. It was made of iron and held shut by a great Yale lock.

      The wide gates of the estate were bricked in.

      The reports that appeared in the glass case by the iron door were uniformly bleak and peevish. They contained information that only served to sadden anyone with a shred of curiosity. They told the exact time at which Mrs. Rumfoord's husband Winston and his dog Kazak materialized, and the exact time at which they dematerialized. The states of health of the man and his dog were invariably appraised as good. The reports implied that Mrs. Rumfoord's husband could see the past and the future clearly, but they neglected to give examples of sights in either direction.

      Now the crowd had been decoyed away from the estate to permit the untroubled arrival of a rented limousine at the small iron door in the west wall. A slender man in the clothes of an Edwardian dandy got out of the limousine and showed a paper to the policeman guarding the door. He was disguised by dark glasses and a false beard.

      The policeman nodded, and the man unlocked the door himself with a key from his pocket. He ducked inside, and slammed the door behind himself with a clang.

      The limousine drew away.

      Beware of the dog! said a sign over the small iron door. The fires of the summer sunset flickered among the razors and needles of broken glass set in concrete on the top of the wall.

      The man who had let himself in was the first person ever invited by Mrs. Rumfoord to a materialization. He was not a great scientist. He was not even well-educated. He had been thrown out of the University of Virginia in the middle of his freshman year. He was Malachi Constant of Hollywood, California, the richest American—and a notorious rakehell.

      Beware of the dog! the sign outside the small iron door had said. But inside the wall there was only a dog's skeleton. It wore a cruelly spiked collar that was chained to the wall. It was the skeleton of a very large dog—a mastiff. Its long teeth meshed. Its skull and jaws formed a cunningly articulated, harmless working model of a flesh-ripping machine. The jaws closed so—clack. Here had been the bright eyes, there the keen ears, there the suspicious nostrils, there the carnivore's brain. Ropes of muscle had hooked here and here, had brought the teeth together in flesh so—clack.

      The skeleton was symbolic—a prop, a conversation piece installed by a woman who spoke to almost no one. No dog had died at its post there by the wall. Mrs. Rumfoord had bought the bones from a veterinarian, had had them bleached and varnished and wired together. The skeleton was one of Mrs. Rumfoord's many bitter and obscure comments on the nasty tricks time and her husband had played on her.

      Mrs. Winston Niles Rumfoord had seventeen million dollars. Mrs. Winston Niles Rumfoord had the highest social position attainable in the United States of America. Mrs. Winston Niles Rumfoord was healthy and handsome, and talented, too.

      Her talent was a poetess. She had published anonymously a slim volume of poems called Between Timid and Timbuktu. It had been reasonably well received.

      The title derived from the fact that all the words between timid and Timbuktu in very small dictionaries relate to time.

      But, well-endowed as Mrs. Rumfoord was, she still did troubled things like chaining a dog's skeleton to the wall, like having the gates of the estate bricked up, like letting the famous formal gardens turn into New England jungle.

      The moral: Money, position, health, handsomeness, and talent aren't everything.

      Malachi Constant, the richest American, locked the Alice-in-Wonderland door behind him. He hung his dark glasses and false beard on the ivy of the wall. He passed the dog's skeleton briskly, looking at his solar-powered watch as he did so. In seven minutes, a live mastiff named Kazak would materialize and roam the grounds.

      "Kazak bites," Mrs. Rumfoord had said in her invitation, "so please be punctual."

      Constant smiled at that--the warning to be punctual. To be punctual meant to exist as a point, meant that as well as to arrive somewhere on time. Constant existed as a point—could not imagine what it would be like to exist in any other way.

      That was one of the things he was going to find out—what it was like to exist in any other way. Mrs. Rumfoord's husband existed in another way.

      Winston Niles Rumfoord had run his private space ship right into the heart of an uncharted chrono-synclastic infundibulum two days out of Mars. Only his dog had been along. Now Winston Niles Rumfoord and his dog Kazak existed as wave phenomena—apparently pulsing in a distorted spiral with its origin in the Sun and its terminal in Betelgeuse.

      The earth was about to intercept that spiral.

      Almost any brief explanation of chrono-synclastic infundibula is certain to be offensive to specialists in the field. Be that as it may, the best brief explanation is probably that of Dr. Cyril Hall, which appears in the fourteenth edition of A Child's Cyclopedia of Wonders and Things to Do. The article is here reproduced in full, with gracious permission from the publishers:

      Chrono-Synclastic Infundibula—Just imagine that your Daddy is the smartest man who ever lived on Earth, and he knows everything there is to find out, and he is exactly right about everything, and he can prove he is right about everything. Now imagine another little child on some nice world a million light years away, and that little child's Daddy is the smartest man who ever lived on that nice world so far away. And he is just as smart and just as right as your Daddy is. Both Daddies are smart, and both Daddies are right.

      Only if they ever met each other they would get into a terrible argument, because they wouldn't agree on anything. Now, you can say that your Daddy is right and the other little child's Daddy is wrong, but the Universe is an awfully big place. There is room enough for an awful lot of people to be right about things and still not agree.

      The reason both Daddies can be right and still get into terrible fights is because there are so many different ways of being right. There are places in the Universe, though, where each Daddy could finally catch on to what the other Daddy was talking about. These places are where all the different kinds of truths fit together as nicely as the parts in your Daddy's solar watch. We call these places chrono-synclastic infundibula.

      The Solar System seems to be full of chrono-synclastic infundibula. There is one great big one we are sure of that likes to stay between Earth and Mars. We know about that one because an Earth man and his Earth dog ran right into it.

      You might think it would be nice to go to a chrono-synclastic infundibulum and see all the different ways to be absolutely right, but it is a very dangerous thing to do. The poor man and his poor dog are scattered far and wide, not just through space, but through time, too.

      Chrono (kroh-no) means time. Synclastic (sin-classtick) means curved toward the same side in all directions, like the skin of an orange. Infundibulum (in-fun-dib-u-lum) is what the ancient Romans like Julius Caesar and Nero called a funnel. If you don't know what a funnel is, get Mommy to show you one.

      The key to the Alice-in-Wonderland door had come with the invitation. Malachi Constant slipped the key into his fur-lined trouser pocket and followed the one path that opened before him. He walked in deep shadow, but the flat rays of the sunset filled the treetops with a Maxfield Parrish light.

      Constant made small motions with his invitation as he proceeded, expecting to be challenged at every turn. The invitation's ink was violet. Mrs. Rumfoord was only thirty-four, but she wrote like an old woman—in a kinky, barbed hand. She plainly detested Constant, whom she had never met. The spirit of the invitation was reluctant, to say the least, as though written on a soiled handkerchief.

      "During my husband's last materialization," she had said in the invitation, "he insisted that you be present for the next. I was unable to dissuade him from this, despite the many obvious drawbacks. He insists that he knows you well, having met you on Titan, which, I am given to understand, is a moon of the planet Saturn."

      There was hardly a sentence in the invitation that did not contain the verb insist. Mrs. Rumfoord's husband had insisted on her doing something very much against her own judgment, and she in turn was insisting that Malachi Constant behave, as best he could, like the gentleman he was not.

      Malachi Constant had never been to Titan. He had never, so far as he knew, been outside the gaseous envelope of his native planet, the Earth. Apparently he was about to learn otherwise.

      The turns in the path were many, and the visibility was short. Constant was following a damp green path the width of a lawn mower—what was in fact the swath of a lawn mower. Rising on both sides of the path were the green walls of the jungle the gardens had become.

      The mower's swath skirted a dry fountain. The man who ran the mower had become creative at this point, had made the path fork. Constant could choose the side of the fountain on which he preferred to pass. Constant stopped at the fork, looked up. The fountain itself was marvelously creative. It was a cone described by many stone bowls of decreasing diameters. The bowls were collars on a cylindrical shaft forty feet high.

      Impulsively, Constant chose neither one fork nor the other, but climbed the fountain itself. He climbed from bowl to bowl, intending when he got to the top to see whence he had come and whither he was bound.

      Standing now in the topmost, in the smallest of the baroque fountain's bowls, standing with his feet in the ruins of birds' nests, Malachi Constant looked out over the estate, and over a large part of Newport and Narragansett Bay. He held up his watch to sunlight, letting it drink in the wherewithal that was to solar watches what money was to Earth men.

      The freshening sea breeze ruffled Constant's blue-black hair. He was a well-made man—a light heavy-weight, dark-skinned, with poet's lips, with soft brown eyes in the shaded caves of a Cro-Magnon brow-ridge. He was thirty-one.

      He was worth three billion dollars, much of it inherited.

      His name meant faithful messenger.

      He was a speculator, mostly in corporate securities.

      In the depressions that always followed his taking of alcohol, narcotics, and women, Constant pined for just one thing—a single message that was sufficiently dignified and important to merit his carrying it humbly between two points.

      The motto under the coat of arms that Constant had designed for himself said simply, The Messenger Awaits.

      What Constant had in mind, presumably, was a first-class message from God to someone equally distinguished.

      Constant looked at his solar watch again. He had two minutes in which to climb down and reach the house—two minutes before Kazak would materialize and look for strangers to bite. Constant laughed to himself, thinking how delighted Mrs. Rumfoord would be were the vulgar, parvenu Mr. Constant of Hollywood to spend his entire visit treed on the fountain by a thoroughbred dog. Mrs. Rumfoord might even have the fountain turned on.

      It was possible that she was watching Constant. The mansion was a minute's walk from the fountain—set off from the jungle by a mowed swath three times the width of the path.

      The Rumfoord mansion was marble, an extended reproduction of the banqueting hall of Whitehall Palace in London. The mansion, like most of the really grand ones in Newport, was a collateral relative of post offices and Federal court buildings throughout the land.

      The Rumfoord mansion was an hilariously impressive expression of the concept: People of substance. It was surely one of the greatest essays on density since the Great Pyramid of Khufu. In a way it was a better essay on permanence than the Great Pyramid, since the Great Pyramid tapered to nothingness as it approached heaven. Nothing about the Rumfoord mansion diminished as it approached heaven. Turned upside down, it would have looked exactly the same.

      The density and permanence of the mansion were, of course, at ironic variance with the fact that the quondam master of the house, except for one hour in every fifty-nine days, was no more substantial than a moonbeam.

      Constant climbed down from the fountain, stepping onto the rims of bowls of every-increasing sizes. When he got to the bottom, he was filled with a strong wish to see the fountain go. He thought of the crowd outside, thought of how they, too, would enjoy seeing the fountain go. They would be enthralled—watching the teeny-weeny bowl at the tippy-tippy top brimming over into the next little bowl . . . and the next little bowl's brimming over into the next little bowl . . . and the next little bowl's brimming over into the next little bowl . . . and on and on and on, a rhapsody of brimming, each bowl singing its own merry water song. And yawning under all those bowls was the upturned mouth of the biggest bowl of them all . . . a regular Beelzebub of a bowl, bone dry and insatiable . . . waiting, waiting, waiting for that first sweet drop.

      Constant was rapt, imagining that the fountain was running. The fountain was very much like an hallucination--and hallucinations, usually drug-induced, were almost all that could surprise and entertain Constant any more.

      Time passed quickly. Constant did not move.

      Somewhere on the estate a mastiff bayed. The baying sounded like the blows of a maul on a great bronze gong.

      Constant awoke from his contemplation of the fountain. The baying could only be that of Kazak, the hound of space. Kazak had materialized. Kazak smelled the blood of a parvenu.

      Constant sprinted the remainder of the distance to the house.

      An ancient butler in knee breeches opened the door for Malachi Constant of Hollywood. The butler was weeping for joy. He was pointing into a room that Constant could not see. The butler was trying to describe the thing that made him so happy and full of tears. He could not speak. His jaw was palsied, and all he could say to Constant was, "Putt putt—putt putt putt."

      The floor of the foyer was a mosaic, showing the signs of the zodiac encircling a golden sun.

      Winston Niles Rumfoord, who had materialized only a minute before, came into the foyer and stood on the sun. He was much taller and heavier than Malachi Constant--and he was the first person who had ever made Constant think that there might actually be a person superior to himself. Winston Niles Rumfoord extended his soft hand, greeted Constant familiarly, almost singing his greeting in a glottal Groton tenor.

      "Delighted, delighted, delighted, Mr. Constant," said Rumfoord. "How nice of you to commmmmmmmmme."

      "My pleasure," said Constant.

      "They tell me you are possibly the luckiest man who ever lived."

      "That might be putting it a little too strong," said Constant.

      "You won't deny you've had fantastically good luck financially," said Rumfoord.

      Constant shook his head. "No. That would be hard to deny," he said.

      "And to what do you attribute this wonderful luck of yours?" said Rumfoord.

      Constant shrugged. "Who knows?" he said. "I guess somebody up there likes me," he said.

      Rumfoord looked up at the ceiling. "What a charming concept--someone's liking you up there."

      Constant, who had been shaking hands with Rumfoord during the conversation, thought of his own hand, suddenly, as small and clawlike.

      Rumfoord's palm was callused, but not horny like the palm of a man doomed to a single trade for all of his days. The calluses were perfectly even, made by the thousand happy labors of an active leisure class.

      For a moment, Constant forgot that the man whose hand he shook was simply one aspect, one node of a wave phenomenon extending all the way from the Sun to Betelgeuse. The handshake reminded Constant what it was that he was touching--for his hand tingled with a small but unmistakable electrical flow.`,
      sourceURL:
        'https://www.penguinrandomhouse.ca/books/184346/the-sirens-of-titan-by-kurt-vonnegut/9780385333498/excerpt',
      imageURL: 'https://images.randomhouse.com/cover/9780385333498?width=210',
    });
    const aStormOfSwords = await Book.create({
      title: 'A Storm of Swords',
      author: 'George R R. Martin',
      excerptTitle: 'Prologue',
      excerpt: `The day was grey and bitter cold, and the dogs would not take the scent.

      The big black bitch had taken one sniff at the bear tracks, backed off, and skulked back to the pack with her tail between her legs. The dogs huddled together miserably on the riverbank as the wind snapped at them. Chett felt it too, biting through his layers of black wool and boiled leather. It was too bloody cold for man or beast, but here they were. His mouth twisted, and he could almost feel the boils that covered his cheeks and neck growing red and angry. I should be safe back at the Wall, tending the bloody ravens and making fires for old Maester Aemon. It was the bastard Jon Snow who had taken that from him, him and his fat friend Sam Tarly. It was their fault he was here, freezing his bloody balls off with a pack of hounds deep in the haunted forest.

      "Seven hells." He gave the leashes a hard yank to get the dogs' attention. "Track, you bastards. That's a bear print. You want some meat or no? Find!" But the hounds only huddled closer, whining. Chett snapped his short lash above their heads, and the black bitch snarled at him. "Dog meat would taste as good as bear," he warned her, his breath frosting with every word.

      Lark the Sisterman stood with his arms crossed over his chest and his hands tucked up into his armpits. He wore black wool gloves, but he was always complaining about how his fingers were frozen. "It's too bloody cold to hunt," he said. "Bugger this bear, he's not worth freezing over."

      "We can't go back empty-handed, Lark," rumbled Small Paul through the brown whiskers that covered most of his face. "The Lord Commander wouldn't like that." There was ice under the big man's squashed pug nose, where his snot had frozen. A huge hand in a thick fur glove clenched tight around the shaft of a spear.

      "Bugger that Old Bear, too," said the Sisterman, a thin man with sharp features and nervous eyes. "Mormont will be dead before daybreak, remember? Who cares what he likes?"

      Small Paul blinked his black little eyes. Maybe he had forgotten, Chett thought; he was stupid enough to forget most anything. "Why do we have to kill the Old Bear? Why don't we just go off and let him be?"

      "You think he'll let us be?" said Lark. "He'll hunt us down. You want to be hunted, you great muttonhead?"

      "No," said Small Paul. "I don't want that. I don't."

      "So you'll kills him?" said Lark.

      "Yes." The huge man stamped the butt of his spear on the frozen riverbank. "I will. He shouldn't hunt us."

      The Sisterman took his hands from hi armpits and turned to Chett. "We need to kill all the officers, I say."

      Chett was sick of hearing it. "We been over this. The Old Bear dies, and Blane from the Shadow Tower. Grubbs and Aethan as well, their ill luck for drawing the watch, Dwyen and Bannen for their tracking, and Ser Piggy for the ravens. That's all. We kill them quiet, while they sleep. One scream and we're wormfood, every one of us." His boils were red with rage. "Just do your bit and see that your cousins do theirs. And Paul, try and remember, it's third watch, not second."

      "Third watch," the big man said, through hair and frozen snot. "Me and Softfoot. I remember, Chett."

      The moon would be black tonight, and they had jiggered the watches so as to have eight of their own standing sentry, with two more guarding the horses. It wasn't going to get much riper than that. Besides, the wildlings could be upon them any day now. Chett meant to be well away from here before that happened. He meant to live.

      Three hundred sworn brothers of the Night's Watch had ridden north, two hundred from Castle Black and another hundred from the Shadow Tower. It was the biggest ranging in living memory, near a third of the Watch's strength. The meant to find Ben Stark, Ser Waymar Royce, and the other rangers who'd gone missing, and discover why the wildlings were leaving their villages. Well, they were no closer to Stark and Royce than when they'd left the Wall, but they'd learned where all the wildlings had gone—up into the icy heights of the godforsaken Frostfangs. They could squat up there till the end of time and it wouldn't prick Chett's boils none.

      But no. They were coming down. Down the Milkwater.

      Chett raised his eyes and there it was. The river's stony banks were bearded by ice, its pale milky waters flowing endlessly down out of the Frostfangs. And now Mance Rayder and his wildlings were flowing down the same way. Thoren Smallwood had returned in a lather three days past. While he was telling the Old Bear what his scouts had seen his man Kedge Whiteye told the rest of them. "They're still well up the foothills, but they're coming," Kedge said, warming his hands over the fire. "Harma the Dogshead has he van, the poxy bitch. Goady crept up on her camp and saw her plain by the fire. That fool Tumberjon wanted to pick her off with an arrow, but Smallwood had better sense."

      Chett spat. "How many were there, could you tell?"

      "Many and more. Twenty, thirty thousand, we didn't stay to count. Harma had five hundred in the van, every one ahorse."

      The men around the fire exchanged uneasy looks. It was a rare thing to find even a dozen mounted wildlings, and five hundred…

      "Smallwood sent Bannen and me wide around the van to catch a peek at the main body," Kedge went on. "There was no end of them. They're moving slow as a frozen river, four five miles a day, but they don't look like they mean to go back to their villages neither. More'n half were women and children, and they were driving their animals before them, goats, sheep, even aurochs dragging sledges. They'd loaded up with bales of fur and sides of meat, cage of chickens, butter churns and spinning wheels, every damn thing they own. The mules and garrons was so heavy laden you'd think their backs would break. The women as well."

      "And they followed the Milkwater?" Lark the Sisterman asked.

      "I said so, didn't I?"

      The Milkwater would take them past the Fist of the First Men, the ancient ringfort where the Night's Watch had made its camp. Any man with a thimble of sense could see that it was time to pull up stakes and fall back on the Wall. The Old Bear had strengthened the Fist with spikes and pits and caltrops, but against such a host all that was pointless. If they stayed here, they would be engulfed and overwhelmed.

      And Thoren Smallwood wanted to attack. Sweet Donnel Hill was squire to Ser Mallador Locke, and the night before last Smallwood had come to Locke's tent. Ser Mallador had been of the same mind as old Ser Ottyn Wythers, urging a retreat on the Wall, but Smallwood wanted to convince him otherwise. "This King-beyond-the-Wall will never look for us so far north," Sweet Donnel reported him saying. "And this great host of his is a shambling horde, full of useless mouths who won't know what end of a sword to hole. One blow will take all the fight out of them and send them howling back to their hovels for another fifty years."

      Three hundred against thirty thousand. Chett called that rank madness, and what was madder still was that Ser Mallador had been persuaded, and the two of them together were on the point of persuading the Old Bear. "If we wait too long, this chance may be lost, never to come again," Smallwood was saying to anyone who would listen. Against that, Ser Ottyn Wythers said, "We are the shield that guards the realms of men. You do not throw away your shield for no good purpose," but to that Thoren Smallwood said, "In a swordfight, a man's surest defense is the swift stroke that slays his foe, not cringing behind a shield."

      Neither Smallwood nor Wythers had the command, though. Lord Mormont did, and Mormont was waiting for his other scouts, for Jarman Buckwell and the men who'd climbed the Giant's Stair, and for Qhorin Halfhand and Jon Snow, who'd gone to probe the Skirling Pass. Buckwell and the Halfhand were late in returning, though. Dead, most like. Chett pictured Jon Snow lying blue and frozen on some bleak mountaintop with a wildling spear up his bastard's arse. The thought made him smile. I hope they killed his bloody wolf as well.

      "There's no bear here," he decided abruptly. "Just an old print, that's all. Back to the Fist." The dogs almost yanked him off his feet, as eager to get back as he was. Maybe they thought they were going to get fed. Chett had to laugh. He hadn't fed them for three days now, to turn them mean and hungry. Tonight, before slipping off into the dark, he'd turn them loose among the horse lines, after Sweet Donnel Hill and Clubfoot Karl cut the tethers. They'll have snarling hounds and panicked horses all over the Fist, running through fires, jumping the ringwall, and trampling down tents. With all the confusion, it might be hours before anyone noticed that fourteen brothers were missing.

      Lark had wanted to bring in twice that number, but what could you expect from some stupid fishbreath Sisterman? Whisper a word in the wrong ear and before you know it you'd be short a head. No, fourteen was a good number, enough to do what needed doing but not so many that they couldn't keep the secret. Chett had recruited most of them himself. Small Paul was one of his; the strongest man on the Wall, even if he was slower than a dead snail. He'd once broken a wildling's back with a hug. They had Dirk as well, named for his favorite weapon, and the little grey man the brothers called Softfoot, who'd raped a hundred women in his youth, and liked to boast how none had never seen nor heard him until he shoved it up inside them.

      The plan was Chett's. He was the clever one; he'd been steward to old Maester Aemon for four good years before that bastard Jon Snow had done him out so his job could be handed to his fat pig of a friend. When he killed Sam Tarly tonight, he planned to whisper, "Give my love to Lord Snow," right in his ear before he sliced Ser Piggy's throat open to let the blood come bubbling out through all those layers of suet. Chett knew the ravens, so he wouldn't have no trouble there, no more than he would with Tarly. One touch of the knife and that craven would piss his pants and start blubbering for his life. Let him beg, it won't do him no good. After he opened his throat, he'd open the cages and shoo the birds away, so no messages reached the Wall. Softfoot and Small Paul will kill the Old Bear, Dirk would do Blane, and Lark and his cousins would silence Bannen and old Dwyen, to keep them from sniffing after their trail. They'd been caching good for a fortnight, and Sweet Donnel and Clubfoot Karl would have the horses ready. With Mormont dead, command would pass to Ser Ottyn Wythers, an old done man, and failing. He'll be running for the Wall before sundown, and he won't waste no men sending them after us neither.

      The dogs pulled at him as they made their way through the trees. Chett could see the Fist punching its way up through the green. The day was so dark that the Old Bear had the torches lit, a great circle of them burning all along the ringwall that crowned the top of the steep stony hill. The three of them waded across a brook. The water was icy cold, and patches of ice were spreading across its surface. "I'm going to make for the coast," Lark the Sisterman confided. "Me and my cousins. We'll build us a boat, sail back home to the Sisters."

      And at home they'll know you for deserters and lop off your fool heads, thought Chett. There was no leaving the Night's Watch, once you said your words. Anywhere in the Seven Kingdoms, they'd take you and kill you. Ollo Lophand now, he was talking about sailing back to Tyrosh, where he claimed men didn't lose their hands for a bit of honest thievery, nor get sent off to freeze their life away for being found in bed with some knight's wife. Chett had weighed going with him, but he didn't speak their wet girly tongue. And what could he do in Tyrosh? He had no trade to speak of, growing up in Hag's Mire. His father had spent his life grubbing in other men's fields and collecting leeches. He'd strip down bare but for a thick leather clout, and go wading tin the murky waters. When he climbed out he'd be covered from nipple to ankle. Sometimes he made Chett help pull the leeches off. One had attached itself to his palm once, and he'd smashed it against a wall in revulsion. His father beat him bloody for that. The maesters bought the leeches at twelve-for-a-penny.

      Lark could go home if he liked, and the damn Tyroshi too, but not Chett. If he never saw Hag's Mire again, it would be too bloody soon. He had liked the look of Craster's Keep, himself. That would be a laugh. Chett the leechman's son, a lord with a keep. His banner could be a dozen leeches on a field of pink. But why stop at lord? Maybe he should be a king. Mance Rayder started out a crow. I could be a king same as him, and have me some wives. Craster had nineteen, not even counting the young ones, the daughters he hadn't gotten around to bedding yet. Half them wives were as old and ugly as Craster, but that didn't matter. The old ones Chett could put to work cooking and cleaning for him, pulling carrots and slopping pigs, while the young ones warmed his bed and bore his children. Craster wouldn't object, not once Small Paul gave him a hug.

      The only women Chett had ever know were the whores he'd bought in Mole's Town. When he'd been younger, the village girls took one look at his face, with its boils and its wen, and turned away sickened. The worst was that slattern Bessa. She'd spread her legs for every boy in Hag's Mire so he'd figured why not him too? He even spent a morning picking wildflowers when he heard she liked them, but she'd just laughed in his face and told him she'd crawl in a bed with his father's leeches before she'd crawl in one with him. She stopped laughing when he put his knife in her. That was sweet, the look on her face, so he pulled the knife out and put it in her again. When they caught him down near Sevenstreams, old Lord Walder Frey hadn't even bothered to come himself to do the judging. He'd sent one of his bastards, that Walder Rivers, and the next thing Chett had known he was walking to the Wall with that foul-smelling black devil Yoren. To pay for his one sweet moment, they took his whole life.

      But now he meant to take it back, and Craster's women too. That twisted old wildling has the right of it. If you want a woman to wife you take her, and none of this giving her flowers so that maybe she don't notice your bloody boils. Chett didn't mean to make that mistake again.

      It would work, he promised himself for the hundredth time. So long as we get away clean. Ser Ottyn would strike south for the Shadow Tower, the shortest way to the Wall. He won't bother with us, not Wythers, all he'll want is to get back whole. Thoren Smallwood now, he'd want to press on with the attack, but Ser Ottyn's caution ran too deep, and he was senior. It won't matter anyhow. Once we're gone, Smallwood can attack anyone he likes. What do we care? If none of them ever returns to the Wall, no one will ever come looking for us, they'll think we died with the rest. That was a new thought, and for a moment it tempted him. But they would need to kill Ser Ottyn and Ser Mallador Locke as well to give Smallwood the command, and both of them were well-attended day and night … no, the risk was too great.

      "Chett," said Small Paul as they trudged along a stony game trail through sentinels and soldier pines, "what about the bird?"

      "What bloody bird?" The last thing he needed now was some muttonhead going on about a bird.

      "The Old Bear's raven," Small Paul said, "If we kill him, who's going to feed his bird?"

      "Who bloody well cares? Kill the bird too if you like."

      "I don't want to hurt no bird," the big man said. "But that's a talking bird. What if it tells what we did?"

      Lark the Sisterman laughed. "Small Paul, thick as a castle wall," he mocked.

      "You shut up with that," said Small Paul dangerously.

      "Paul," said Chett, before the big man got too angry, "when they find the old man lying in a pool of blood with his throat slit, they won't need no bird to tell them someone killed him."

      Small Paul chewed on that a moment. "That's true," he allowed. "Can I keep the bird, then? I like that bird."

      "He's yours," said Chett, just to shut him up.

      "We can always eat him if we get hungry," offered Lark.

      Small Paul clouded up again. "Best not try and eat my bird, Lark. Best not."

      Chett could hear voices drifting through the trees. "Close your bloody mouths, both of you. We're almost to the Fist."

      They emerged near the west face of the hill, and walked around south where the slope was gentler. Near the edge of the forest a dozen men were taking archery practice. They had carved outlines on the trunks of trees, and were loosing shafts at them. "Look," said Lark. "A pig with a bow."

      Sure enough, the nearest bowman was Ser Piggy himself, the fat boy who had stolen his place with Maester Aemon. Just the sight of Samwell Tarly fills him with anger. Stewarding for Maester Aemon had been as good a life as he'd ever known. The old blind man was undemanding, and Clydas had taken care of most of his wants anyway. Chett's duties were easy: cleaning the rookery, a few fires to build, a few meals to fetch … and Aemon never once hit him. Thinks he can just walk in and shove me out, on account of being highborn and knowing how o read. Might be I'll ask him to read my knife before I open his throat with it. "You go on," he told the others, "I want to watch this." The dogs were pulling, anxious to go on with them, to the good they thought would be waiting at the top. Chett kicked the bitch with the toe of his boot, and that settled them down some.

      He watched from the trees as the fat boy wrestled with a longbow as tall as he was, his red moon face screwed up with concentration. Three arrows stood in the ground before him. Tarly nocked and drew, held the draw a long moment as he tried to aim, and let fly. The shaft vanished into the greenery. Chett laughed loudly, a snort of sweet disgust.

      "We'll never find that one, and I'll be blamed," announced Edd Tollett, the dour grey-haired squire everyone called Dolorous Edd. "Nothing ever goes missing that they don't look at me, ever since that time I lost my horse. As if that could be helped. He was white and it was snowing, what did they expect?"

      "The wind took that one," said Grenn, another friend of Lord Snow's. "Try to hold the bow steady, Sam."

      "It's heavy," the fat boy complained, but he pulled the second arrow all the same. This one went high, sailing through the branches ten feet above the target. "I believe you knocked a leaf off that tree," said Dolorous Edd. "Fall is falling fast enough, there's no need to help it." He sighed. "And we all know what follows fall. Gods, but I am cold. Shoot the last arrow, Samwell, I believe my tongue is freezing to the roof of my mouth."

      Ser Piggy lowered the bow, and Chett thought he was going to start bawling. "It's too hard."

      "Notch, draw, and loose," said Grenn. "Go on."

      Dutifully, the fat boy plucked his final arrow from the earth, notched it to his longbow, drew, and released. He did it quickly, without squinting along the shaft painstakingly as he had the first two times. The arrow struck the charcoal outline low in the chest and hung quivering. "I hit him." Ser Piggy sounded shocked. "Grenn, did you see? Edd, look, I hit him!"

      "Put it between his ribs, I'd say," said Grenn.

      "Did I kill him?" the fat boy wanted to know.

      Tollett shrugged. "Might have punctured a lung, if he had a lung. Most trees don't, as a rule." He took the bow from Sam's hand. "I've seen worse shots, though. Aye, and made a few."

      Ser Piggy was beaming. To look at him you'd think he'd actually done something. But when he say Chett and the dogs, his smile curled up and died squeaking.

      "You hit a tree," Chett said. "Let's see how you shoot when it's Mance Rayder's lads. They won't stand there with their arms out and their leaves rustling, oh no. They'll come right at you, screaming in your face, and I bet you'll piss those breeches. One o' them will plant his axe right between those little pig eyes. The last thing you'll hear will be the thunk it makes when it bites into your skull."

      The fat boy was shaking. Dolorous Edd put a hand on his shoulder. "Brother," he said solemnly, "just because it happened that way for you doesn't mean Samwell will suffer the same."

      "What are you talking about, Tollett?"

      "The axe that split your skull. Is it true that half your wits leaked out on the ground and your dogs ate them?"

      The big lout Grenn laughed, and even Samwell Tarly managed a weak little smile. Chett kicked the nearest dog, yanked on their leashes, and started up the hill. Smile all you want, Ser Piggy. We'll see who laughs tonight. He only wished he had time to kill Tollett as well. Gloomy horsefaced fool, that's what he is.

      The climb was steep, even on this side of the Fist, which had the gentlest slope. Partway up the dogs started barking and pulling at him, figuring that they'd get fed soon. He gave them a taste of his boot instead, and a crack of the whip for the big ugly one that snapped at him. Once they were tied up, he went to report. "The prints were there like Giant said, but the dogs wouldn't track," he told Mormont in front of his big black tent. "Down by the river like that, could be old prints."

      "A pity." Lord Commander Mormont had a bald head and a great shaggy grey beard, and sounded as tired as he looked. "We might all have been better for a bit of fresh meat." The raven on his shoulder bobbed its head and echoed, "Meat. Meat. Meat."

      We could cook the bloody dogs, Chett thought, but he kept his mouth shut until the Old Bear sent him on his way. And that's the last time I'll need to bow my head to that one, he thought to himself with satisfaction. It seemed to him that it was growing even colder, which he would have sworn wasn't possible. The dogs huddled together miserably in the hard frozen mud, and Chett was half tempted to crawl in with them. Instead he wrapped a black wool scarf round the lower part of his face, leaving a slit for his mouth between the winds. It was warmer if he kept moving, he found, so he made a slow circuit of the perimeter with a wad of sourleaf, sharing a chew or two with the black brothers on guard and hearing what they had to say. None of the men on the day watch were part of his scheme; even so, he figured it was good to have some sense of what they were thinking.

      Mostly what they were thinking was that it was bloody cold.

      The wind was rising as the shadows lengthened. It made a high thin sound as it shivered through the stones of the ringwall. "I hate that sound," little Giant said. "It sounds like a babe in the brush, wailing away for milk."

      When hie finished the circuit and returned to the dogs, he found Lark waiting for him. "The officers are in the Old Bear's tent again, talking something fierce."

      "That's what they do," said Chett. "They're highborn, all but Blane, they get drunk on words instead of wine."

      Lark sidled closer. "Cheese-for-wits keeps going on about the bird," he warned, glancing about to make certain no one was close. "Now he's asking if we cached any seed for the damn thing."

      "It's a raven," said Chett. "It eats corpses."

      Lark grinned. "His, might be?"

      Or yours. It seemed to Chett that they needed the big man more than they needed Lark. "Stop fretting about Small Paul. You do your part, he'll do his."

      Twilight was creeping through the woods by the time he rid himself of the Sisterman and sat down to edge his sword. It was bloody hard work with his gloves on, but he wasn't about to take them off. Cold as it was, any fool that touched steel with a bare hand was going to lose a patch of skin.

      The dogs whimpered when the sun went down. He gave them water and curses. "Half a night more, and you can find your own feast." By then he could smell supper.

      Dwyen was holding forth at the cookfire as Chett got his heel of hardbread and a bowl of bean and bacon soup from Hake the cook. "The wood's too silent," the old forester was saying. "No frogs near that river, no owls in the dark. I never heard no deader wood than this."

      "Them teeth of yours sound pretty dead," said Hake.

      Dwyen clacked his wooden teeth. "No wolves neither. There was, before, but no more. Where'd they go, you figure?"

      "Someplace warm," said Chett.

      Of the dozen odd brothers who sat by the fire, four were his. He gave each one a hard squinty look as he ate, to see if any showed signs of breaking. Dirk seemed calm enough, sitting silent and sharpening his blade, the way he did every night. And Sweet Donnel Hill was all easy japes. He had white teeth and fat red lips and yellow locks that he wore in an artful tumble about his shoulders, and he claimed to be the bastard of some Lannister. Maybe he was at that. Chett had no use for pretty boys, nor for bastards neither, but Sweet Donnel seemed like to hold his own.

      He was less certain about the forester the brothers called Sawwood, more for his snoring than for anything to do with trees. Just now he looked so restless he might never snore again. And Maslyn was worse. Chett could see sweat trickling down his face, despite the frigid wind. The beads of moisture sparkled in the firelight, like so many little wet jewels. Maslyn wasn't eating neither, only staring at his soup as if the smell of it was about to make him sick. I'll need to watch that one, Chett thought.

      "Assemble!" The shout came suddenly, from a dozen throats, and quickly spread to every part of the hilltop camp. "Men of the Night's Watch! Assemble at the central fire!"

      Frowning, Chett finished his soup and followed the rest.

      The Old Bear stood before the fire with Smallwood, Locke, Wythers, and Blane ranged behind him in a row. Mormont wore a cloak of thick black fur, and his raven perched upon his shoulder, preening its black feathers. This can't be good. Chett squeezed between Brown Bernarr and some Shadow Tower men. When everyone was gathered, save for the watchers in the woods and the guards on the ringwall, Mormont cleared his throat and spat. The spittle was frozen before it hit the ground. "Brothers," he said, "men of the Night's Watch."

      "Men!" his raven screamed. "Men! Men!"

      "The wildlings are on the march, following the course of the Milkwater down out of the mountains. Thoren believes their van will be upon us ten days hence. Their most seasoned raiders will be with Harma Dogshead in that van. The rest will likely form a rearguard, or ride in the company with Mance Rayder himself. Elsewhere their fighters will be spread thin along the line of march. They have oxen, mules, horses … but few enough. Most will be afoot, and ill-armed and untrained. Such weapons as they carry are more like to be stone and bone than steel. They are burdened with women, children, herds of sheep and goats, and all their worldly goods besides. In short, though they are numerous, they are vulnerable … and they do not know that we are here. Or so we must pray."

      They know, thought Chett. You bloody old pus bag, they know, certain as sunrise. Qhorin Halfhand hasn't come back, has he? Nor Jarman Buckwell. If any of them got caught, you know damned well the wildlings will have wrung a song or two out of them by now.

      Smallwood stepped forward. "Mance Rayder means to bread the Wall and bring red war to the Seven Kingdoms. Well, that's a game two can play. On the morrow we'll bring the war to him."

      "We ride at dawn with all out strength," the Old Bear said as a murmur went through the assembly. "We will ride north, and loop around to the west. Harma's van will be well past the Fist by the time we turn. The foothills of the Frostfangs are full of narrow winding valleys made for ambush. Their line of march will stretch for many miles. We shall fall on them in several places at once, and make them swear we were three thousand, not three hundred."

      "We'll hit hard and be away before their horsemen can form up to face us," Thoren Smallwood said. "If they pursue, we'll lead them a merry chase, then wheel and hit again farther down the column. We'll burn their wagons, scatter their herds, and slay as many as we can. Mance Rayder himself, if we find him. If they break and return to their hovels, we've won. It not, we'll harry them all the way to the Wall, and see to it that they leave a trail of corpses to mark their progress."

      "There are thousands," someone called from behind Chett.

      "We'll die." That was Maslyn's voice, green with fear.

      "Die," screamed Mormont's raven, flapping its black wings. "Die, die, die."

      "Many of us," the Old Bear said. "Mayhaps even all of us. But as another Lord Commander said a thousand years ago, that is why they dress us in black. Remember your words, brothers. For we are the swords in the darkness, the watchers on the walls…"

      "The fire that burns against the cold." Ser Mallador Locke drew his longsword.

      "The light that brings the dawn," others answered, and more swords were pulled from scabbards.

      Then all of them were drawing, and it was near three hundred upraised swords and as many voices crying "The horn that wakes the sleepers! The shield that guards the realms of men!" Chett had no choice but to join his voice to the others. The air was misty with their breath, and firelight glinted off the steel. He was pleased to see Lark and Softfoot and Sweet Donnel Hill joining in, as if they were as big fools as the rest. That was good. No sense to draw attention, when their hour was so close.

      When the shouting died away, once more he heard the sound of the wind picking at the ringwall. The flames swirled and shivered, as if they too were cold, and in the sudden quiet the Old Bear's raven cawed loudly and once again said, "Die."

      Clever bird, thought Chett as the officers dismissed them, warning everyone to get a good meal and a long rest tonight. Chett crawled under his furs near the dogs, his head full of things that could go wrong. What if that bloody oath gave one of his a change of heart? Or Small Paul forgot and tried to kill Mormont during the second watch in place of the third? Or Maslyn lost his courage, or someone turned informer, or …

      He found himself listening to the night. The wind did sound like a wailing child, and from time to time he could hear men's voices, a horse's whinny, a log spitting in the fire. But nothing else. So quiet.

      He could see Bessa's face floating before him. It wasn't the knife I wanted to put in you, he wanted to tell her. I picked you flowers, wild roses and tansy and goldencups, it took me all morning. His heart was thumping like a drum, so loud he feared it might wake the camp. Ice caked his beard all around his mouth. Where did that come from, with Bessa Whenever he'd thought of her before, it had only been to remember that way she'd looked, dying. What was wrong with him? He could hardly breathe. Had he gone to sleep? He got to his knees, and something wet and cold touched his nose. Chett looked up.

      Snow was falling.

      He could feel tears freezing to his cheeks. It isn't fair, he wanted to scream. Snow would ruin everything he'd worked for, all his careful plans. It was a heavy fall, thick white flakes coming down all about him. How would they find their food caches in the snow, or the game trail they meant to follow east? They won't need Dwyen nor Bannen to hunt us down neither, not if we're tracking through fresh snow. And snow hid the shape of the ground, especially by night. A horse could stumble over a root, break a leg on a stone. We're done, he realized. Done before we began. We're lost. There'd be no lord's life for the leechman's son, no keep to call his own, no wives nor crowns. Only a wildling's sword in his belly, and then an unmarked grave. The snow's taken it all from me…the bloody snow…

      Snow had ruined him once before. Snow and his pet pig.

      Chett got to his feet. His legs were stiff, and the falling snowflakes turned the distant torches to vague orange glows. He felt as though he were being attacked by a cloud of pale cold bugs. They settled on his shoulders, on his head, they flew at his nose and his eyes. Cursing, he brushed them off. Samwell Tarly, he remembered. I can still deal with Ser Piggy. He wrapped his scarf around his face, pulled up his hood, and went striding through the camp to where the coward slept.

      The snow was falling so heavily that he got lost among the tents, but finally he spotted the snug little windbreak the fat boy had made for himself between a rock and the raven cages. Tarly was buried beneath a mound of black wool blankets and shaggy furs. The snow was drifting in to cover him. He looked like some kind of soft round mountain. Steel whispered on leather faint as hope as Chett eased his dagger from its sheath. One of the ravens quorked. "Snow," another muttered, peering through the bars with black eyes. The first added a "Snow" of its won. He edged past them, placing each foot carefully. He would clap his left hand down over the fat boy's mouth to muffle his cries, and then …

      Uuuuuuuhoooooooooo.

      He stopped midstep, swallowing his curse as the sound of the horn shuddered through the camp, faint and far, yet unmistakable. Not now. Gods be damned, not NOW! The Old Bear had hidden far-eyes in a ring of trees around the Fist, to give warning of any approach. Jarman Buckwell's back from the Giant's Stair, Chett figured, or Qhorin Halfhand from the Skirling Pass. A single blast of the horn meant brothers returning. If it was the Halfhand, Jon Snow might be with him, alive.

      Sam Tarly sat up puffy-eyed and stared at the snow in confusion. The ravens were cawing noisily, and Chett could hear his dogs baying. Half the bloody camp's awake. His gloved fingers clenched around the dagger's hilt as he waited for the sound to die away. But no sooner had it gone than it came again, louder and longer.

      Uuuuuuuuuuuuhooooooooooooooo.

      "Gods," he heard Sam Tarly whimper. The fat boy lurched to his knees, his feet tangled in his cloak and blankets. He kicked them away and reached for a chainmail hauberk he'd hung on the rock nearby. As he slipped the huge tent of a garment down over his head and wriggled into it, he spied Chett standing there. "Was it two?" he asked. "I dreamed I heard two blasts …"

      "No dream," said Chett. "Two blasts to call the Watch to arms. Two blasts for foes approaching. There's an axe out there with Piggy writ on it, fat boy. Two blasts means wildlings." The fear on that big moon face made him want to laugh. "Bugger them all to seven hells. Bloody Harma. Bloody Mance Rayder. Bloody Smallwood, he said they wouldn't be on us for another—"

      Uuuuuuuuuuuuuuuhooooooooooooooooooooooooo.

      The sound went on and on and on, until it seemed it would never die. The ravens were flapping and screaming, flying about their cages and banging off the bars, and all about the camp the brothers of the Night's Watch were rising, donning their armor, buckling on swordbelts, reaching for battleaxes and bows. Samwell Tarly stood shaking, his face the same color as the snow that swirled down all around them. "Three," he squeaked to Chett, "that was three, I heard three. They never blow three. Not for hundreds and thousands of years. Three means—"

      "—Others." Chett made a sound that was half a laugh and half a sob, and suddenly his smallclothes were wet, and he could feel the piss running down his leg, see steam rising off the front of his breeches.`,
      sourceURL:
        'https://www.bookbrowse.com/excerpts/index.cfm/book_number/663/page_number/9/a-storm-of-swords#excerpt',
      imageURL: 'https://www.bookbrowse.com/images/jackets-p/9780553381702.jpg',
    });
    const theTestaments = await Book.create({
      title: 'The Testaments',
      author: 'Margaret Atwood',
      excerpt: `Only dead people are allowed to have statues, but I have been given one while still alive. Already I am petrified.

      This statue was a small token of appreciation for my many contributions, said the citation, which was read out by Aunt Vidala. She’d been assigned the task by our superiors, and was far from appreciative. I thanked her with as much modesty as I could summon, then pulled the rope that released the cloth drape shrouding me; it billowed to the ground, and there I stood. We don’t do cheering here at Ardua Hall, but there was some discreet clapping. I inclined my head in a nod.

      My statue is larger than life, as statues tend to be, and shows me as younger, slimmer, and in better shape than I’ve been for some time. I am standing straight, shoulders back, my lips curved into a firm but benevolent smile. My eyes are fixed on some cosmic point of reference understood to represent my idealism, my unflinching commitment to duty, my determination to move forward despite all obstacles. Not that anything in the sky would be visible to my statue, placed as it is in a morose cluster of trees and shrubs beside the footpath running in front of Ardua Hall. We Aunts must not be too presumptuous, even in stone. Clutching my left hand is a girl of seven or eight, gazing up at me with trusting eyes. My right hand rests on the head of a woman crouched at my side, her hair veiled, her eyes upturned in an expression that could be read as either craven or grateful – one of our Handmaids – and behind me is one of my Pearl Girls, ready to set out on her missionary work. Hanging from a belt around my waist is my Taser. This weapon reminds me of my failings: had I been more effective, I would not have needed such an implement. The persuasion in my voice would have been enough.

      As a group of statuary it’s not a great success: too crowded. I would have preferred more emphasis on myself. But at least I look sane. It could well have been otherwise, as the elderly sculptress – a true believer since deceased – had a tendency to confer bulging eyes on her subjects as a sign of their pious fervour. Her bust of Aunt Helena looks rabid, that of Aunt Vidala is hyperthyroid, and that of Aunt Elizabeth appears ready to explode.

      At the unveiling the sculptress was nervous. Was her rendition of me sufficiently flattering? Did I approve of it? Would I be seen to approve? I toyed with the idea of frowning as the sheet came off, but thought better of it: I am not without compassion. “Very lifelike,” I said.

      That was nine years ago. Since then my statue has weathered: pigeons have decorated me, moss has sprouted in my damper crevices. Votaries have taken to leaving offerings at my feet: eggs for fertility, oranges to suggest the fullness of pregnancy, croissants to reference the moon. I ignore the breadstuffs – usually they have been rained on – but pocket the oranges. Oranges are so refreshing.


      I write these words in my private sanctum within the library of Ardua Hall – one of the few libraries remaining after the enthusiastic book-burnings that have been going on across our land. The corrupt and blood-smeared fingerprints of the past must be wiped away to create a clean space for the morally pure generation that is surely about to arrive. Such is the theory.

      But among these bloody fingerprints are those made by ourselves, and these can’t be wiped away so easily. Over the years I’ve buried a lot of bones; now I’m inclined to dig them up again – if only for your edification, my unknown reader. If you are reading, this manuscript at least will have survived. Though perhaps I’m fantasizing: perhaps I will never have a reader. Perhaps I’ll only be talking to the wall, in more ways than one.

      That’s enough inscribing for today. My hand hurts, my back aches, and my nightly cup of hot milk awaits me. I’ll stash this screed in its hiding place, avoiding the surveillance cameras – I know where they are, having placed them myself. Despite such precautions, I’m aware of the risk I’m running: writing can be dangerous. What betrayals, and then what denunciations, might lie in store for me? There are several within Ardua Hall who would love to get their hands on these pages.

      Wait, I counsel them silently: it will get worse. You have asked me to tell you what it was like for me when I was growing up within Gilead. You say it will be helpful, and I do wish to be helpful. I imagine you expect nothing but horrors, but the reality is that many children were loved and cherished, in Gilead as elsewhere, and many adults were kind though fallible, in Gilead as elsewhere.

      I hope you will remember, too, that we all have some nostalgia for whatever kindness we have known as children, however bizarre the conditions of that childhood may seem to others. I agree with you that Gilead ought to fade away – there is too much of wrong in it, too much that is false, and too much that is surely contrary to what God intended – but you must permit me some space to mourn the good that will be lost.


      At our school, pink was for spring and summer, plum was for fall and winter, white was for special days: Sundays and celebrations. Arms covered, hair covered, skirts down to the knee before you were five and no more than two inches above the ankle after that, because the urges of men were terrible things and those urges needed to be curbed. The man eyes that were always roaming here and there like the eyes of tigers, those searchlight eyes, needed to be shielded from the alluring and indeed blinding power of us – of our shapely or skinny or fat legs, of our graceful or knobbly or sausage arms, of our peachy or blotchy skins, of our entwining curls of shining hair or our coarse unruly pelts or our straw-like wispy braids, it did not matter. Whatever our shapes and features, we were snares and enticements despite ourselves, we were the innocent and blameless causes that through our very nature could make men drunk with lust, so that they’d stagger and lurch and topple over the verge – The verge of what? we wondered. Was it like a cliff ? – and go plunging down in flames, like snowballs made of burning sulphur hurled by the angry hand of God. We were custodians of an invaluable treasure that existed, unseen, inside us; we were precious flowers that had to be kept safely inside glass houses, or else we would be ambushed and our petals would be torn off and our treasure would be stolen and we would be ripped apart and trampled by the ravenous men who might lurk around any corner, out there in the wide sharp-edged sin-ridden world. That was the kind of thing runny-nosed Aunt Vidala would tell us at school while we were doing petit-point embroidery for handkerchiefs and footstools and framed pictures: flowers in a vase, fruit in a bowl were the favoured patterns. But Aunt Estée, the teacher we liked the best, would say Aunt Vidala was overdoing it and there was no point in frightening us out of our wits, since to instil such an aversion might have a negative influence on the happiness of our future married lives.

      “All men are not like that, girls,” she would say soothingly. “The better kind have superior characters. Some of them have decent self-restraint. And once you are married it will seem quite different to you, and not very fearsome at all.” Not that she would know anything about it, since the Aunts were not married; they were not allowed to be. That was why they could have writing and books. “We and your fathers and mothers will choose your husbands wisely for you when the time comes,” Aunt Estée would say. “So you don’t need to be afraid. Just learn your lessons and trust your elders to do what is best, and everything will unfold as it should. I will pray for it.”

      But despite Aunt Estée’s dimples and friendly smile, it was Aunt Vidala’s version that prevailed. It turned up in my nightmares: the shattering of the glass house, then the rending and tearing and the trampling of hooves, with pink and white and plum fragments of myself scattered over the ground. I dreaded the thought of growing older – older enough for a wedding. I had no faith in the wise choices of the Aunts: I feared that I would end up married to a goat on fire. The pink, the white, and the plum dresses were the rule for special girls like us. Ordinary girls from Econofamilies wore the same thing all the time –those ugly multicoloured stripes and grey cloaks, like the clothes of their mothers. They did not even learn petit-point embroidery or crochet work, just plain sewing and the making of paper flowers and other such chores. They were not pre-chosen to be married to the very best men – to the Sons of Jacob and the other Commanders or their sons – not like us; although they might get to be chosen once they were older if they were pretty enough.

      Nobody said that. You were not supposed to preen yourself on your good looks, it was not modest, or take any notice of the good looks of other people. Though we girls knew the truth: that it was better to be pretty than ugly. Even the Aunts paid more attention to the pretty ones. But if you were already pre-chosen, pretty didn’t matter so much.

      I didn’t have a squint like Huldah or a pinchy built-in frown like Shunammite, and I didn’t have barely-there eyebrows like Becka, but I was unfinished. I had a dough face, like the cookies my favourite Martha, Zilla, made for me as a treat, with raisin eyes and pumpkin-seed teeth. But though I was not especially pretty, I was very, very chosen. Doubly chosen: not only pre-chosen to marry a Commander but chosen in the first place by Tabitha, who was my mother.

      That is what Tabitha used to tell me: “I went for a walk in the forest,” she would say, “and then I came to an enchanted castle, and there were a lot of little girls locked inside, and none of them had any mothers, and they were under the spell of the wicked witches. I had a magic ring that unlocked the castle, but I could only rescue one little girl. So I looked at them all very carefully, and then, out of the whole crowd, I chose you!” “What happened to the others?” I would ask. “The other little girls?”

      “Different mothers rescued them,” she would say.

      “Did they have magic rings too?”

      “Of course, my darling. In order to be a mother, you need to have a magic ring.”

      “Where’s the magic ring?” I would ask. “Where is it now?”

      “It’s right here on my finger,” she would say, indicating the third finger of her left hand. The heart finger, she said it was. “But my ring had only one wish in it, and I used that one up on you. So now it’s an ordinary, everyday mother ring.”

      At this point I was allowed to try on the ring, which was gold, with three diamonds in it: a big one, and a smaller one on either side. It did look as if it might have been magic once.

      “Did you lift me up and carry me?” I would ask. “Out of the forest?” I knew the story off by heart, but I liked to hear it repeated.

      “No, my dearest, you were already too big for that. If I had carried you I would have coughed, and then the witches would have heard us.” I could see this was true: she did cough quite a lot. “So I took you by the hand, and we crept out of the castle so the witches wouldn’t hear us. We both said Shh, shh” – here she would hold her finger up to her lips, and I would hold my finger up too and say Shh, shh delightedly – “and then we had to run very fast through the forest, to get away from the wicked witches, because one of them had seen us going out the door. We ran, and then we hid in a hollow tree. It was very dangerous!”

      I did have a hazy memory of running through a forest with someone holding my hand. Had I hidden in a hollow tree? It seemed to me that I had hidden somewhere. So maybe it was true.

      “And then what happened?” I would ask.

      “And then I brought you to this beautiful house. Aren’t you happy here? You are so cherished, by all of us! Aren’t we both lucky that I chose you?”

      I would be nestled close to her, with her arm around me and my head against her thin body, through which I could feel her bumpy ribs. My ear would be pressed to her chest, and I could hear her heart hammering away inside her – faster and faster, it seemed to me, as she waited for me to say something. I knew my answer had power: I could make her smile, or not.

      What could I say but yes and yes? Yes, I was happy. Yes, I was lucky. Anyway it was true.`,
      sourceURL:
        'https://www.theguardian.com/books/2019/sep/04/the-testaments-by-margaret-atwood-read-the-exclusive-first-extract',
      imageURL:
        'https://cbsnews2.cbsistatic.com/hub/i/r/2019/09/05/fc60da4a-b6f8-4e2d-9a2d-3e9f044e95d5/thumbnail/620x943/d82b3fed76cf53d57353cfde9d3c9910/the-testaments-nan-a-talese-doubleday-cover-244.jpg',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!');
      db.close();
    })
    .catch((err) => {
      console.error('Oh noes! Something went wrong!');
      console.error(err);
      db.close();
    });
}
