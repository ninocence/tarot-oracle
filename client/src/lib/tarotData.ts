export interface TarotCard {
  id: number;
  number: string;
  name: string;
  suit?: string;
  uprightMeaning: string;
  reversedMeaning: string;
  keywords: string[];
  message: string;
}

// ── MAJOR ARCANA ──────────────────────────────────────────────────────────────

export const majorArcana: TarotCard[] = [
  {
    id: 0,
    number: "0",
    name: "The Fool",
    uprightMeaning: "A leap of faith awaits you. The Fool heralds new beginnings, spontaneity, and the courage to step into the unknown. Trust the journey even when the path is unclear — your innocence and openness are your greatest strengths right now.",
    reversedMeaning: "You may be holding back out of fear or acting recklessly without considering consequences. The reversed Fool asks you to find balance between caution and courage. Ground yourself before taking that next step.",
    keywords: ["New Beginnings", "Innocence", "Spontaneity", "Free Spirit", "Leap of Faith"],
    message: "The universe rewards those brave enough to begin. Step forward — the net will appear."
  },
  {
    id: 1,
    number: "I",
    name: "The Magician",
    uprightMeaning: "You possess all the tools and resources you need to manifest your desires. The Magician channels willpower, creativity, and focused intention into reality. This is a time of immense creative power — use it wisely and deliberately.",
    reversedMeaning: "Your talents may be scattered or misdirected. Beware of manipulation, trickery, or untapped potential going to waste. Realign your intentions and ensure your actions match your true desires.",
    keywords: ["Manifestation", "Willpower", "Resourcefulness", "Power", "Skill"],
    message: "As above, so below. You are the bridge between intention and creation."
  },
  {
    id: 2,
    number: "II",
    name: "The High Priestess",
    uprightMeaning: "Trust your intuition — it speaks louder than logic right now. The High Priestess guards the threshold between the conscious and unconscious mind. Hidden knowledge is surfacing; be still and listen to the whispers of your inner voice.",
    reversedMeaning: "You may be ignoring your intuition or keeping secrets that weigh on your soul. The reversed High Priestess urges you to reconnect with your inner wisdom and stop suppressing what you already know to be true.",
    keywords: ["Intuition", "Mystery", "Inner Voice", "Unconscious", "Sacred Knowledge"],
    message: "Silence holds more answers than noise. Go inward — the truth already lives within you."
  },
  {
    id: 3,
    number: "III",
    name: "The Empress",
    uprightMeaning: "Abundance flows toward you. The Empress embodies fertility, nurturing energy, and the beauty of the natural world. This is a time to create, to love generously, and to trust in the abundant nature of the universe.",
    reversedMeaning: "You may be neglecting self-care or experiencing creative blocks. The reversed Empress asks you to reconnect with your body, nature, and the things that bring you sensory pleasure. Stop giving from an empty cup.",
    keywords: ["Abundance", "Fertility", "Nature", "Nurturing", "Sensuality"],
    message: "You are a garden in bloom. Tend to yourself with the same love you give to others."
  },
  {
    id: 4,
    number: "IV",
    name: "The Emperor",
    uprightMeaning: "Structure and authority bring stability to your world. The Emperor represents leadership, discipline, and the power of a solid foundation. Now is the time to establish order, set boundaries, and take command of your domain.",
    reversedMeaning: "Rigidity or excessive control may be stifling growth. The reversed Emperor warns against tyranny — whether from others or from your own inflexible thinking. True strength lies in knowing when to bend.",
    keywords: ["Authority", "Structure", "Leadership", "Discipline", "Stability"],
    message: "Build your empire on foundations of integrity. True power serves — it does not dominate."
  },
  {
    id: 5,
    number: "V",
    name: "The Hierophant",
    uprightMeaning: "Seek wisdom from tradition and spiritual teachings. The Hierophant represents sacred knowledge, mentorship, and the bridge between the divine and the earthly. A teacher or institution may hold the guidance you need right now.",
    reversedMeaning: "Question the rules you have been following blindly. The reversed Hierophant encourages you to find your own spiritual path rather than conforming to dogma. Your personal truth may diverge from convention.",
    keywords: ["Tradition", "Spiritual Wisdom", "Conformity", "Mentorship", "Ritual"],
    message: "Honor the wisdom of those who came before, but never stop seeking your own truth."
  },
  {
    id: 6,
    number: "VI",
    name: "The Lovers",
    uprightMeaning: "A profound choice stands before you — one that aligns heart and soul. The Lovers represent deep connection, harmony, and the sacred union of opposites. Whether in love or life, choose what resonates with your authentic self.",
    reversedMeaning: "Disharmony or avoidance of a crucial decision may be causing inner conflict. The reversed Lovers ask you to examine where you are out of alignment with your values. Healing begins with honest self-reflection.",
    keywords: ["Love", "Union", "Choice", "Harmony", "Alignment"],
    message: "Love is not just a feeling — it is a choice you make every day. Choose with your whole heart."
  },
  {
    id: 7,
    number: "VII",
    name: "The Chariot",
    uprightMeaning: "Victory through determination and willpower. The Chariot charges forward with focused ambition, overcoming obstacles through sheer force of will. Harness opposing forces within you and direct them toward your goal with unwavering resolve.",
    reversedMeaning: "You may feel directionless or overwhelmed by competing desires. The reversed Chariot suggests a loss of control or aggression without purpose. Pause, recalibrate your compass, and choose one direction.",
    keywords: ["Determination", "Victory", "Willpower", "Control", "Ambition"],
    message: "The stars do not drive the chariot — you do. Take the reins and ride toward your destiny."
  },
  {
    id: 8,
    number: "VIII",
    name: "Strength",
    uprightMeaning: "True strength is gentle. This card speaks of courage, patience, and the quiet power of compassion. You are being called to tame your inner beasts — not through force, but through understanding, love, and infinite patience.",
    reversedMeaning: "Self-doubt or raw emotional energy may be overwhelming you. The reversed Strength card asks you to find your inner reservoir of calm. You are stronger than you believe — reconnect with that quiet fire within.",
    keywords: ["Courage", "Patience", "Compassion", "Inner Strength", "Resilience"],
    message: "The softest water wears away the hardest stone. Your gentleness is your greatest power."
  },
  {
    id: 9,
    number: "IX",
    name: "The Hermit",
    uprightMeaning: "Withdraw from the noise and seek your inner light. The Hermit walks the path of solitude and introspection, carrying a lantern of hard-won wisdom. This is a sacred time for soul-searching, meditation, and discovering truth in silence.",
    reversedMeaning: "Isolation may have become loneliness rather than solitude. The reversed Hermit warns against withdrawing too far from the world. Your wisdom is meant to be shared — do not let fear keep you hidden.",
    keywords: ["Solitude", "Inner Wisdom", "Introspection", "Guidance", "Soul-Searching"],
    message: "In the silence between heartbeats, you will find the answers you have been seeking."
  },
  {
    id: 10,
    number: "X",
    name: "Wheel of Fortune",
    uprightMeaning: "The wheel turns — change is the only constant. Fortune smiles upon you as cycles shift in your favor. This is a moment of destiny, karma, and the understanding that what goes around comes around. Embrace the turning tide.",
    reversedMeaning: "You may be resisting inevitable change or feeling trapped by bad luck. The reversed Wheel reminds you that this too shall pass. Even in downturns, the wheel continues to spin — better days are coming.",
    keywords: ["Destiny", "Change", "Cycles", "Karma", "Fortune"],
    message: "Every ending is a beginning in disguise. Trust the rhythm of the universe."
  },
  {
    id: 11,
    number: "XI",
    name: "Justice",
    uprightMeaning: "Truth and fairness prevail. Justice demands honesty, accountability, and balanced decision-making. The scales are being weighed — ensure your actions align with your highest principles. Karmic balance is being restored.",
    reversedMeaning: "Injustice or dishonesty may be clouding your situation. The reversed Justice card asks you to examine where bias or unfairness exists in your life. Take responsibility for your part and seek to restore balance.",
    keywords: ["Truth", "Fairness", "Balance", "Accountability", "Karma"],
    message: "The truth needs no defense — it simply is. Stand in your integrity and let the scales settle."
  },
  {
    id: 12,
    number: "XII",
    name: "The Hanged Man",
    uprightMeaning: "Surrender to gain a new perspective. The Hanged Man suspends between worlds, seeing reality from an entirely different angle. This pause is not punishment — it is illumination. Let go of control and allow wisdom to find you.",
    reversedMeaning: "You may be resisting a necessary sacrifice or clinging to outdated perspectives. The reversed Hanged Man urges you to stop stalling. The discomfort of change is temporary; the regret of stagnation is not.",
    keywords: ["Surrender", "New Perspective", "Letting Go", "Sacrifice", "Pause"],
    message: "Sometimes the bravest thing you can do is nothing at all. In stillness, revelation awaits."
  },
  {
    id: 13,
    number: "XIII",
    name: "Death",
    uprightMeaning: "Transformation is upon you — profound, irreversible, and necessary. Death does not mean an ending but a metamorphosis. Old chapters close so new ones can begin. Release what no longer serves you and trust the process of rebirth.",
    reversedMeaning: "You may be clinging to the past or resisting a transformation that is already underway. The reversed Death card asks you to stop fighting the inevitable. The caterpillar must dissolve before the butterfly can emerge.",
    keywords: ["Transformation", "Endings", "Rebirth", "Release", "Transition"],
    message: "From the ashes of what was, something magnificent is being born. Let the old self fall away."
  },
  {
    id: 14,
    number: "XIV",
    name: "Temperance",
    uprightMeaning: "Balance, patience, and moderation guide your path. Temperance is the alchemist — blending opposites into harmony, finding the middle way. Flow with life rather than forcing it. The perfect mixture of elements is being prepared for you.",
    reversedMeaning: "Excess or imbalance may be disrupting your peace. The reversed Temperance card warns against extremes — whether in behavior, emotion, or lifestyle. Return to center and practice the art of moderation.",
    keywords: ["Balance", "Patience", "Moderation", "Harmony", "Alchemy"],
    message: "The river does not rush to the sea. Flow with grace, and you will arrive exactly where you need to be."
  },
  {
    id: 15,
    number: "XV",
    name: "The Devil",
    uprightMeaning: "Examine what binds you. The Devil reveals shadow patterns — addiction, materialism, toxic attachments, or self-imposed limitations. The chains are looser than they appear. Awareness is the first step toward liberation.",
    reversedMeaning: "You are breaking free from what once held you captive. The reversed Devil signals liberation, recovery, and the courage to face your shadows. The power was always yours — you are simply reclaiming it now.",
    keywords: ["Shadow", "Bondage", "Materialism", "Liberation", "Temptation"],
    message: "The chains you wear were placed there by your own hands. You hold the key to your freedom."
  },
  {
    id: 16,
    number: "XVI",
    name: "The Tower",
    uprightMeaning: "Sudden upheaval shatters false structures. The Tower strikes with lightning clarity, demolishing illusions and foundations built on unstable ground. Though shocking, this destruction is divine — clearing the way for something authentic to rise.",
    reversedMeaning: "You may be avoiding a necessary upheaval or experiencing the aftermath of a personal earthquake. The reversed Tower suggests the worst has passed. Now is the time to rebuild — this time on solid, truthful ground.",
    keywords: ["Upheaval", "Revelation", "Awakening", "Destruction", "Liberation"],
    message: "What crumbles was never truly solid. From the rubble, build something that cannot be shaken."
  },
  {
    id: 17,
    number: "XVII",
    name: "The Star",
    uprightMeaning: "Hope returns after the storm. The Star pours healing light upon your weary soul, restoring faith, inspiration, and a sense of cosmic purpose. You are exactly where you need to be. Trust the universe and let your light shine.",
    reversedMeaning: "You may have lost faith or feel disconnected from your sense of purpose. The reversed Star gently asks you to look up — the light has not gone out, it has only been obscured. Reconnect with what inspires you.",
    keywords: ["Hope", "Inspiration", "Healing", "Faith", "Serenity"],
    message: "Even in the darkest night, one star is enough to guide you home. You are that star."
  },
  {
    id: 18,
    number: "XVIII",
    name: "The Moon",
    uprightMeaning: "Navigate the realm of illusion and intuition. The Moon illuminates the subconscious — dreams, fears, and hidden truths emerge from the shadows. Not everything is as it seems. Trust your instincts and let your inner compass guide you through the fog.",
    reversedMeaning: "Confusion is lifting and clarity is returning. The reversed Moon signals the release of anxiety, deception, or self-delusion. The truth you feared is less frightening than the shadows your mind created.",
    keywords: ["Illusion", "Intuition", "Subconscious", "Dreams", "Mystery"],
    message: "The moon does not create the darkness — it reveals what hides within it. Face your shadows with courage."
  },
  {
    id: 19,
    number: "XIX",
    name: "The Sun",
    uprightMeaning: "Radiant joy and success illuminate your world. The Sun is the most positive card in the deck — bringing vitality, confidence, and the warmth of achievement. Everything touched by this light flourishes. Celebrate your victories and share your warmth.",
    reversedMeaning: "Your inner light may be dimmed by self-doubt or temporary setbacks. The reversed Sun reminds you that clouds are temporary — your brilliance has not diminished. Reconnect with your joy and let it radiate outward.",
    keywords: ["Joy", "Success", "Vitality", "Confidence", "Celebration"],
    message: "You were born to shine. Step into the light and let the world see your brilliance."
  },
  {
    id: 20,
    number: "XX",
    name: "Judgement",
    uprightMeaning: "A spiritual awakening calls you to rise. Judgement sounds the trumpet of self-evaluation, absolution, and rebirth. Review your past with compassion, release guilt, and answer the higher calling that resonates within your soul.",
    reversedMeaning: "Self-judgment or refusal to learn from the past may be holding you back. The reversed Judgement card asks you to forgive yourself and others. You cannot answer the call of the future while chained to old regrets.",
    keywords: ["Awakening", "Rebirth", "Reflection", "Absolution", "Calling"],
    message: "The trumpet sounds for you. Rise, shed the weight of yesterday, and answer your highest calling."
  },
  {
    id: 21,
    number: "XXI",
    name: "The World",
    uprightMeaning: "Completion, wholeness, and cosmic fulfillment. The World represents the successful end of a major cycle — you have integrated all lessons and arrived at a place of profound understanding. Celebrate this achievement; you have earned your place in the dance of life.",
    reversedMeaning: "A cycle may feel incomplete or you are resisting closure. The reversed World suggests unfinished business or a reluctance to move on. Tie up loose ends and prepare for the next magnificent chapter.",
    keywords: ["Completion", "Wholeness", "Achievement", "Integration", "Fulfillment"],
    message: "The circle is complete, yet the spiral continues. You are both the journey and the destination."
  }
];

