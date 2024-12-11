export class LanguageUtils {
    private static currentLanguage: string;
  
    static detectBrowserLanguage(): string {
      const browserLang = navigator.language || navigator.languages[0];
      // console.log(browserLang, "Detected browser language");
      return browserLang ? browserLang.split('-')[0] : 'en';
    }
  
    static setLanguage(window:any,language: string): void {
      window.localStorage.setItem('lang', language); 
      // this.currentLanguage = language;

    }

    static getLanguage(window:any): string {
      const savedLanguage = window.localStorage.getItem('lang')
      const browserLang = this.detectBrowserLanguage()
      // console.log(`Saved language: ${savedLanguage}`);
      // console.log(`current language: ${this.currentLanguage}`);
      // console.log(`browser language: ${browserLang}`);
  
      const lang = savedLanguage? savedLanguage :  browserLang? browserLang : 'en'
      // console.log(`language: ${lang}`);
      return lang;
    }

  
  }