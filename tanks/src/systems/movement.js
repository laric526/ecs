import { System } from "../../../src/system.js";

export const movementSystem = new System("movement",
 ["rotation", "velocity", "input", "player_controlled"],
 (entity) => {
    entity.components.input.axes.
 }
);