// ── MINOR ARCANA — WANDS ──────────────────────────────────────────────────────

export const wands: TarotCard[] = [
  {
    id: 22,
    number: "Ace",
    suit: "Wands",
    name: "Ace of Wands",
    uprightMeaning: "A spark of creative fire ignites within you. The Ace of Wands is pure potential — the first breath of inspiration, passion, and new ventures. Something exciting is being born. Seize this creative impulse before it fades.",
    reversedMeaning: "Creative blocks or false starts may be frustrating you. The reversed Ace of Wands asks you to examine whether you are channeling your energy in the right direction. The fire is there — it simply needs a better outlet.",
    keywords: ["Inspiration", "New Venture", "Creative Fire", "Passion", "Potential"],
    message: "A single spark can ignite a wildfire. Honor the creative impulse — it is the universe speaking through you."
  },
  {
    id: 23,
    number: "Two",
    suit: "Wands",
    name: "Two of Wands",
    uprightMeaning: "You stand at the threshold of possibility, surveying the vast horizon before you. The Two of Wands speaks of bold planning, future vision, and the courage to expand beyond familiar territory. The world is yours to claim.",
    reversedMeaning: "Fear of the unknown or lack of planning may be keeping you small. The reversed Two of Wands asks you to reconsider your goals. Are you playing it too safe? The horizon calls — but you must first decide to move.",
    keywords: ["Future Planning", "Vision", "Expansion", "Courage", "Exploration"],
    message: "The map is in your hands. Now you must choose which ocean to cross."
  },
  {
    id: 24,
    number: "Three",
    suit: "Wands",
    name: "Three of Wands",
    uprightMeaning: "Your plans are taking shape and your ships are coming in. The Three of Wands signals expansion, foresight, and the early rewards of bold action. You have planted seeds — now watch them grow beyond what you imagined.",
    reversedMeaning: "Delays or setbacks may be testing your patience. The reversed Three of Wands suggests your plans need revision or that obstacles are blocking your progress. Reassess your strategy and remain adaptable.",
    keywords: ["Expansion", "Foresight", "Progress", "Opportunity", "Long-term Vision"],
    message: "What you set in motion is already returning to you. Trust the seeds you planted in faith."
  },
  {
    id: 25,
    number: "Four",
    suit: "Wands",
    name: "Four of Wands",
    uprightMeaning: "Celebration, harmony, and homecoming. The Four of Wands marks a joyful milestone — a time to gather with loved ones, honor achievements, and revel in the stability you have created. You deserve this moment of pure happiness.",
    reversedMeaning: "Instability at home or a sense that celebrations feel hollow. The reversed Four of Wands asks you to examine what is disrupting your sense of belonging. True celebration comes from inner harmony, not external validation.",
    keywords: ["Celebration", "Harmony", "Homecoming", "Community", "Milestone"],
    message: "Pause and celebrate — not just what you have achieved, but who you have become."
  },
  {
    id: 26,
    number: "Five",
    suit: "Wands",
    name: "Five of Wands",
    uprightMeaning: "Conflict and competition sharpen your edge. The Five of Wands represents the creative tension of opposing forces — a healthy struggle that ultimately leads to growth. Channel this combative energy into productive competition rather than destructive conflict.",
    reversedMeaning: "Conflict may be draining rather than energizing you. The reversed Five of Wands suggests it is time to step back from unnecessary battles. Not every fight is worth your fire — choose your battles with wisdom.",
    keywords: ["Conflict", "Competition", "Struggle", "Tension", "Growth"],
    message: "The friction that frustrates you is also the force that sharpens you. Embrace the challenge."
  },
  {
    id: 27,
    number: "Six",
    suit: "Wands",
    name: "Six of Wands",
    uprightMeaning: "Victory and public recognition are yours. The Six of Wands celebrates triumph after struggle — you have overcome obstacles and earned the admiration of those around you. Accept the praise graciously and let it fuel your next endeavor.",
    reversedMeaning: "Self-doubt may be undermining your success, or recognition feels hollow. The reversed Six of Wands asks you to examine whether you are seeking validation from others rather than from within. True victory is internal.",
    keywords: ["Victory", "Recognition", "Success", "Confidence", "Achievement"],
    message: "You earned this moment. Stand tall, receive the crown, and remember — you did this."
  },
  {
    id: 28,
    number: "Seven",
    suit: "Wands",
    name: "Seven of Wands",
    uprightMeaning: "Stand your ground with fierce conviction. The Seven of Wands calls you to defend your position, your values, and your hard-won achievements. You may face opposition, but you hold the higher ground. Do not back down from what you believe in.",
    reversedMeaning: "Exhaustion from constant defense may be wearing you down. The reversed Seven of Wands asks whether every battle is truly worth fighting. Know when to stand firm and when to let go with grace.",
    keywords: ["Perseverance", "Defense", "Conviction", "Standing Ground", "Resilience"],
    message: "You have climbed too far to be knocked down now. Hold your position — your cause is worthy."
  },
  {
    id: 29,
    number: "Eight",
    suit: "Wands",
    name: "Eight of Wands",
    uprightMeaning: "Swift movement and rapid progress. The Eight of Wands signals that things are accelerating — messages arrive, plans advance, and momentum builds. This is not the time for hesitation. Ride the current and let it carry you forward.",
    reversedMeaning: "Delays, miscommunications, or scattered energy may be slowing your progress. The reversed Eight of Wands asks you to pause and ensure your direction is clear before moving at full speed.",
    keywords: ["Speed", "Progress", "Communication", "Momentum", "Action"],
    message: "The universe is moving in your favor — fast. Keep up with the pace of your own becoming."
  },
  {
    id: 30,
    number: "Nine",
    suit: "Wands",
    name: "Nine of Wands",
    uprightMeaning: "You are battle-worn but unbroken. The Nine of Wands speaks of resilience in the face of exhaustion — you have come so far and faced so much. One final push remains. Gather your remaining strength; the finish line is closer than it appears.",
    reversedMeaning: "Paranoia or excessive defensiveness may be creating unnecessary obstacles. The reversed Nine of Wands asks you to examine whether your guard is protecting you or isolating you. Not everyone is an enemy.",
    keywords: ["Resilience", "Persistence", "Courage", "Endurance", "Last Stand"],
    message: "You are still standing. That alone is proof of your extraordinary strength."
  },
  {
    id: 31,
    number: "Ten",
    suit: "Wands",
    name: "Ten of Wands",
    uprightMeaning: "You are carrying too much. The Ten of Wands represents the burden of overcommitment — responsibilities have piled up and the weight is becoming unsustainable. It is time to delegate, release, or restructure before you collapse under the load.",
    reversedMeaning: "You are beginning to release burdens that no longer serve you. The reversed Ten of Wands signals the wisdom of knowing your limits. Lay down what is not yours to carry and reclaim your energy.",
    keywords: ["Burden", "Overcommitment", "Responsibility", "Exhaustion", "Release"],
    message: "You were not meant to carry the world alone. Set something down — the right things will stay."
  },
  {
    id: 32,
    number: "Page",
    suit: "Wands",
    name: "Page of Wands",
    uprightMeaning: "A messenger of creative fire arrives with exciting news. The Page of Wands embodies youthful enthusiasm, curiosity, and the thrill of new ideas. Embrace this energy — explore, experiment, and let your passion lead the way.",
    reversedMeaning: "Scattered energy or lack of follow-through may be undermining your potential. The reversed Page of Wands asks you to channel your enthusiasm into focused action rather than chasing every shiny new idea.",
    keywords: ["Enthusiasm", "Exploration", "New Ideas", "Curiosity", "Messenger"],
    message: "Let your curiosity run wild. The most extraordinary journeys begin with a single 'what if.'"
  },
  {
    id: 33,
    number: "Knight",
    suit: "Wands",
    name: "Knight of Wands",
    uprightMeaning: "Bold, passionate, and unstoppable. The Knight of Wands charges forward with fearless energy and magnetic charisma. This is a time for daring action, adventure, and following your passion with reckless abandon. Move fast and trust your fire.",
    reversedMeaning: "Impulsiveness or recklessness may be causing chaos. The reversed Knight of Wands asks you to harness your fire before it burns everything down. Passion without direction is just destruction.",
    keywords: ["Adventure", "Passion", "Boldness", "Action", "Charisma"],
    message: "Ride hard toward what sets your soul on fire. The bold inherit the extraordinary."
  },
  {
    id: 34,
    number: "Queen",
    suit: "Wands",
    name: "Queen of Wands",
    uprightMeaning: "You are magnetic, confident, and radiant in your power. The Queen of Wands embodies passionate leadership, creative authority, and the warmth that draws others to you. Own your fire — your presence alone transforms the room.",
    reversedMeaning: "Jealousy, insecurity, or demanding behavior may be dimming your light. The reversed Queen of Wands asks you to return to your authentic self rather than performing power. True confidence needs no audience.",
    keywords: ["Confidence", "Magnetism", "Leadership", "Creativity", "Warmth"],
    message: "You are the fire and the light. Stop dimming yourself for spaces that cannot hold your brightness."
  },
  {
    id: 35,
    number: "King",
    suit: "Wands",
    name: "King of Wands",
    uprightMeaning: "Visionary leadership and bold mastery. The King of Wands rules with creative authority, inspiring others through passion and decisive action. You have the vision and the power to make it real. Lead with heart and watch your kingdom rise.",
    reversedMeaning: "Arrogance or impulsive leadership may be alienating those around you. The reversed King of Wands asks you to temper your fire with wisdom. True kings inspire — they do not intimidate.",
    keywords: ["Vision", "Leadership", "Mastery", "Boldness", "Authority"],
    message: "A true leader does not just see the future — they create it. Step into your sovereign power."
  }
];

