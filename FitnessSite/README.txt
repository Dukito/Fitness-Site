
Project Title: Fitness Call - BMR/BMI/Fat Calculator & Signup System



 Описание:

"Fitness Call" е уеб базирано фитнес приложение, което позволява на потребителите да:

    Извършват калкулации на:

        BMR (Basal Metabolic Rate) – базов метаболизъм

        BMI (Body Mass Index) – индекс на телесната маса

        Body Fat % – процент мазнини в тялото

    Въведат информация като възраст, пол, тегло, ръст и ниво на активност

    Регистрират акаунт чрез форма, която записва данните в база данни чрез ASP.NET Core Web API



 Технологии:

    Frontend: HTML5, CSS3, JavaScript

    Backend: ASP.NET Core Web API

    База данни: SQL Server (LocalDB)

    ORM: Entity Framework Core

    Допълнително: Swagger UI за визуализация и тестване на API



 Инструкции за стартиране:

    Изисквания:

        .NET 6 или по-нов

        Visual Studio Code или Visual Studio

        SQL Server LocalDB

    Стартиране на API:

        Резархивирай те FitnessSignupApi.zip 

        Отвори проекта в Visual Studio Code

        Провери FitnessSignupApi/appsettings.json:

EXAMPLE->  "ConnectionStrings": {
           "DefaultConnection": "Server= "Име то на сървара" ;Database= "Име то на базата данни";Trusted_Connection=True;MultipleActiveResultSets=true" 
}

        Изтеглете Extension-а .NET Install Tool




В терминала изпълни:
        cd FitnessSignupApi
        dotnet tool install dotnet-ef
        dotnet restore
        dotnet ef database update
        dotnet run

        API-то ще работи на: https://localhost:7227/swagger



    Стартиране на сайта (frontend):

        Отвори HTML файловете с браузър или чрез Live Server разширение

    Swagger UI (по избор):

        Достъпен е на: https://localhost:7227/swagger



