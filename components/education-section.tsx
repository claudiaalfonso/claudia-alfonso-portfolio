const education = [
  {
    institution: "Universitat Ramon Llull (Barcelona, Spain)",
    degree: "Double Master, Marketing and Sales",
    years: "2019 - 2020",
  },
  {
    institution: "University College Cork\n(Cork, Ireland)",
    degree: "Erasmus, Marketing",
    years: "2017 - 2018",
  },
  {
    institution: "University of Barcelona (Barcelona, Spain)",
    degree: "Communication and Cultural Industry",
    years: "2015 - 2019",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-16 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
          Education
        </p>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="md:w-48 shrink-0">
                <p className="text-sm text-foreground/80 whitespace-pre-line">{edu.institution}</p>
                <p className="text-xs text-muted-foreground">{edu.years}</p>
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">{edu.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