// ── MINOR ARCANA — CUPS ───────────────────────────────────────────────────────

export const cups: TarotCard[] = [
  {
    id: 36,
    number: "Ace",
    suit: "Cups",
    name: "Ace of Cups",
    uprightMeaning: "A new emotional beginning overflows with love and possibility. The Ace of Cups is the purest expression of the heart — compassion, intuition, and spiritual connection. Open yourself to receive the love that is being offered to you.",
    reversedMeaning: "Emotional blockages or a closed heart may be preventing you from receiving love. The reversed Ace of Cups asks you to examine what walls you have built and whether they are protecting you or imprisoning you.",
    keywords: ["New Love", "Compassion", "Intuition", "Emotional Beginnings", "Overflow"],
    message: "Your heart is a vessel of infinite capacity. Let it overflow — with love, with joy, with grace."
  },
  {
    id: 37,
    number: "Two",
    suit: "Cups",
    name: "Two of Cups",
    uprightMeaning: "A sacred union of hearts and souls. The Two of Cups represents deep mutual connection, partnership, and the beautiful alchemy of two people coming together in harmony. Whether romantic or platonic, this bond is one of rare and precious depth.",
    reversedMeaning: "Imbalance or disconnection in a relationship may be causing pain. The reversed Two of Cups asks you to examine whether this partnership is truly mutual. Love must flow in both directions to sustain itself.",
    keywords: ["Partnership", "Union", "Mutual Love", "Connection", "Harmony"],
    message: "When two souls recognize each other, the universe holds its breath. Honor this sacred meeting."
  },
  {
    id: 38,
    number: "Three",
    suit: "Cups",
    name: "Three of Cups",
    uprightMeaning: "Celebration, friendship, and the joy of community. The Three of Cups calls you to gather with those who lift your spirit and toast to the abundance in your life. This is a time of shared happiness, creative collaboration, and heartfelt connection.",
    reversedMeaning: "Overindulgence, gossip, or superficial socializing may be draining your energy. The reversed Three of Cups asks you to examine the quality of your social connections. Seek depth over distraction.",
    keywords: ["Celebration", "Friendship", "Community", "Joy", "Collaboration"],
    message: "Joy multiplies when shared. Gather your people and celebrate the miracle of being alive together."
  },
  {
    id: 39,
    number: "Four",
    suit: "Cups",
    name: "Four of Cups",
    uprightMeaning: "You may be so focused on what you lack that you are missing the gifts being offered to you. The Four of Cups speaks of contemplation, apathy, and the danger of taking blessings for granted. Look up — something beautiful awaits your attention.",
    reversedMeaning: "You are emerging from a period of withdrawal and beginning to engage with life again. The reversed Four of Cups signals renewed motivation and a willingness to accept what the universe is offering.",
    keywords: ["Contemplation", "Apathy", "Missed Opportunity", "Withdrawal", "Reassessment"],
    message: "The gift is already being offered. Open your eyes — and your hands — to receive it."
  },
  {
    id: 40,
    number: "Five",
    suit: "Cups",
    name: "Five of Cups",
    uprightMeaning: "Grief and loss ask for your full presence. The Five of Cups invites you to mourn what has been lost — but reminds you that not everything is gone. Behind you stand cups still full. When you are ready, turn around.",
    reversedMeaning: "You are beginning to heal and find acceptance after loss. The reversed Five of Cups signals the courage to move forward, to forgive, and to find meaning in what remains. The mourning period is ending.",
    keywords: ["Grief", "Loss", "Regret", "Acceptance", "Moving On"],
    message: "Grieve what must be grieved. Then turn around — what remains is more than enough to begin again."
  },
  {
    id: 41,
    number: "Six",
    suit: "Cups",
    name: "Six of Cups",
    uprightMeaning: "Nostalgia, innocence, and the sweetness of the past. The Six of Cups invites you to revisit joyful memories, reconnect with your inner child, and find comfort in the simple pleasures that once brought you happiness.",
    reversedMeaning: "You may be living too much in the past or using nostalgia to avoid the present. The reversed Six of Cups asks you to honor your memories without being imprisoned by them. The best chapters are still ahead.",
    keywords: ["Nostalgia", "Innocence", "Childhood", "Reunion", "Simplicity"],
    message: "The child you once were still lives inside you — full of wonder, full of trust. Let them play again."
  },
  {
    id: 42,
    number: "Seven",
    suit: "Cups",
    name: "Seven of Cups",
    uprightMeaning: "Fantasy, illusion, and the dizzying abundance of choices. The Seven of Cups presents many tempting options — but not all that glitters is gold. Discernment is essential now. Choose with clarity rather than being seduced by illusion.",
    reversedMeaning: "Clarity is cutting through the fog of confusion. The reversed Seven of Cups signals a return to reality and the ability to make grounded decisions. You are seeing things as they truly are, not as you wished them to be.",
    keywords: ["Fantasy", "Illusion", "Choices", "Wishful Thinking", "Discernment"],
    message: "Not every dream deserves your devotion. Choose the vision that is rooted in truth."
  },
  {
    id: 43,
    number: "Eight",
    suit: "Cups",
    name: "Eight of Cups",
    uprightMeaning: "The courage to walk away from what no longer fulfills you. The Eight of Cups represents a conscious departure — leaving behind emotional investments that have run their course. This is not failure; it is wisdom in motion.",
    reversedMeaning: "You may be staying in a situation out of fear of the unknown rather than genuine fulfillment. The reversed Eight of Cups asks whether you are avoiding a necessary departure. Sometimes the bravest act is leaving.",
    keywords: ["Withdrawal", "Letting Go", "Moving On", "Seeking Deeper Meaning", "Transition"],
    message: "Walking away from what no longer serves you is not abandonment — it is self-respect in action."
  },
  {
    id: 44,
    number: "Nine",
    suit: "Cups",
    name: "Nine of Cups",
    uprightMeaning: "Your wish is being granted. The Nine of Cups is the wish card — a moment of deep emotional satisfaction, contentment, and the joy of having your heart's desires fulfilled. Savor this moment of abundance and allow yourself to feel truly happy.",
    reversedMeaning: "Material satisfaction may be masking a deeper emotional emptiness. The reversed Nine of Cups asks you to examine whether you are truly fulfilled or simply comfortable. True contentment comes from within.",
    keywords: ["Wishes Fulfilled", "Contentment", "Satisfaction", "Abundance", "Gratitude"],
    message: "Your wish has been heard. Receive this gift with an open heart and a grateful soul."
  },
  {
    id: 45,
    number: "Ten",
    suit: "Cups",
    name: "Ten of Cups",
    uprightMeaning: "Emotional fulfillment, lasting happiness, and the bliss of a loving home. The Ten of Cups represents the ultimate emotional achievement — harmony in relationships, family bonds, and the deep satisfaction of a life well-lived and well-loved.",
    reversedMeaning: "Family conflict or a gap between the ideal and the reality of your relationships may be causing pain. The reversed Ten of Cups asks you to address what is disrupting your emotional harmony rather than pretending all is well.",
    keywords: ["Happiness", "Harmony", "Family", "Fulfillment", "Lasting Love"],
    message: "This is what it was all for. The love surrounding you right now — this is the treasure."
  },
  {
    id: 46,
    number: "Page",
    suit: "Cups",
    name: "Page of Cups",
    uprightMeaning: "A dreamy, intuitive messenger arrives with an unexpected emotional gift. The Page of Cups brings creative inspiration, psychic sensitivity, and the gentle wisdom of the heart. Be open to messages from your dreams and your deeper self.",
    reversedMeaning: "Emotional immaturity or escapism through fantasy may be clouding your judgment. The reversed Page of Cups asks you to ground your dreams in reality and process your emotions rather than avoiding them.",
    keywords: ["Intuition", "Creativity", "Sensitivity", "Dreaming", "Emotional Messages"],
    message: "The most profound messages arrive softly. Listen with your heart — it speaks a language your mind cannot translate."
  },
  {
    id: 47,
    number: "Knight",
    suit: "Cups",
    name: "Knight of Cups",
    uprightMeaning: "A romantic, idealistic soul arrives bearing gifts of the heart. The Knight of Cups is the poet, the dreamer, the one who follows love wherever it leads. This is a time to pursue what moves you — with grace, beauty, and emotional intelligence.",
    reversedMeaning: "Moodiness, jealousy, or unrealistic romantic expectations may be causing turbulence. The reversed Knight of Cups asks you to examine whether you are chasing an ideal rather than embracing what is real.",
    keywords: ["Romance", "Idealism", "Charm", "Emotional Intelligence", "Pursuit"],
    message: "Follow what moves your heart — not what makes sense on paper. The soul knows its own north star."
  },
  {
    id: 48,
    number: "Queen",
    suit: "Cups",
    name: "Queen of Cups",
    uprightMeaning: "Deep emotional wisdom, compassionate intuition, and nurturing love. The Queen of Cups holds space for the full spectrum of human emotion with grace and understanding. Her empathy is her superpower — and so is yours right now.",
    reversedMeaning: "Emotional overwhelm, codependency, or martyrdom may be draining you. The reversed Queen of Cups asks you to tend to your own emotional needs before pouring yourself into others. You cannot pour from an empty cup.",
    keywords: ["Empathy", "Intuition", "Compassion", "Emotional Wisdom", "Nurturing"],
    message: "Your sensitivity is not a weakness — it is the most profound form of intelligence. Trust what you feel."
  },
  {
    id: 49,
    number: "King",
    suit: "Cups",
    name: "King of Cups",
    uprightMeaning: "Emotional mastery, wisdom, and compassionate authority. The King of Cups rules his emotional world with calm, balanced wisdom — neither suppressing nor being overwhelmed by feeling. This is a time to lead with both heart and mind.",
    reversedMeaning: "Emotional manipulation or suppression of feelings may be creating toxicity. The reversed King of Cups asks you to examine whether you are truly in control of your emotions or simply burying them. Mastery requires honesty.",
    keywords: ["Emotional Mastery", "Wisdom", "Compassion", "Balance", "Authority"],
    message: "True emotional mastery is not the absence of feeling — it is the wisdom to feel fully without being consumed."
  }
];

