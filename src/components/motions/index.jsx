import { Engine, Render, World, Bodies } from 'matter-js';

const engine = Engine.create();
// const ground = Bodies.rectangle(400, 610, 800, 60, { isStatic: true });
// const character = Bodies.rectangle(100, 450, 50, 50);
World.add(engine.world, [ground, character]);
Engine.update(engine);

const character = Bodies.rectangle(100, 450, 50, 50, { 
    collisionFilter: {
        category: 0x0001,
        mask: 0x0002
    }
});

const ground = Bodies.rectangle(400, 610, 800, 60, { 
    isStatic: true, 
    collisionFilter: {
        category: 0x0002,
        mask: 0x0001
    }
});

// Matter.Events.on(engine, 'collisionStart', function(event) {
//     const pairs = event.pairs;
//     console.log(pairs);
//     // обработка столкновений
// });
