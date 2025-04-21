export function betterThanAverage(classPoints: number[], yourPoints: number): boolean {
    let total = 0;
    let numPoints = classPoints.length;
    for (let i = 0; i < numPoints; i++) {
        total += classPoints[i];
    }
    let moy = total / numPoints;
    return yourPoints > moy;
}