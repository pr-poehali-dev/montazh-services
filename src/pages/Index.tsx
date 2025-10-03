import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Монтаж электрических систем",
      description: "Установка и подключение электрических сетей, розеток, выключателей и освещения",
      icon: "Zap"
    },
    {
      title: "Монтаж сантехнических систем",
      description: "Установка труб, сантехники, водоснабжения и канализации",
      icon: "Wrench"
    },
    {
      title: "Монтаж вентиляционных систем",
      description: "Установка и настройка вентиляционных систем для обеспечения качественного воздухообмена",
      icon: "Wind"
    },
    {
      title: "Монтаж отопления",
      description: "Установка и настройка систем отопления, включая радиаторы, котлы и теплые полы",
      icon: "Flame"
    },
    {
      title: "Монтаж мебельных систем",
      description: "Установка кухонной мебели, шкафов, стеллажей и других мебельных конструкций",
      icon: "Package"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-secondary shadow-md">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Zap" size={28} className="text-primary-foreground" />
              <span className="text-xl font-bold text-primary-foreground">Услуги по Монтажу</span>
            </div>
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                Контакты
              </button>
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="py-20 md:py-32 bg-gradient-to-b from-secondary to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Профессиональные услуги по монтажу
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Мы предлагаем профессиональные услуги по монтажу различных конструкций и систем. 
              Наши специалисты готовы выполнить любой проект, от простых до сложных.
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg hover-scale"
            >
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Наши Услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Широкий спектр монтажных работ для вашего комфорта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover-scale border-border hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              О нас
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover-scale">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-full">
                    <Icon name="Award" size={40} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">10+ лет</h3>
                  <p className="text-muted-foreground">опыта в сфере монтажных работ</p>
                </CardContent>
              </Card>

              <Card className="text-center hover-scale">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-full">
                    <Icon name="Users" size={40} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">500+</h3>
                  <p className="text-muted-foreground">довольных клиентов</p>
                </CardContent>
              </Card>

              <Card className="text-center hover-scale">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-full">
                    <Icon name="CheckCircle" size={40} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">100%</h3>
                  <p className="text-muted-foreground">гарантия качества</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Наша компания имеет многолетний опыт в сфере монтажных работ. 
                Мы гордимся высоким качеством наших услуг и индивидуальным подходом к каждому клиенту. 
                Наши специалисты постоянно совершенствуют свои навыки, чтобы предлагать вам только лучшие решения.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Контакты
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Телефон</h3>
                      <a href="tel:+71234567890" className="text-muted-foreground hover:text-primary transition-colors">
                        +7 (123) 456-78-90
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Email</h3>
                      <a href="mailto:info@montazh.ru" className="text-muted-foreground hover:text-primary transition-colors">
                        info@montazh.ru
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale md:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Адрес</h3>
                      <p className="text-muted-foreground">
                        г. Москва, ул. Монтажная, д. 1
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Если у вас есть вопросы или вы хотите заказать услуги, свяжитесь с нами любым удобным способом
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 hover-scale"
              >
                Отправить заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Услуги по Монтажу. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
