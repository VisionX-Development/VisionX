import React from "react";
import Link from "next/link";
import { TermsMain } from "../styles/PrivacyTerms";

const PrivacyStatment: React.FC<{}> = () => {
  return (
    <TermsMain>
      <h1>Datenschutzerklärung</h1>
      <h3>Einleitung</h3>
      <p>
        Mit der folgenden Information sollen Sie, ggf. als "betroffene Person",
        einen Überblick über die Verarbeitung Ihrer personenbezogenen Daten
        sowie Ihre Rechte aus dem Datenschutzgesetzen erhalten. Ein Besuch
        dieser Internetseiten ist grundsätzlich ohne Eingabe personenbezogener
        Daten möglich. Sofern Sie besondere Funktionen z.B. im Rahmen von
        Web-Applikationen wie z.B. {""}
        <strong>"BEFUND.BAR"</strong> in Anspruch nehmen möchten, ist eine
        Verarbeitung personenbezogener Daten u.a. zur Registrierung und
        Zuordnung einer Benutzeroberfläche erforderlich. Ist die Verarbeitung
        personenbezogener Daten erforderlich und besteht für eine solche
        Verarbeitung keine gesetzliche Grundlage, holt {""}
        <strong>VISIONX.DEV</strong> generell eine Einwilligung dazu von Ihnen
        ein.
      </p>
      <p>
        Die Verarbeitung von personenbezogener Daten, beispielsweise Ihres
        Namens, der Anschrift oder E-Mail-Adresse, erfolgt im Einklang mit der
        Datenschutz-Grundverordnung (DS-GVO) und in Übereinstimmung mit den
        geltenden landesspezifischen Datenschutzbestimmungen. Mittels dieser
        Datenschutzerklärung möchten ich Sie über Umfang und Zweck der
        erhobenen, genutzten und verarbeiteten personenbezogenen Daten
        informieren.
      </p>
      <p>
        Als für die Verarbeitung Ihrer Daten verantwortlich, werden technische
        und organisatorische Maßnahmen umgesetzt, um einen möglichst lückenlosen
        Schutz der verarbeiteten personenbezogenen Daten sicherzustellen.
        Dennoch können bei einer internetbasierten Datenübertragungen sowie
        Datenverwaltung grundsätzlich (unbekannte) Sicherheitslücken auftreten
        oder entstehen, sodass ein absoluter Schutz nicht gewährleistet werden
        kann. Die Angabe Ihrer personenbezogenen Daten ist freiwillig und aus
        der nicht-Angabe entstehen Ihnen keinerlei Nachteile.
      </p>
      <h2>Verantwortlichkeit</h2>
      <p className="bold">Verantwortlich im Sinne der DS-GVO:</p>

      <p>
        <strong>VISIONX.DEV</strong>

        <p style={{ fontSize: "1.3rem", textAlign: "left" }}>
          <span style={{ visibility: "hidden" }} aria-hidden="true">
            {/* PLEASE GO AWAY! */}
          </span>
          Kontakt: info{/*afdasdf*/}@{/*sdfjsdhfkjypcs*/}visionx.dev
        </p>
      </p>

      <h2>Begriffsbestimmungen</h2>
      <p>
        Die Datenschutzerklärung beruht auf den Begrifflichkeiten, die durch den
        Europäischen Richtlinien- und Verordnungsgeber beim Erlass der
        Datenschutz-Grundverordnung (DS-GVO) verwendet wurden. Diese
        Datenschutzerklärung soll sowohl für Sie einfach lesbar und verständlich
        sein. Um dies zu gewährleisten, möchten ich vorab die verwendeten
        Begrifflichkeiten erläutern.
      </p>
      <p className="bold">Personenbezogene Daten</p>
      <p>
        Personenbezogene Daten sind alle Informationen, die sich auf eine
        identifizierte oder identifizierbare natürliche Person beziehen. Als
        identifizierbar wird eine natürliche Person angesehen, die direkt oder
        indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem
        Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung
        oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der
        physischen, physiologischen, genetischen, psychischen, wirtschaftlichen,
        kulturellen oder sozialen Identität dieser natürlichen Person sind,
        identifiziert werden kann.
      </p>
      <p className="bold">Betroffene Person</p>
      <p>
        Betroffene Person ist jede identifizierte oder identifizierbare
        natürliche Person, deren personenbezogene Daten von dem für die
        Verarbeitung Verantwortlichen verarbeitet werden.
      </p>
      <p className="bold">Verarbeitung</p>
      <p>
        Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren
        ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit
        personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation,
        das Ordnen, die Speicherung, die Anpassung oder Veränderung, das
        Auslesen, das Abfragen, die Verwendung, die Offenlegung durch
        Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den
        Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die
        Vernichtung.
      </p>
      <p className="bold">Einschränkung der Verarbeitung</p>
      <p>
        Einschränkung der Verarbeitung ist die Markierung gespeicherter
        personenbezogener Daten mit dem Ziel, ihre künftige Verarbeitung
        einzuschränken.
      </p>
      <p className="bold">Profiling</p>
      <p>
        Profiling ist jede Art der automatisierten Verarbeitung
        personenbezogener Daten, die darin besteht, dass diese personenbezogenen
        Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf
        eine natürliche Person beziehen, zu bewerten, insbesondere, um Aspekte
        bezüglich Arbeitsleistung, wirtschaftlicher Lage, Gesundheit,
        persönlicher Vorlieben, Interessen, Zuverlässigkeit, Verhalten,
        Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren
        oder vorherzusagen.
      </p>
      <p className="bold">Pseudonymisierung</p>
      <p>
        Pseudonymisierung ist die Verarbeitung personenbezogener Daten in einer
        Weise, auf welche die personenbezogenen Daten ohne Hinzuziehung
        zusätzlicher Informationen nicht mehr einer spezifischen betroffenen
        Person zugeordnet werden können, sofern diese zusätzlichen Informationen
        gesondert aufbewahrt werden und technischen und organisatorischen
        Maßnahmen unterliegen, die gewährleisten, dass die personenbezogenen
        Daten nicht einer identifizierten oder identifizierbaren natürlichen
        Person zugewiesen werden.
      </p>
      <p className="bold">Auftragsverarbeiter</p>
      <p>
        Auftragsverarbeiter ist eine natürliche oder juristische Person,
        Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im
        Auftrag des Verantwortlichen verarbeitet.
      </p>
      <p className="bold">Empfänger</p>
      <p>
        Empfänger ist eine natürliche oder juristische Person, Behörde,
        Einrichtung oder andere Stelle, der personenbezogene Daten offengelegt
        werden, unabhängig davon, ob es sich bei ihr um einen Dritten handelt
        oder nicht. Behörden, die im Rahmen eines bestimmten
        Untersuchungsauftrags nach dem Unionsrecht oder dem Recht der
        Mitgliedstaaten möglicherweise personenbezogene Daten erhalten, gelten
        jedoch nicht als Empfänger.
      </p>
      <p className="bold">Dritter</p>
      <p>
        Dritter ist eine natürliche oder juristische Person, Behörde,
        Einrichtung oder andere Stelle außer der betroffenen Person, dem
        Verantwortlichen, dem Auftragsverarbeiter und den Personen, die unter
        der unmittelbaren Verantwortung des Verantwortlichen oder des
        Auftragsverarbeiters befugt sind, die personenbezogenen Daten zu
        verarbeiten.
      </p>
      <p className="bold">Einwilligung</p>
      <p>
        Einwilligung ist jede von der betroffenen Person freiwillig für den
        bestimmten Fall in informierter Weise und unmissverständlich abgegebene
        Willensbekundung in Form einer Erklärung oder einer sonstigen
        eindeutigen bestätigenden Handlung, mit der die betroffene Person zu
        verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden
        personenbezogenen Daten einverstanden ist.
      </p>
      <h2>Rechtsgundlagen</h2>
      <p>
        Art. 6 Abs. 1 lit. a DS-GVO dient VISIONX.DEV oder damit verbundenen
        Projekten/ Web-Applikationen und Webseiten als Rechtsgrundlage für
        Verarbeitungsvorgänge. Hierbei VISIONX.DEV überwiegend Einwilligungen
        für einen bestimmten Verarbeitungszweck ein.
      </p>
      <p>
        Ist die Verarbeitung personenbezogener Daten zur Erfüllung eines
        Vertrags, dessen Vertragspartei Sie sind, erforderlich, wie dies
        beispielsweise bei Verarbeitungsvorgängen der Fall ist, die für eine
        Lieferung von Waren oder die Erbringung einer sonstigen Leistung oder
        Gegenleistung notwendig sind (auch unentgledlich), so beruht die
        Verarbeitung auf Art. 6 Abs. 1 lit. b DS-GVO. Gleiches gilt für solche
        Verarbeitungsvorgänge die zur Durchführung vorvertraglicher Maßnahmen
        erforderlich sind, etwa in Fällen von Anfragen zur bestimmten Produkten
        oder Leistungen.
      </p>
      <p>
        Sollte VISIONX.DEV einer rechtlichen Verpflichtung unterliegen, durch
        welche eine Verarbeitung von personenbezogenen Daten erforderlich wird,
        wie beispielsweise zur Erfüllung steuerlicher Pflichten, so basiert die
        Verarbeitung auf Art. 6 Abs. 1 lit. c DS-GVO.
      </p>
      <p>
        In seltenen Fällen könnte die Verarbeitung von personenbezogenen Daten
        erforderlich werden, um lebenswichtige Interessen der betroffenen Person
        oder einer anderen natürlichen Person zu schützen. Dies wäre
        beispielsweise der Fall, wenn ein Besucher im Rahmen einer
        Projektbesprechung verletzt werden würde und daraufhin sein Name, sein
        Alter, seine Krankenkassendaten oder sonstige lebenswichtige
        Informationen an einen Arzt, ein Krankenhaus oder sonstige Dritte
        weitergegeben werden müssten. Dann würde die Verarbeitung auf Art. 6
        Abs. 1 lit. d DS-GVO beruhen.
      </p>
      <p>
        Letztlich könnten Verarbeitungsvorgänge auf Art. 6 Abs. 1 lit. f DS-GVO
        beruhen. Auf dieser Rechtsgrundlage basieren Verarbeitungsvorgänge, die
        von keiner der vorgenannten Rechtsgrundlagen erfasst werden, wenn die
        Verarbeitung zur Wahrung eines berechtigten Interesses von VISIONX.DEV
        oder eines Dritten erforderlich ist, sofern die Interessen, Grundrechte
        und Grundfreiheiten des Betroffenen nicht überwiegen. Solche
        Verarbeitungsvorgänge sind insbesondere deshalb gestattet, weil sie
        durch den europäischen Gesetzgeber besonders erwähnt wurden. Er vertrat
        insoweit die Auffassung, dass ein berechtigtes Interesse anzunehmen sein
        könnte, wenn eine maßgebliche und angemessene Beziehung zwischen der
        betroffenen Person und dem Verantwortlichen besteht, z. B. wenn die
        betroffene Person ein Kunde (ggf. Nutzer von Services) des
        Verantwortlichen ist oder in seinen Diensten steht (Erwägungsgrund 47
        Satz 2 DS-GVO).
      </p>
      <h2>Technik</h2>
      <p className="bold">SSL/TLS-Verschlüsselung</p>
      <p>
        Von VISIONX.DEV entwickelte Webseiten und Web-Applikationen nutzt zur
        Gewährleistung der Sicherheit der Datenverarbeitung und zum Schutz der
        Übertragung vertraulicher Inhalte, wie zum Beispiel Login-Daten oder
        Kontaktanfragen, die Sie an VISIONX.DEV als Betreiber senden, eine
        SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
        Sie daran, dass in der Adresszeile des Browsers statt einem "http://"
        ein "http<strong>s</strong>://" steht und an dem Schloss-Symbol in Ihrer
        Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist,
        können die Daten, die Sie an VISIONX.DEV übermitteln, nicht von Dritten
        mitgelesen werden.
      </p>
      <p className="bold">
        Datenerfasstung bei Besuch von VISIONX.DEV oder verbundener Webseiten
      </p>
      <p>
        Bei der lediglich informatorischen Nutzung der Websiten von VISIONX.DEV,
        also wenn Sie sich nicht registrieren oder anderweitig Informationen
        übermitteln, werden nur solche Daten erhoben, die Ihr Browser an den
        Server übermittelt (in sog. "Server-Logfiles"). VISIONX.DEV
        Internetseiten erfasst mit jedem Aufruf einer Seite durch Sie oder ein
        automatisiertes System eine Reihe von allgemeinen Daten und
        Informationen. Diese allgemeinen Daten und Informationen werden in den
        Logfiles des Servers gespeichert. Erfasst werden können die
      </p>
      <p>- verwendeten Browsertypen und Versionen,</p>
      <p>- das vom zugreifenden System verwendete Betriebssystem,</p>
      <p>
        - die Internetseite(n), von welcher ein zugreifendes System auf meine
        Internetseiten gelangt (sogenannte Referrer),
      </p>
      <p>
        - die Unterwebseiten, welche über ein zugreifendes System auf meine
        Internetseiten angesteuert werden,
      </p>
      <p>- das Datum und die Uhrzeit eines Zugriffs auf die Internetseite,</p>
      <p>- eine Internet-Protokoll-Adresse (IP-Adresse),</p>
      <p>- der Internet-Service-Provider des zugreifenden Systems.</p>
      <p>
        Bei der Nutzung dieser allgemeinen Daten und Informationen kann ich
        keine Rückschlüsse auf Ihre Person ziehen. Diese Informationen werden
        vielmehr benötigt, um
      </p>
      <p>- die Inhalte der Internetseiten korrekt auszuliefern,</p>
      <p>
        - die Inhalte/ Funktionen und Services der Internetseiten zu optimieren,
      </p>
      <p>
        - die dauerhafte Funktionsfähigkeit der IT-Systeme und der Techniken der
        Internetseiten zu gewährleisten sowie
      </p>
      <p>
        - um Strafverfolgungsbehörden im Falle eines Cyberangriffes die zur
        Strafverfolgung notwendigen Informationen bereitzustellen.
      </p>
      <p>
        Diese erhobenen Daten und Informationen werden daher einerseits
        statistisch und ferner mit dem Ziel ausgewertet, den Datenschutz und die
        Datensicherheit zu erhöhen, um letztlich ein optimales Schutzniveau für
        die verarbeiteten personenbezogenen Daten sicherzustellen. Die Daten der
        Server-Logfiles werden getrennt von allen durch eine betroffene Person
        angegebenen personenbezogenen Daten gespeichert.
      </p>
      <p>
        Die Rechtsgrundlage für diese Art der Datenverarbeitung ist Art. 6 Abs.
        1 S. 1 lit. f DS-GVO. Das berechtigtes Interesse folgt aus oben
        aufgelisteten Zwecken zur Datenerhebung.
      </p>
      <h2>Weitergabe von Daten an Dritte</h2>
      <p>
        Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den
        im Folgenden aufgeführten Zwecken findet nicht statt.
      </p>
      <p>VISIONX.DEV gibt Ihre persönlichen Daten nur an Dritte weiter, wenn</p>
      <p>
        - Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DS-GVO ausdrückliche
        Einwilligung dazu erteilt haben,
      </p>
      <p>
        - die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DS-GVO zur Wahrung
        berechtigter Interessen zulässig ist und kein Grund zur Annahme besteht,
        dass Sie ein überwiegendes schutzwürdiges Interesse an der
        Nichtweitergabe Ihrer Daten haben,
      </p>
      <p>
        - für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c
        DS-GVO eine gesetzliche Verpflichtung besteht, sowie
      </p>
      <p>
        - dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b DS-GVO für
        die Abwicklung von Vertrags- oder Nutzerverhältnissen mit Ihnen
        erforderlich ist.
      </p>
      <h2>Cookies</h2>
      <p className="bold">Allgemeines zu Cookies</p>
      <p>
        VISIONX.DEV nutzt auf seinen Internetseite Cookies. Hierbei handelt es
        sich um kleine Dateien, die Ihr Browser automatisch erstellt und die auf
        Ihrem IT-System (Laptop, Tablet, Smartphone o.ä.) gespeichert werden,
        wenn Sie Seite von VISIONX.DEV oder angeschlossene Seiten besuchen.
        Cookies richten auf Ihrem Endgerät keinen Schaden an, enthalten keine
        Viren, Trojaner oder sonstige Schadsoftware.
      </p>
      <p>
        In den Cookies werden Informationen abgelegt, die sich jeweils im
        Zusammenhang mit dem spezifisch eingesetzten Endgerät ergeben. Dies
        bedeutet nicht, dass VISIONX.DEV dadurch unmittelbar Kenntnis von Ihrer
        Identität erhält.
      </p>
      <p>
        Der Einsatz von Cookies dient einerseits dazu, die Nutzung des Angebots
        der Webseiten/ Web-Applikationen von VISIONX.DEV für Sie angenehmer zu
        gestalten. So werden sogenannte Session-Cookies eingesetzt, um zu
        erkennen, dass Sie einzelne Seiten der Websiten bereits besucht haben
        oder sich erfolgreich ein- oder ausgeloggt haben. Diese können auch nach
        verlassen der Webseiten noch eine verstgelegte Zeit in Ihrem Browser
        gespeichert bleiben um Sie bei einem späteren Besuch schneller wieder zu
        erkennen.
      </p>
      <p>
        Die durch Cookies verarbeiteten Daten sind für die genannten Zwecke zur
        Wahrung der berechtigten Interessen von VISIONX.DEV sowie der Dritter
        nach Art. 6 Abs. 1 S. 1 lit. f DS-GVO erforderlich.
      </p>
      <p>
        Die meisten Browser akzeptieren Cookies automatisch. Sie können Ihren
        Browser jedoch so konfigurieren, dass keine Cookies auf Ihrem Computer
        gespeichert werden oder stets ein Hinweis erscheint, bevor ein neuer
        Cookie angelegt wird. Die vollständige Deaktivierung von Cookies kann
        jedoch dazu führen, dass Sie nicht alle Funktionen der Websiten von
        VISIONX.DEV nutzen können.
      </p>
      <h2>Inhalte der Webseiten und Web-Applikationen von VISIONX.DEV</h2>
      <p className="bold">Registrierung als Benutzer</p>
      <p>
        Sie haben die Möglichkeit, sich auf bestimmten Internetseiten/
        Web-Applikationen unter Angabe von personenbezogenen Daten zu
        registrieren. Manchmal erfolgt die Registrierung ausschließlich über den
        Administrator.
      </p>
      <p>
        Welche personenbezogenen Daten dabei an VISIONX.DEV übermittelt werden,
        ergibt sich aus der jeweiligen Eingabemaske, die für die Registrierung
        verwendet wird. Erfolgt die Registrierung über einen Administrator
        fordert er die entsprechenden Daten aktiv von Ihnen ein. Dabei wird noch
        unterschieden zwischen Daten welche so wie sie eingegeben werden in die
        Datenbank gespeichert werden (z.B. Name, E-Mail) sowie Daten welche
        selbst für VISIONX.DEV oder allen Administratoren nicht einsehbar und
        nach einem Verschlüsselungsprinzip in die Datenbank abgespeichert werden
        (z.B. Ihr Passwort). Die von Ihnen eingegebenen personenbezogenen Daten
        werden ausschließlich für die interne Verwendung und für funktionelle
        Zwecke in Bezug auf den jeweiligen Service erhoben und gespeichert.
      </p>
      <p>
        Durch eine Registrierung auf den Internetseiten von VISIONX.DEV wird
        ferner die von Ihrem Internet-Service-Provider (ISP) vergebene
        IP-Adresse, das Datum sowie die Uhrzeit der Registrierung gespeichert.
        Die Speicherung dieser Daten erfolgt vor dem Hintergrund, dass nur so
        der Missbrauch der Dienste von VISIONX.DEV verhindert werden kann, und
        diese Daten im Bedarfsfall ermöglichen, begangene Straftaten
        aufzuklären. Insofern ist die Speicherung dieser Daten zur Absicherung
        der Internetseiten von VISIONX.DEV erforderlich. Eine Weitergabe dieser
        Daten an Dritte erfolgt grundsätzlich nicht, sofern keine gesetzliche
        Pflicht zur Weitergabe besteht oder die Weitergabe der Strafverfolgung
        dient.
      </p>
      <p>
        Ihre Registrierung unter freiwilliger Angabe personenbezogener Daten
        dient außerdem dazu, Ihnen Inhalte oder Leistungen anzubieten, die
        aufgrund der Natur der Sache nur registrierten Benutzern angeboten
        werden können. Registrierten Personen steht die Möglichkeit frei, die
        bei der Registrierung angegebenen personenbezogenen Daten jederzeit
        abzuändern oder vollständig aus dem Datenbestand löschen zu lassen, mit
        den hiermit entsprechend verbundenen Einschränkungen der Nutzung.
      </p>
      <p>
        VISIONX.DEV erteilt Ihnen jederzeit auf Anfrage Auskunft darüber, welche
        personenbezogenen Daten über Sie gespeichert sind. Ferner berichtigt
        oder löscht VISIONX.DEV personenbezogene Daten auf Ihren Wunsch, soweit
        dem keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        Verantwortlich für den Datenschutz, steht Ihnen VISIONX.DEV und in
        diesem Namen der Inhaber der Domain, als betroffene Person jederzeit als
        Ansprechpartner zur Verfügung.
      </p>
      <p>
        Die Verarbeitung Ihrer Daten erfolgt im Interesse einer komfortablen und
        einfachen Nutzung der Internetseiten und Web-Applikationen von
        VISIONX.DEV. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6
        Abs. 1 lit. f DS-GVO dar.
      </p>
      <p className="bold">
        Datenverarbeitung bei Eröffnung eines Kundenkontos und zur
        Vertragsabwicklung
      </p>
      <p>
        Gemäß Art. 6 Abs. 1 lit. b DS-GVO werden personenbezogene Daten erhoben
        und verarbeitet, wenn Sie diese zur Durchführung eines Vertrages oder
        bei der Eröffnung eines Kundenkontos mitteilen. Welche Daten erhoben
        werden, ist aus den jeweiligen Eingabeformularen ersichtlich. Bei
        Eröffnung eines Kontos über einen Administrator fragt er Sie direkt nach
        den entsprechenden Daten. Die Kommunikation über einen Administrator
        erfolgt ausschließlich über die E-Mail-Adressen der Domain, z.B.{""}{" "}
        <strong>info(@v)isionx.dev</strong>. Eine Löschung Ihres Kundenkontos
        ist jederzeit möglich und kann durch eine Nachricht an die o.g.
        E-Mail-Adresse an den Verantwortlichen erfolgen.
      </p>
      <p className="bold">Kontaktaufnahme / Kontaktformular</p>
      <p>
        Im Rahmen der Kontaktaufnahme mit VISIONX.DEV (z.B. per Kontaktformular
        oder E-Mail) werden personenbezogene Daten erhoben. Welche Daten im
        Falle eines Kontaktformulars erhoben werden, ist aus dem jeweiligen
        Kontaktformular ersichtlich. Auch Administratoren von VISIONX.DEV können
        bestimmte Daten erheben, dies geschieht ausschließlich per E-Mail über
        unserer Domain, z.B. <strong>info(@)visionx.dev</strong>. Diese Daten
        werden ausschließlich zum Zweck der Beantwortung Ihres Anliegens bzw.
        für die Kontaktaufnahme und die damit verbundene technische
        Administration gespeichert und verwendet. Rechtsgrundlage für die
        Verarbeitung der Daten das berechtigte Interesse von VISIONX.DEV an der
        Beantwortung Ihres Anliegens gemäß Art. 6 Abs. 1 lit. f DS-GVO. Zielt
        Ihre Kontaktierung auf den Abschluss eines Vertrages oder einer
        Registrierung zu Web-Services von VISIONX.DEV ab, so ist zusätzliche
        Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DS-GVO. Ihre
        Daten werden nach abschließender Bearbeitung Ihrer Anfrage, spätestens
        nach einem halben Kalenderjahr gelöscht, dies ist der Fall, wenn sich
        aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt
        abschließend geklärt ist und sofern keine gesetzlichen
        Aufbewahrungspflichten entgegenstehen.
      </p>
      <h2>Webanalyse</h2>
      <p className="bold">Google Analytics</p>
      <p>
        VISIONX.DEV nutzt Google Analytics, ein Webanalysedienst der Google Inc.
        (
        <a
          href="https://www.google.com/intl/de/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.google.de
        </a>
        ;&nbsp;1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; im
        Folgenden "Google"). In diesem Zusammenhang werden pseudonymisierte
        Nutzungsprofile erstellt und Cookies (siehe unter Ziff. 4) verwendet.
        Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser
        Website wie
      </p>
      <p>- Browser-Typ/-Version,</p>
      <p>- verwendetes Betriebssystem,</p>
      <p>- Referrer-URL (die zuvor besuchte Seite),</p>
      <p>- Hostname des zugreifenden Rechners (IP-Adresse),</p>
      <p>- Uhrzeit der Serveranfrage,</p>
      <p>
        werden an einen Server von Google in den USA übertragen und dort
        gespeichert. Die Informationen werden verwendet, um die Nutzung der
        Website auszuwerten, um Reports über die Websiteaktivitäten
        zusammenzustellen und gegebenenfalls um weitere mit der Websitenutzung
        und der Internetnutzung verbundene Dienstleistungen zu Zwecken der
        Marktforschung und bedarfsgerechten Gestaltung dieser Internetseiten zu
        erbringen. Auch werden diese Informationen gegebenenfalls an Dritte
        übertragen, sofern dies gesetzlich vorgeschrieben ist oder soweit Dritte
        diese Daten im Auftrag verarbeiten. Es wird in keinem Fall Ihre
        IP-Adresse mit anderen Daten von Google zusammengeführt. Die IP-Adressen
        werden anonymisiert, so dass eine Zuordnung nicht möglich ist
        (IP-Masking).
      </p>
      <p>
        Sie können die Installation der Cookies durch eine entsprechende
        Einstellung der Browser-Software verhindern. VISIONX.DEV weist jedoch
        darauf hin, dass in diesem Fall gegebenenfalls nicht sämtliche
        Funktionen der Websiten und Web-Applikationen vollumfänglich genutzt
        werden können.
      </p>
      <p>
        Die Nutzung von Google Analytics erfolgt im Interesse der Optimierung
        und bedarfsgerechten Gestaltung der Internetseiten von VISION.DEV. Dies
        stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f
        DS-GVO dar.
      </p>
      <p>
        Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten
        und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer
        IP-Adresse) sowie die Verarbeitung dieser Daten durch Google verhindern,
        indem Sie ein Browser-Add-On herunterladen und installieren (
        <a
          href="https://tools.google.com/dlpage/gaoptout?hl=de"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://tools.google.com/dlpage/gaoptout?hl=de
        </a>
        ).
      </p>
      <p>
        Weitere Informationen zum Datenschutz im Zusammenhang mit Google
        Analytics finden Sie etwa in der Google Analytics-Hilfe (
        <a
          href="https://support.google.com/analytics/answer/6004245?hl=de"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://support.google.com/analytics/answer/6004245?hl=de
        </a>
        ).
      </p>
      <h2>Ihre Rechte als betroffene Person</h2>
      <p className="bold">Recht auf Bestätigung</p>
      <p>
        Sie haben das Recht, von VISIONX.DEV eine Bestätigung darüber zu
        verlangen, ob sie betreffende personenbezogene Daten verarbeitet werden.
      </p>
      <p className="bold">Recht auf Auskunft Art. 15 DS-GVO</p>
      <p>
        Sie haben das Recht, jederzeit von VISIONX.DEV unentgeltliche Auskunft
        über die zu Ihrer Person gespeicherten personenbezogenen Daten sowie
        eine Kopie dieser Daten zu erhalten.
      </p>
      <p className="bold">Recht auf Berichtigung Art. 16 DS-GVO</p>
      <p>
        Sie haben das Recht, die Berichtigung sie betreffender unrichtiger
        personenbezogener Daten zu verlangen. Ferner steht der betroffenen
        Person das Recht zu, unter Berücksichtigung der Zwecke der Verarbeitung,
        die Vervollständigung unvollständiger personenbezogener Daten zu
        verlangen.
      </p>
      <p className="bold">Recht auf Löschung Art. 17 DS-GVO</p>
      <p>
        Sie haben das Recht, von mir zu verlangen, dass die Sie betreffenden
        personenbezogenen Daten unverzüglich gelöscht werden, sofern einer der
        gesetzlich vorgesehenen Gründe zutrifft und soweit die Verarbeitung
        nicht erforderlich ist.
      </p>
      <p className="bold">Einschränkung der Verarbeitung Art. 18 DS-GVO</p>
      <p>
        Sie haben das Recht, von VISIONX.DEV die Einschränkung der Verarbeitung
        zu verlangen, wenn eine der gesetzlichen Voraussetzungen gegeben ist.
      </p>
      <p className="bold">Datenübertragbarkeit Art. 20 DS-GVO</p>
      <p>
        Sie haben das Recht, die Sie betreffenden personenbezogenen Daten,
        welche VISIONX.DEV durch Sie bereitgestellt wurden, in einem
        strukturierten, gängigen und maschinenlesbaren Format zu erhalten. Sie
        haben außerdem das Recht, diese Daten einem anderen Verantwortlichen
        ohne Behinderung durch VISIONX.DEV, zu übermitteln, sofern die
        Verarbeitung auf der Einwilligung gemäß Art. 6 Abs. 1 lit. a DS-GVO oder
        Art. 9 Abs. 2 lit. a DS-GVO oder auf einem Vertrag gemäß Art. 6 Abs. 1
        lit. b DS-GVO beruht und die Verarbeitung mithilfe automatisierter
        Verfahren erfolgt.
      </p>
      <p>
        Ferner haben Sie bei der Ausübung ihres Rechts auf Datenübertragbarkeit
        gemäß Art. 20 Abs. 1 DS-GVO das Recht, zu erwirken, dass die
        personenbezogenen Daten direkt von einem Verantwortlichen an einen
        anderen Verantwortlichen übermittelt werden, soweit dies technisch
        machbar ist und sofern hiervon nicht die Rechte und Freiheiten anderer
        Personen beeinträchtigt werden.
      </p>
      <p className="bold">Widerspruch Art. 21 DS-GVO</p>
      <p>
        Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen
        Situation ergeben, jederzeit gegen die Verarbeitung sie betreffender
        personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 lit. e
        (Datenverarbeitung im öffentlichen Interesse) oder f (Datenverarbeitung
        auf Grundlage einer Interessenabwägung) DS-GVO erfolgt, Widerspruch
        einzulegen.
      </p>
      <p>
        Dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling im
        Sinne von Art. 4 Nr. 4 DS-GVO.
      </p>
      <p>
        Legen Sie Widerspruch ein, wird VISIONX.DEV Ihre personenbezogenen Daten
        nicht mehr verarbeiten, es sei denn, VISIONX.DEV kann zwingende
        berechtigte Gründe für die Verarbeitung nachweisen, die Ihre Interessen,
        Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der
        Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
      </p>
      <p>
        Zudem haben Sie das Recht, aus Gründen, die sich aus ihrer besonderen
        Situation ergeben, gegen die sie betreffende Verarbeitung
        personenbezogener Daten, die bei VISIONX.DEV zu wissenschaftlichen oder
        historischen Forschungszwecken oder zu statistischen Zwecken gemäß Art.
        89 Abs. 1 DS-GVO erfolgen, Widerspruch einzulegen, es sei denn, eine
        solche Verarbeitung ist zur Erfüllung einer im öffentlichen Interesse
        liegenden Aufgabe erforderlich.
      </p>
      <p>
        Ihnen steht es frei, im Zusammenhang mit der Nutzung von Diensten der
        Informationsgesellschaft, ungeachtet der Richtlinie 2002/58/EG, ihr
        Widerspruchsrecht mittels automatisierter Verfahren auszuüben, bei denen
        technische Spezifikationen verwendet werden.
      </p>
      <p className="bold">Widerruf einer datenschutzrechtlichen Einwilligung</p>
      <p>
        Sie haben das Recht, eine Einwilligung zur Verarbeitung
        personenbezogener Daten jederzeit mit Wirkung für die Zukunft zu
        widerrufen.
      </p>
      <p className="bold">Beschwerde bei einer Aufsichtsbehörde</p>
      <p>
        Sie haben das Recht, sich einer für Datenschutz zuständigen
        Aufsichtsbehörde über die Verarbeitung personenbezogener Daten im Rahmen
        der Nutzung von VISIONX.DEV zu beschweren.
      </p>
      <h2>
        Routinemäßige Speicherung, Löschung und Sperrung von personenbezogenen
        Daten.
      </h2>
      <p>
        VISIONX.DEV verarbeitet und speichert Ihre personenbezogenen Daten nur
        für den Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich
        ist oder sofern dies durch den Rechtsvorschriften, welche VISIONX.DEV
        unterliegt, vorgesehen wurde.
      </p>
      <p>
        Entfällt der Speicherungszweck oder läuft eine vorgeschriebene
        Speicherfrist ab, werden die personenbezogenen Daten routinemäßig und
        entsprechend den gesetzlichen Vorschriften gesperrt oder gelöscht.
      </p>
      <h2>Dauer der Speicherung von personenbezogenen Daten</h2>
      <p>
        Das Kriterium für die Dauer der Speicherung von personenbezogenen Daten
        ist die jeweilige gesetzliche Aufbewahrungsfrist. Nach Ablauf der Frist
        werden die entsprechenden Daten routinemäßig gelöscht, sofern sie nicht
        mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind.
      </p>
      <h2>Aktualität und Änderung der Datenschutzerklärung</h2>
      <p>
        Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai
        2023.
      </p>
      <p>
        Durch die Weiterentwicklung der Internetseiten von VISIONX.DEV und
        dessen Angebote oder aufgrund geänderter gesetzlicher beziehungsweise
        behördlicher Vorgaben kann es notwendig werden, diese
        Datenschutzerklärung zu ändern. Die jeweils aktuelle
        Datenschutzerklärung kann jederzeit auf der Website unter
      </p>
      <p>
        <Link href="/datenschutz">https://visionx.dev/datenschutz</Link>
      </p>
      <p>von Ihnen abgerufen und ausgedruckt werden.</p>
    </TermsMain>
  );
};

export default PrivacyStatment;