// ── MINOR ARCANA — SWORDS ─────────────────────────────────────────────────────

export const swords: TarotCard[] = [
  {
    id: 50,
    number: "Ace",
    suit: "Swords",
    name: "Ace of Swords",
    uprightMeaning: "A breakthrough of clarity and truth. The Ace of Swords cuts through confusion with the sharp edge of intellect and honest insight. A new way of thinking is available to you — embrace it, even if the truth it reveals is uncomfortable.",
    reversedMeaning: "Mental confusion, miscommunication, or a truth you are not ready to face. The reversed Ace of Swords asks you to slow down and examine your thoughts before acting. Clarity will come — but it requires honesty.",
    keywords: ["Clarity", "Truth", "Breakthrough", "Intellect", "New Thinking"],
    message: "The sword of truth cuts cleanly. What it reveals may sting — but it will set you free."
  },
  {
    id: 51,
    number: "Two",
    suit: "Swords",
    name: "Two of Swords",
    uprightMeaning: "You stand at a crossroads, blindfolded by indecision. The Two of Swords represents a stalemate — a difficult choice that requires you to remove your blindfold and face the truth you have been avoiding. The decision cannot be postponed indefinitely.",
    reversedMeaning: "The blindfold is coming off and information is surfacing that will help you decide. The reversed Two of Swords signals that the stalemate is breaking. Be prepared to act on what you learn.",
    keywords: ["Indecision", "Stalemate", "Avoidance", "Crossroads", "Choice"],
    message: "Remove the blindfold. The truth you fear is less dangerous than the paralysis of not knowing."
  },
  {
    id: 52,
    number: "Three",
    suit: "Swords",
    name: "Three of Swords",
    uprightMeaning: "Heartbreak, grief, and the sharp pain of loss or betrayal. The Three of Swords does not soften the blow — it asks you to feel the pain fully. Only by moving through the grief can you emerge on the other side, wiser and more whole.",
    reversedMeaning: "Healing is underway. The reversed Three of Swords signals the slow, tender process of recovery after pain. Allow yourself to heal at your own pace — the wound is closing, even if it does not yet feel that way.",
    keywords: ["Heartbreak", "Grief", "Betrayal", "Pain", "Healing"],
    message: "The heart that breaks open becomes the heart that can hold the whole world. Let yourself grieve."
  },
  {
    id: 53,
    number: "Four",
    suit: "Swords",
    name: "Four of Swords",
    uprightMeaning: "Rest is not weakness — it is wisdom. The Four of Swords calls you to retreat, recover, and restore your depleted energy. Step back from the battlefield of your mind and give yourself the gift of stillness and recuperation.",
    reversedMeaning: "You may be pushing yourself back into action before you are truly ready. The reversed Four of Swords asks you to honor your need for rest. Burnout serves no one. Slow down before you are forced to stop.",
    keywords: ["Rest", "Recovery", "Retreat", "Contemplation", "Restoration"],
    message: "Even the sword must be sheathed to preserve its edge. Rest is part of the warrior's practice."
  },
  {
    id: 54,
    number: "Five",
    suit: "Swords",
    name: "Five of Swords",
    uprightMeaning: "Conflict, defeat, and the hollow victory of winning at all costs. The Five of Swords asks you to examine whether the battle you are fighting is truly worth the damage it is causing. Some victories cost more than the prize is worth.",
    reversedMeaning: "A period of conflict is coming to an end. The reversed Five of Swords signals reconciliation, the release of resentment, and the wisdom to choose peace over pride. Let the battle end — it has cost enough.",
    keywords: ["Conflict", "Defeat", "Hollow Victory", "Tension", "Aftermath"],
    message: "Not every battle deserves your sword. The greatest victories are sometimes the ones you walk away from."
  },
  {
    id: 55,
    number: "Six",
    suit: "Swords",
    name: "Six of Swords",
    uprightMeaning: "A gentle transition toward calmer waters. The Six of Swords represents moving away from turbulence and toward a more peaceful state of being. The journey may be quiet and bittersweet, but you are heading in the right direction.",
    reversedMeaning: "You may be resisting a necessary transition or feeling unable to move on. The reversed Six of Swords asks you to examine what is keeping you anchored in troubled waters. The calmer shore exists — you must be willing to sail toward it.",
    keywords: ["Transition", "Moving On", "Calm", "Recovery", "Journey"],
    message: "You are leaving the storm behind. The waters ahead are calmer — trust the passage."
  },
  {
    id: 56,
    number: "Seven",
    suit: "Swords",
    name: "Seven of Swords",
    uprightMeaning: "Strategy, cunning, and the need to act with discretion. The Seven of Swords advises careful, tactical thinking — sometimes the wisest move is made quietly, without announcing your intentions. Be strategic, but remain ethical.",
    reversedMeaning: "Deception — either from others or from yourself — may be coming to light. The reversed Seven of Swords asks you to examine where dishonesty is operating in your life. Coming clean is always more powerful than clever evasion.",
    keywords: ["Strategy", "Cunning", "Deception", "Stealth", "Tactics"],
    message: "Move wisely, not recklessly. The most powerful moves are often the quietest ones."
  },
  {
    id: 57,
    number: "Eight",
    suit: "Swords",
    name: "Eight of Swords",
    uprightMeaning: "You feel trapped, but the cage is largely of your own making. The Eight of Swords represents self-imposed limitation, negative thinking, and the paralysis of fear. The blindfold can be removed. The ropes can be loosened. The first step is believing you can move.",
    reversedMeaning: "You are beginning to see through the illusions that have kept you bound. The reversed Eight of Swords signals a powerful awakening — you are reclaiming your freedom and releasing the mental patterns that imprisoned you.",
    keywords: ["Restriction", "Self-Limitation", "Fear", "Trapped", "Mental Imprisonment"],
    message: "The prison you fear is built from thoughts, not stone. Change your mind — and the walls dissolve."
  },
  {
    id: 58,
    number: "Nine",
    suit: "Swords",
    name: "Nine of Swords",
    uprightMeaning: "Anxiety, nightmares, and the torment of a worried mind. The Nine of Swords represents the darkest hour before dawn — the 3am spiral of fear and catastrophic thinking. Remember: the mind at night is not the mind at its most truthful.",
    reversedMeaning: "You are emerging from a period of intense mental anguish. The reversed Nine of Swords signals that the worst of the anxiety is passing. Seek support, practice self-compassion, and know that the darkness is not permanent.",
    keywords: ["Anxiety", "Worry", "Nightmares", "Fear", "Mental Anguish"],
    message: "The fears that haunt you at 3am are not prophecies — they are echoes. Dawn is coming."
  },
  {
    id: 59,
    number: "Ten",
    suit: "Swords",
    name: "Ten of Swords",
    uprightMeaning: "A painful ending marks the absolute bottom of a cycle. The Ten of Swords represents rock bottom — but also the promise of dawn. The worst has happened and you have survived. Now the only direction is up. Transformation begins here.",
    reversedMeaning: "You are rising from the lowest point and beginning to recover. The reversed Ten of Swords signals that the crisis has passed and healing is underway. You are more resilient than you know.",
    keywords: ["Painful Ending", "Rock Bottom", "Betrayal", "Crisis", "Transformation"],
    message: "When you have hit the bottom, there is only one direction left. Rise — slowly, surely, magnificently."
  },
  {
    id: 60,
    number: "Page",
    suit: "Swords",
    name: "Page of Swords",
    uprightMeaning: "A sharp, curious mind hungry for truth and new ideas. The Page of Swords brings mental agility, a thirst for knowledge, and the courage to ask difficult questions. Be curious, be direct, and do not be afraid to challenge what you are told.",
    reversedMeaning: "Gossip, hasty words, or mental restlessness may be causing problems. The reversed Page of Swords asks you to think before you speak and verify before you share. Not every thought needs to be voiced.",
    keywords: ["Curiosity", "Mental Agility", "Truth-Seeking", "Communication", "Directness"],
    message: "Ask the question no one else dares to ask. The truth is always worth the discomfort of seeking it."
  },
  {
    id: 61,
    number: "Knight",
    suit: "Swords",
    name: "Knight of Swords",
    uprightMeaning: "Swift, decisive, and intellectually fierce. The Knight of Swords charges into battle with brilliant clarity and unstoppable momentum. This is a time for bold, direct action — cut through the noise and move toward your goal without hesitation.",
    reversedMeaning: "Recklessness, aggression, or intellectual arrogance may be causing collateral damage. The reversed Knight of Swords asks you to slow down and consider the impact of your words and actions before charging forward.",
    keywords: ["Decisiveness", "Speed", "Intellect", "Courage", "Direct Action"],
    message: "Think fast, move decisively, speak truthfully. The moment belongs to those who act with clarity."
  },
  {
    id: 62,
    number: "Queen",
    suit: "Swords",
    name: "Queen of Swords",
    uprightMeaning: "Razor-sharp intellect, clear boundaries, and the wisdom born of experience. The Queen of Swords has faced hardship and emerged with uncompromising clarity. She sees through illusion and speaks truth with precision and grace. Channel her discernment.",
    reversedMeaning: "Coldness, bitterness, or using your sharp tongue as a weapon may be isolating you. The reversed Queen of Swords asks you to examine whether your boundaries have become walls. Clarity without compassion can wound unnecessarily.",
    keywords: ["Clarity", "Boundaries", "Intellect", "Independence", "Discernment"],
    message: "Your mind is your sharpest sword. Wield it with precision — and with mercy."
  },
  {
    id: 63,
    number: "King",
    suit: "Swords",
    name: "King of Swords",
    uprightMeaning: "Intellectual authority, clear judgment, and ethical leadership. The King of Swords rules with the power of a brilliant mind and an unwavering commitment to truth. This is a time to make decisions based on logic, fairness, and long-term wisdom.",
    reversedMeaning: "Tyranny, manipulation, or the misuse of intellectual power may be at play. The reversed King of Swords asks you to examine whether your authority is being exercised with integrity or used to dominate and control.",
    keywords: ["Authority", "Intellect", "Justice", "Truth", "Ethical Leadership"],
    message: "True authority is built on truth, not power. Lead with your mind and your conscience."
  }
];

