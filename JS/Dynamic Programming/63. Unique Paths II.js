/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const dp = [];
    if (obstacleGrid[0][0] === 1) {
        return 0;
    }
    const [m, n] = [obstacleGrid.length, obstacleGrid[0].length];
    dp[0, 0] = 1;
    for(let i = 0; i < m; i++) {
        dp[i] = [];
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else if (i === 0 && j === 0) {
                dp[i][j] = 1;
            } else if (i === 0) {      // Note for special case, the first row/column, the value relys on the previous one instead of hard-coded 1 like unique path I
                dp[i][j] = dp[i][j - 1];
            } else if (j === 0) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
            }
        }
    }
    return dp[m - 1][n - 1];
};
