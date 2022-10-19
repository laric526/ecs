import { Entity } from "../../src/entity.js";

export const playerEntity = new Entity(
    ["input", "position", "rotation", "speed", "rotation_speed", "sprite", "velocity", "rotation_velocity", "player_controlled", "render"],
    () => {
        this.components.sprite.sprite = "32";
        this.components.position.x = 48;
        this.components.position.y = 24;
        this.components.speed.speed = 2;
        this.components.rotation_speed.speed = 3.5;
    }
);