// ── MINOR ARCANA — PENTACLES ──────────────────────────────────────────────────

export const pentacles: TarotCard[] = [
  {
    id: 64,
    number: "Ace",
    suit: "Pentacles",
    name: "Ace of Pentacles",
    uprightMeaning: "A new material or financial opportunity presents itself. The Ace of Pentacles is the seed of abundance — a chance to build something real, lasting, and prosperous. Plant this seed with care and tend to it with patience and practical wisdom.",
    reversedMeaning: "A financial opportunity may be slipping away or proving less solid than it appeared. The reversed Ace of Pentacles asks you to examine whether you are making grounded, practical decisions or chasing an illusion of security.",
    keywords: ["New Opportunity", "Abundance", "Prosperity", "Manifestation", "Foundation"],
    message: "Abundance begins with a single seed planted in fertile ground. What will you grow?"
  },
  {
    id: 65,
    number: "Two",
    suit: "Pentacles",
    name: "Two of Pentacles",
    uprightMeaning: "You are juggling multiple priorities with impressive adaptability. The Two of Pentacles speaks of balance in motion — managing competing demands with grace and flexibility. Stay light on your feet and trust your ability to keep all the balls in the air.",
    reversedMeaning: "You may be overwhelmed by competing demands or losing your balance. The reversed Two of Pentacles asks you to prioritize ruthlessly. You cannot do everything — choose what truly matters and let the rest go.",
    keywords: ["Balance", "Adaptability", "Juggling", "Flexibility", "Priorities"],
    message: "Life is a dance, not a march. Stay light, stay flexible, stay in rhythm."
  },
  {
    id: 66,
    number: "Three",
    suit: "Pentacles",
    name: "Three of Pentacles",
    uprightMeaning: "Skilled collaboration and the mastery of your craft. The Three of Pentacles celebrates the power of teamwork, apprenticeship, and the satisfaction of building something of lasting quality. Your skills are recognized — continue to refine them.",
    reversedMeaning: "Lack of teamwork, poor planning, or undervaluing your own skills may be hindering your progress. The reversed Three of Pentacles asks you to examine whether you are truly collaborating or simply going through the motions.",
    keywords: ["Collaboration", "Skill", "Craftsmanship", "Teamwork", "Recognition"],
    message: "Mastery is built one deliberate practice at a time. Your craft is your prayer."
  },
  {
    id: 67,
    number: "Four",
    suit: "Pentacles",
    name: "Four of Pentacles",
    uprightMeaning: "Security and stability are valuable — but clinging too tightly to what you have may be preventing growth. The Four of Pentacles asks you to examine your relationship with money, control, and the fear of loss. True security comes from within.",
    reversedMeaning: "You are beginning to loosen your grip and allow abundance to flow more freely. The reversed Four of Pentacles signals a healthy release of financial anxiety or the courage to invest in what truly matters.",
    keywords: ["Security", "Control", "Possessiveness", "Stability", "Conservation"],
    message: "Hold what you have with open hands. What is truly yours cannot be lost — and what you grip too tightly will slip away."
  },
  {
    id: 68,
    number: "Five",
    suit: "Pentacles",
    name: "Five of Pentacles",
    uprightMeaning: "Financial hardship, poverty consciousness, or feeling left out in the cold. The Five of Pentacles speaks of material struggle — but also of the support that is available if you are willing to ask for it. You are not as alone as you feel.",
    reversedMeaning: "Recovery from financial hardship is underway. The reversed Five of Pentacles signals that the worst of the struggle is passing and that help is available. Allow yourself to receive support without shame.",
    keywords: ["Hardship", "Poverty", "Isolation", "Struggle", "Recovery"],
    message: "Even in the coldest winter, warmth exists somewhere nearby. Do not be too proud to seek shelter."
  },
  {
    id: 69,
    number: "Six",
    suit: "Pentacles",
    name: "Six of Pentacles",
    uprightMeaning: "Generosity, charity, and the beautiful cycle of giving and receiving. The Six of Pentacles represents the flow of abundance — sharing what you have with those in need and trusting that what you give will return to you multiplied.",
    reversedMeaning: "Imbalance in giving and receiving may be creating resentment or dependency. The reversed Six of Pentacles asks you to examine whether your generosity is truly free or whether it comes with strings attached.",
    keywords: ["Generosity", "Charity", "Giving", "Receiving", "Balance"],
    message: "Abundance flows where generosity goes. Give freely — the universe keeps perfect accounts."
  },
  {
    id: 70,
    number: "Seven",
    suit: "Pentacles",
    name: "Seven of Pentacles",
    uprightMeaning: "Patient investment and the wisdom of long-term thinking. The Seven of Pentacles asks you to pause and assess the fruits of your labor. You have worked hard — now evaluate whether your efforts are yielding the harvest you envisioned.",
    reversedMeaning: "Impatience, poor investment of time or resources, or working hard without strategic direction. The reversed Seven of Pentacles asks you to reassess your approach. Effort without strategy rarely produces the desired harvest.",
    keywords: ["Patience", "Investment", "Assessment", "Long-term Vision", "Harvest"],
    message: "The farmer does not dig up the seed to check its progress. Trust the process — your harvest is coming."
  },
  {
    id: 71,
    number: "Eight",
    suit: "Pentacles",
    name: "Eight of Pentacles",
    uprightMeaning: "Dedicated craftsmanship and the mastery that comes from focused, repetitive practice. The Eight of Pentacles celebrates the apprentice who shows up every day and hones their skill with devotion. Excellence is built one hour at a time.",
    reversedMeaning: "Perfectionism, lack of focus, or going through the motions without genuine engagement. The reversed Eight of Pentacles asks you to reconnect with the love of your craft. Mastery requires presence, not just repetition.",
    keywords: ["Craftsmanship", "Mastery", "Dedication", "Skill Development", "Diligence"],
    message: "Every hour of devoted practice is a prayer to your potential. Show up — and keep showing up."
  },
  {
    id: 72,
    number: "Nine",
    suit: "Pentacles",
    name: "Nine of Pentacles",
    uprightMeaning: "Luxurious independence and the satisfaction of self-sufficiency. The Nine of Pentacles celebrates the woman who has built her own garden — financially secure, elegantly self-reliant, and deeply content in her own company. You have earned this.",
    reversedMeaning: "Financial dependence or sacrificing personal values for material security may be creating inner conflict. The reversed Nine of Pentacles asks you to examine whether your current lifestyle truly reflects your authentic self.",
    keywords: ["Independence", "Luxury", "Self-Sufficiency", "Abundance", "Refinement"],
    message: "You built this with your own hands. Stand in your garden and savor every bloom."
  },
  {
    id: 73,
    number: "Ten",
    suit: "Pentacles",
    name: "Ten of Pentacles",
    uprightMeaning: "Lasting wealth, family legacy, and the ultimate fulfillment of material and spiritual abundance. The Ten of Pentacles represents the pinnacle of earthly achievement — a life of deep roots, enduring prosperity, and the joy of sharing it with those you love.",
    reversedMeaning: "Family conflict over money, a shaky financial foundation, or the hollowness of material success without emotional connection. The reversed Ten of Pentacles asks you to examine what truly constitutes wealth in your life.",
    keywords: ["Legacy", "Wealth", "Family", "Stability", "Long-term Security"],
    message: "True wealth is measured not in what you accumulate, but in what you leave behind."
  },
  {
    id: 74,
    number: "Page",
    suit: "Pentacles",
    name: "Page of Pentacles",
    uprightMeaning: "A diligent student with a practical vision for the future. The Page of Pentacles brings news of new financial or educational opportunities and the enthusiasm to learn and grow. Plant the seeds of your ambitions with careful, grounded action.",
    reversedMeaning: "Lack of focus, procrastination, or unrealistic expectations about money and success. The reversed Page of Pentacles asks you to develop a practical plan and commit to it, rather than dreaming without doing.",
    keywords: ["Ambition", "Diligence", "Practicality", "Learning", "New Opportunity"],
    message: "Every great achievement begins with a single committed step. Start small — start now."
  },
  {
    id: 75,
    number: "Knight",
    suit: "Pentacles",
    name: "Knight of Pentacles",
    uprightMeaning: "Methodical, reliable, and committed to excellence. The Knight of Pentacles moves slowly but surely, building toward goals with unwavering dedication and practical wisdom. This is a time for steady, consistent effort — not dramatic leaps.",
    reversedMeaning: "Stubbornness, stagnation, or an obsessive focus on security at the expense of growth. The reversed Knight of Pentacles asks you to examine whether your caution has become an obstacle. Sometimes the safe path is the most dangerous one.",
    keywords: ["Reliability", "Dedication", "Methodical", "Patience", "Consistency"],
    message: "Slow and steady does not mean small. The most enduring empires are built one stone at a time."
  },
  {
    id: 76,
    number: "Queen",
    suit: "Pentacles",
    name: "Queen of Pentacles",
    uprightMeaning: "Nurturing abundance, practical wisdom, and the art of creating a beautiful, prosperous life. The Queen of Pentacles is the master of making things grow — whether gardens, businesses, or families. She is generous, grounded, and magnificently capable.",
    reversedMeaning: "Financial insecurity, neglect of self or home, or smothering others with material gifts instead of emotional presence. The reversed Queen of Pentacles asks you to examine where your nurturing energy is truly needed.",
    keywords: ["Nurturing", "Abundance", "Practicality", "Generosity", "Grounded Wisdom"],
    message: "You create abundance wherever you go. Your hands turn everything they touch into something beautiful."
  },
  {
    id: 77,
    number: "King",
    suit: "Pentacles",
    name: "King of Pentacles",
    uprightMeaning: "Mastery of the material world through wisdom, patience, and disciplined effort. The King of Pentacles has built an empire through integrity and long-term thinking. This is a time to lead with practical wisdom, generosity, and the confidence of earned success.",
    reversedMeaning: "Greed, stubbornness, or defining your worth entirely by material success may be limiting you. The reversed King of Pentacles asks you to examine whether your pursuit of security has come at the cost of your soul.",
    keywords: ["Abundance", "Security", "Mastery", "Generosity", "Prosperity"],
    message: "True wealth is the freedom to live on your own terms. You have earned the right to that freedom."
  }
];

// ── FULL DECK ─────────────────────────────────────────────────────────────────

export const allCards: TarotCard[] = [
  ...majorArcana,
  ...wands,
  ...cups,
  ...swords,
  ...pentacles
];

export const getRandomCard = (): { card: TarotCard; reversed: boolean } => {
  const card = allCards[Math.floor(Math.random() * allCards.length)];
  const reversed = Math.random() > 0.5;
  return { card, reversed };
};
