async function diningHall(){
    const request = await fetch('/api/dining/');
    const diningData = await request.json();
    const diningTable = document.querySelector('today');

    diningData.data.forEach(hall) => {
        const diningLocation = document.createElement('tr');
        diningLocation.innerHTML = `
        <th>${dhll.hall_id}</th>
        <th>${dhll.hall_name}</th>
        <th>${dhll.hall_address}</th>`
        diningTable.append(diningLocation);
    });

    const marcosRequest = await fetch('api/mealmacros');
    const marcosData = await marcosRequest.json();
    const chart = new CanvasJS.Chart('container', {
        animationEnabled: true,
        title: {
            text:'Top Ten Mactos Meals'
        },
        axisX: {
            interval: 1,
            label: "Meals",
        },
        axisY: {
            label: "Macros",
        },
        toolTip: {
            shared: true
        },
        legend:{
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
                type: 'stackedBar',
                name: 'Calories',
                showInLegend: 'true',
                dataPoints: caloriesData
            },
            {
                type: 'stakedBar',
                name: 'Cholesterol',
                showInLenged: 'true',
                dataPoints: cholesterolData
            },
            {
                type: 'stakedBar',
                name: 'Sodium',
                showInLegend: 'true',
                dataPoints: sodiumData
            },
            {
                type: 'stakedBar',
                name: 'Carbs',
                showInLegend: 'true',
                dataPoints: carbsData
            },
            {
                type: 'stakedBar',
                name: 'Protein',
                showInLegend: 'true',
                dataPoints: proteinData
            },
            {
                type: 'stakedBar',
                name: 'Fat',
                showInLegend: 'true',
                dataPoints: fatData
            },
        ]
    });
    
    marcosData.forEach((meal) => {
        caloriesData.push({label: meal.meal_name, y: meal.calories});
        servingData.push({label: meal.meal_name, y: meal.serving_size});
        cholData.push({label: meal.meal_name, y: meal.cholesterol});
        sodiumData.push({label: meal.meal_name, y: meal.sodium});
        carbsData.push({label: meal.meal_name, y: meal.carbs});
        proteinData.push({label: meal.meal_name, y: meal.protein});
        fatData.push({label: meal.meal_name, y: meal.fat});
    });

    chart.render();

    function toggleDataSeries(e) {
        if (typeof e.dataSeries.visible === 'undefined' || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        chart.render();
      }
    }

window.onload = diningHall();
