function calculateRadiusByLevel(currentLevel) {
    let radius;
    switch (currentLevel) {
      case 1:
        radius = 30;
        break;
      case 2:
        radius = 20;
        break;
      case 3:
        radius = 15;
        break;
      default:
        radius = 30;
    }
    return radius;
  }

  function calculateTimeLevel(level) {
    let lengthTime;
    switch (level) {
      case 1:
        return 2;
      case 2:
        return 1.5;
      case 3:
        return 1;
      default:
        return 0;
    }
  }