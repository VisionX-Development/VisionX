import React from "react";
import { TermsMain } from "../styles/PrivacyTerms";
import Link from "next/link";

export default function Terms() {
  return (
    <TermsMain data-testid="TermsComponent">
      <h1>Impressum</h1>
      <h2>Betreiber der Webseite </h2>
      <p>
        <strong>VISIONX.DEV</strong>
        <br />
        Inhaber der Domain: M. Hübner
        <br />
        <p style={{ fontSize: "1.3rem", textAlign: "left" }}>
          <span style={{ visibility: "hidden" }} aria-hidden="true">
            {/* PLEASE GO AWAY! */}
          </span>
          Kontakt: info{/*afdasdf*/}@{/*sdfjsdhfkjypcs*/}visionx.dev
        </p>
      </p>
      <h1>Nutzungsbedingungen</h1>
      <h2>Haftungsausschluss</h2>
      <p>Es entstehen keinerlei Haftungsansprüche.</p>
      <p>
        Trotz sorgfältiger inhaltlicher Kontrolle kann keine Haftung für die
        Inhalte externer Links übernommen werden. Für den Inhalt der verlinkten
        Seiten sind ausschließlich deren Betreiber verantwortlich.
      </p>
      <p>
        Die Betreibung und Betreuung der Webseite VISIONX.DEV sowie weitere
        damit ggf. verbundener Web-Applikationen (wie z.B. RAD.REPORT) erfolgt
        ausschließlich privat und ohne gewerblichen Nutzen oder
        Gewinnerziehlungsabsicht. Die Nutzung erfolgt freiwillig. Es besteht
        keine Gewähr auf Funktionalität oder Erreichbarkeit der Webseite
        VISIONX.DEV und deren verbundenen Web-Applikationen (z.B. RAD.REPORT).
        Der Betreiber von VISIONX.DEV behält sich vor, die Webseite VISIONX.DEV
        und deren verbundenen Web-Applikationen jederzeit ohne Ankündigung zu
        verändern oder einzustellen.
      </p>
      <p>
        Für die Erstellung von Web-Applikationen oder Webseiten wird 'Open
        Source'-Software (z.B. Node.js, Next.js) verwendet, deren Verwendung im
        Rahmen einer 'Open-Source'-Lizenz frei ist und keiner gesonderten
        Erwähnung bedarf (z.B. im Rahmen einer&nbsp;
        <Link href="https://de.wikipedia.org/wiki/MIT-Lizenz">
          "MIT-Lizenz"
        </Link>
        ).
      </p>
      <p>
        Wird Bildmaterial verwendet, dann ebenfalls nur wenn die Bildrechte beim
        Inhaber der Domain liegen oder diese unter einer freien Lizenz beliebig
        verwendet werden darf, auch ohne gesonderte Nennung der Urheber .
      </p>
      <h2>Regulatorische Hinweise</h2>
      <p>
        Im Rahmen der Webseite VISIONX.DEV und deren verbundenen
        Web-Applikationen können personenbezogene Daten erhoben werden, hierzu
        siehe im Weiteren die aktuellen Datenschutzbestimmungen unter{" "}
        <Link href="/datenschutz">visionx.dev/datenschutz</Link>.
      </p>
      <p>
        Von Nutzern/ registrierten Besuchern der Webseite VISIONX.DEV und deren
        verbundenen Web-Applikationen können externe Daten, Informationen oder
        Links zu externen Webseiten oder Web-Applikationen in den Datenbanken
        der jeweiligen Applikationen gespeichert werden. Der Betreiber von
        VISIONX.DEV übernimmt keine Haftung für die Inhalte dieser externen
        Daten, Informationen und Links. VISIONX.DEV behält sich allerdings vor
        diese Daten auf ihre Rechtmäßigkeit bzw. Anstößigkeit zu prüfen und bei
        Zuwiederhandlung zu löschen.
      </p>
      <p>
        Die Webseite VISIONX.DEV und deren verbundenen Web-Applikationen wie
        z.B. RAD.REPORT stehen für eine freie und offene Weltanschauung sowie
        einen respektvollen Umgang miteinander. VISIONX.DEV erkennt die
        Gleichberechtigung aller Menschen an, unabhängig von Geschlecht oder
        gefühlter Geschlechtszugehörigkeit, sexueler Neigung, Alter, Ursprung,
        politischer Gesinnung und Meinung. Alle Inhalte die individuelle
        Grundrechte und Freiheit in diesem Sinne unterdrücken sowie Inhalte
        gewalttätiger, kriminalistischer, rassistischer oder unsittlicher Art,
        sind nicht gestattet und werden gelöscht. Der Betreiber von VISIONX.DEV
        behält sich vor, Nutzer, die gegen diese Regeln verstoßen, zu sperren
        und ggf. rechtliche Schritte einzuleiten.
      </p>
      <h2>Hinweis zu medizinischen Inhalten</h2>
      <p>
        Der medizinische Fortschritt ist ständiger Veränderung unterworfen. Neue
        Erkenntnisse können den gültigen Stand des medizinischen Wissens in nur
        kurzer Zeit verändern. Trotz größter möglicher Sorgfalt bei der
        Erstellung der Inhalte dieser Webseite kann keine Gewähr für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernommen
        werden. Die Inhalte dieser Webseite dienen ausschließlich der
        Information und Hilfestellung, ersetzen aber in keinem Fall eine
        persönliche Beratung, Untersuchung oder Diagnose durch einen Facharzt
        oder Experten. Die im Rahmen dieser Webseite bzw. der zugehörigen
        Web-Applikationen, insbesondere von "RAD.REPORT" zur Verfügung
        gestellten Hilfsmittel dürfen nicht allein und ohne Prüfung zur
        Erstellung von Diagnosen verwendet werden. Bitte beachten Sie hier
        jeglichen Haftungsausschluss. Jeder Benutzer ist angehalten, durch
        sorgfältige Prüfung der angebotenen Hilfmittel mögliche Fehler oder
        Fehlangaben auf VISIONX.DEV zu erkennen und zu melden.
      </p>
    </TermsMain>
  );
}
