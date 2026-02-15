import React, { useState, useEffect } from 'react';

const dentalQuestions = {
  'Oral Medicine': [
    {
      question: "What is the most common cause of oral candidiasis in immunocompetent adults?",
      options: ["Antibiotic therapy", "Diabetes mellitus", "Denture wearing", "Smoking"],
      correct: 0
    },
    {
      question: "Which medication is most commonly associated with drug-induced gingival overgrowth?",
      options: ["Metformin", "Cyclosporine", "Aspirin", "Warfarin"],
      correct: 1
    },
    {
      question: "What is the gold standard diagnostic test for Sjögren's syndrome?",
      options: ["Salivary flow rate", "Anti-SSA/SSB antibodies", "Minor salivary gland biopsy", "Schirmer test"],
      correct: 2
    },
    {
      question: "Which oral mucosal lesion has the highest malignant transformation rate?",
      options: ["Leukoplakia", "Erythroplakia", "Lichen planus", "Nicotinic stomatitis"],
      correct: 1
    },
    {
      question: "What is the first-line treatment for oral lichen planus?",
      options: ["Systemic corticosteroids", "Topical corticosteroids", "Cyclosporine rinse", "Tacrolimus ointment"],
      correct: 1
    },
    {
      question: "Which condition is characterized by 'wickham striae'?",
      options: ["Pemphigus vulgaris", "Oral lichen planus", "Erythema multiforme", "Geographic tongue"],
      correct: 1
    },
    {
      question: "What is the most common oral manifestation of Crohn's disease?",
      options: ["Cobblestone mucosa", "Angular cheilitis", "Aphthous ulcers", "Gingival hyperplasia"],
      correct: 0
    },
    {
      question: "Which virus is most commonly associated with oral hairy leukoplakia?",
      options: ["HSV-1", "HPV", "EBV", "CMV"],
      correct: 2
    },
    {
      question: "What is the pathognomonic sign of pemphigus vulgaris?",
      options: ["Wickham striae", "Nikolsky sign", "Koplik spots", "Fordyce granules"],
      correct: 1
    },
    {
      question: "Which condition presents with 'strawberry tongue'?",
      options: ["Kawasaki disease", "Geographic tongue", "Pernicious anemia", "Scarlet fever"],
      correct: 3
    }
  ],
  'Periodontology': [
    {
      question: "What is the most prevalent periodontal pathogen in aggressive periodontitis?",
      options: ["Porphyromonas gingivalis", "Aggregatibacter actinomycetemcomitans", "Tannerella forsythia", "Prevotella intermedia"],
      correct: 1
    },
    {
      question: "At what probing depth does a pocket become classified as 'deep'?",
      options: ["≥3mm", "≥4mm", "≥5mm", "≥6mm"],
      correct: 3
    },
    {
      question: "Which attachment gain technique shows the best long-term outcomes?",
      options: ["Open flap debridement", "Guided tissue regeneration", "Bone grafting", "Enamel matrix derivative"],
      correct: 1
    },
    {
      question: "What is the primary etiological factor in periodontal disease?",
      options: ["Genetics", "Bacterial biofilm", "Smoking", "Diabetes"],
      correct: 1
    },
    {
      question: "Which measurement indicates clinical attachment loss?",
      options: ["Probing depth alone", "Gingival recession alone", "Probing depth + recession", "Bleeding on probing"],
      correct: 2
    },
    {
      question: "What is the recommended maintenance interval for periodontitis patients?",
      options: ["Every 6 months", "Every 3-4 months", "Every 12 months", "Every month"],
      correct: 1
    },
    {
      question: "Which index is used to measure gingival inflammation?",
      options: ["Plaque Index", "Gingival Index", "DMFT Index", "OHI-S"],
      correct: 1
    },
    {
      question: "What percentage of bone loss indicates severe periodontitis?",
      options: [">15%", ">25%", ">33%", ">50%"],
      correct: 2
    },
    {
      question: "Which antibiotic is most effective against A. actinomycetemcomitans?",
      options: ["Metronidazole", "Amoxicillin", "Doxycycline", "Azithromycin"],
      correct: 1
    },
    {
      question: "What is the hallmark feature of necrotizing periodontal disease?",
      options: ["Rapid bone loss", "Papillary necrosis", "Tooth mobility", "Deep pockets"],
      correct: 1
    }
  ],
  'Endodontics': [
    {
      question: "What is the most common cause of endodontic treatment failure?",
      options: ["Missed canals", "Inadequate obturation", "Vertical root fracture", "Procedural errors"],
      correct: 1
    },
    {
      question: "Which irrigant is most effective at dissolving organic tissue?",
      options: ["EDTA", "Sodium hypochlorite", "Chlorhexidine", "Hydrogen peroxide"],
      correct: 1
    },
    {
      question: "What is the working length typically measured from?",
      options: ["Radiographic apex", "0.5mm short of apex", "1mm short of apex", "Anatomic apex"],
      correct: 2
    },
    {
      question: "Which material provides the best apical seal?",
      options: ["Gutta-percha alone", "Gutta-percha with sealer", "MTA", "Resin-based sealer"],
      correct: 2
    },
    {
      question: "What percentage of maxillary first molars have a second MB canal?",
      options: ["30-40%", "50-60%", "70-80%", "90-95%"],
      correct: 1
    },
    {
      question: "Which test is most reliable for determining pulp vitality?",
      options: ["Cold test", "Electric pulp test", "Heat test", "Percussion test"],
      correct: 0
    },
    {
      question: "What is the recommended NaOCl concentration for irrigation?",
      options: ["0.5-1%", "2.5-5.25%", "10-12%", "15-20%"],
      correct: 1
    },
    {
      question: "Which condition indicates irreversible pulpitis?",
      options: ["Sharp pain to cold", "Lingering pain to thermal stimuli", "Sensitivity to percussion", "No response to vitality tests"],
      correct: 1
    },
    {
      question: "What is the primary goal of obturation?",
      options: ["Kill remaining bacteria", "3D hermetic seal", "Strengthen the tooth", "Prevent reinfection only"],
      correct: 1
    },
    {
      question: "Which file system uses a crown-down technique?",
      options: ["K-files", "H-files", "ProTaper", "Hedstrom"],
      correct: 2
    }
  ],
  'Prosthodontics': [
    {
      question: "What is the ideal vertical dimension of occlusion determined by?",
      options: ["Arbitrary measurement", "Freeway space of 2-4mm", "Maximum intercuspation", "Patient preference"],
      correct: 1
    },
    {
      question: "Which impression material provides the highest accuracy?",
      options: ["Alginate", "Polyether", "Polyvinyl siloxane", "Polysulfide"],
      correct: 2
    },
    {
      question: "What is the recommended minimum ferrule for crown preparation?",
      options: ["0.5mm", "1mm", "2mm", "3mm"],
      correct: 2
    },
    {
      question: "Which articulator type allows programming of condylar guidance?",
      options: ["Hinge", "Semi-adjustable", "Fully adjustable", "Non-adjustable"],
      correct: 2
    },
    {
      question: "What is the ideal taper for a crown preparation?",
      options: ["2-5 degrees", "6-10 degrees", "12-15 degrees", "20-25 degrees"],
      correct: 1
    },
    {
      question: "Which type of retention is most reliable for complete dentures?",
      options: ["Physical", "Mechanical", "Atmospheric pressure", "Adhesion"],
      correct: 2
    },
    {
      question: "What is the recommended occlusal clearance for a full-coverage crown?",
      options: ["0.5mm", "1.0mm", "1.5-2.0mm", "2.5-3.0mm"],
      correct: 2
    },
    {
      question: "Which material has the highest flexural strength for bridges?",
      options: ["Gold alloy", "Zirconia", "Lithium disilicate", "Porcelain"],
      correct: 1
    },
    {
      question: "What is the most common cause of porcelain fracture?",
      options: ["Inadequate support", "Poor firing", "Thin porcelain", "Traumatic occlusion"],
      correct: 0
    },
    {
      question: "Which denture tooth material has the best wear resistance?",
      options: ["Acrylic resin", "Composite resin", "Porcelain", "Cross-linked acrylic"],
      correct: 2
    }
  ],
  'Oral Surgery': [
    {
      question: "What is the most common complication after third molar extraction?",
      options: ["Dry socket", "Nerve injury", "Infection", "Hemorrhage"],
      correct: 0
    },
    {
      question: "Which nerve is most at risk during mandibular third molar extraction?",
      options: ["Mental nerve", "Inferior alveolar nerve", "Lingual nerve", "Buccal nerve"],
      correct: 1
    },
    {
      question: "What is the recommended antibiotic prophylaxis for dental implant surgery?",
      options: ["Not routinely indicated", "Amoxicillin 2g 1 hour before", "Clindamycin 600mg", "Metronidazole 500mg"],
      correct: 1
    },
    {
      question: "Which suture technique provides the best wound closure?",
      options: ["Interrupted", "Continuous", "Mattress", "Subcuticular"],
      correct: 2
    },
    {
      question: "What is the minimum bone width required for implant placement?",
      options: ["3mm", "5mm", "6mm", "8mm"],
      correct: 2
    },
    {
      question: "Which imaging modality is gold standard for implant planning?",
      options: ["Panoramic radiograph", "Periapical radiograph", "CBCT", "CT scan"],
      correct: 2
    },
    {
      question: "What is the primary success factor for dental implants?",
      options: ["Primary stability", "Osseointegration", "Implant design", "Bone quality"],
      correct: 1
    },
    {
      question: "Which condition contraindicates immediate implant placement?",
      options: ["Thin biotype", "Acute infection", "Lack of keratinized tissue", "Bone dehiscence"],
      correct: 1
    },
    {
      question: "What is the recommended healing time for mandibular implants?",
      options: ["6 weeks", "3 months", "6 months", "9 months"],
      correct: 1
    },
    {
      question: "Which bone graft material has the best osteogenic potential?",
      options: ["Autogenous", "Allograft", "Xenograft", "Alloplast"],
      correct: 0
    }
  ],
  'Orthodontics': [
    {
      question: "What is the normal overjet measurement?",
      options: ["0-2mm", "2-4mm", "4-6mm", "6-8mm"],
      correct: 1
    },
    {
      question: "Which Angle classification describes a mesial relationship of the mandible?",
      options: ["Class I", "Class II Division 1", "Class II Division 2", "Class III"],
      correct: 3
    },
    {
      question: "What is the ideal age for interceptive orthodontic treatment?",
      options: ["4-6 years", "7-9 years", "10-12 years", "13-15 years"],
      correct: 1
    },
    {
      question: "Which cephalometric angle indicates skeletal Class II?",
      options: ["SNA > 82°", "SNB < 78°", "ANB > 4°", "All of the above"],
      correct: 2
    },
    {
      question: "What force level is optimal for orthodontic tooth movement?",
      options: ["10-20g", "50-100g", "150-200g", "300-400g"],
      correct: 1
    },
    {
      question: "Which retention protocol shows the best long-term stability?",
      options: ["Removable retainer 1 year", "Fixed lingual retainer indefinitely", "Hawley retainer part-time", "No retention needed"],
      correct: 1
    },
    {
      question: "What percentage of extraction cases involve first premolars?",
      options: ["30-40%", "50-60%", "70-80%", "90-95%"],
      correct: 2
    },
    {
      question: "Which growth pattern is most favorable for orthodontic treatment?",
      options: ["Horizontal", "Average", "Vertical", "No difference"],
      correct: 0
    },
    {
      question: "What is the recommended force for rapid palatal expansion?",
      options: ["50-100g", "200-500g", "1-2 kg", "3-5 kg"],
      correct: 3
    },
    {
      question: "Which space maintainer is best for bilateral premature molar loss?",
      options: ["Band and loop", "Lingual arch", "Distal shoe", "Nance appliance"],
      correct: 1
    }
  ],
  'Oral Pathology': [
    {
      question: "What is the most common odontogenic cyst?",
      options: ["Dentigerous cyst", "Radicular cyst", "Odontogenic keratocyst", "Residual cyst"],
      correct: 1
    },
    {
      question: "Which lesion is characterized by 'driven snow' appearance?",
      options: ["Ameloblastoma", "Odontoma", "Cementoblastoma", "Ossifying fibroma"],
      correct: 1
    },
    {
      question: "What is the most common location for oral squamous cell carcinoma?",
      options: ["Tongue", "Floor of mouth", "Soft palate", "Buccal mucosa"],
      correct: 0
    },
    {
      question: "Which salivary gland tumor is most common?",
      options: ["Warthin tumor", "Mucoepidermoid carcinoma", "Pleomorphic adenoma", "Adenoid cystic carcinoma"],
      correct: 2
    },
    {
      question: "What is the definitive diagnostic test for oral lesions?",
      options: ["Clinical examination", "Radiography", "Biopsy", "Blood tests"],
      correct: 2
    },
    {
      question: "Which lesion has a 'soap bubble' radiographic appearance?",
      options: ["Ameloblastoma", "Central giant cell granuloma", "Fibrous dysplasia", "Osteosarcoma"],
      correct: 0
    },
    {
      question: "What percentage of ameloblastomas are multicystic?",
      options: ["30-40%", "50-60%", "70-80%", "90-95%"],
      correct: 3
    },
    {
      question: "Which condition presents with 'ground glass' radiographic appearance?",
      options: ["Paget's disease", "Fibrous dysplasia", "Cherubism", "Osteogenesis imperfecta"],
      correct: 1
    },
    {
      question: "What is the most aggressive odontogenic tumor?",
      options: ["Ameloblastoma", "Ameloblastic carcinoma", "Odontogenic myxoma", "Calcifying epithelial odontogenic tumor"],
      correct: 1
    },
    {
      question: "Which HPV type is most associated with oropharyngeal cancer?",
      options: ["HPV 6", "HPV 11", "HPV 16", "HPV 18"],
      correct: 2
    }
  ],
  'Pediatric Dentistry': [
    {
      question: "At what age should the first dental visit occur?",
      options: ["6 months", "First tooth eruption or 12 months", "18 months", "2 years"],
      correct: 1
    },
    {
      question: "What is the recommended fluoride concentration in toothpaste for children under 3?",
      options: ["No fluoride", "500 ppm", "1000 ppm", "1450 ppm"],
      correct: 2
    },
    {
      question: "Which primary tooth typically erupts first?",
      options: ["Central incisor", "Lateral incisor", "First molar", "Canine"],
      correct: 0
    },
    {
      question: "What is the Hall Technique?",
      options: ["Caries removal without anesthesia", "Preformed crown without preparation", "Minimally invasive caries removal", "Silver diamine fluoride application"],
      correct: 1
    },
    {
      question: "At what age is the complete primary dentition typically present?",
      options: ["18 months", "24 months", "30 months", "36 months"],
      correct: 2
    },
    {
      question: "Which behavior management technique is most evidence-based?",
      options: ["Tell-Show-Do", "Sedation", "Hand over mouth", "Restraint"],
      correct: 0
    },
    {
      question: "What percentage of SDF arrests active caries in primary teeth?",
      options: ["30-40%", "50-60%", "70-80%", "90-95%"],
      correct: 2
    },
    {
      question: "Which space maintainer is used for premature primary molar loss?",
      options: ["Crown and loop", "Band and loop", "Distal shoe", "Lingual arch"],
      correct: 1
    },
    {
      question: "What is the recommended fluoride varnish application frequency?",
      options: ["Once yearly", "Twice yearly", "3-4 times yearly", "Monthly"],
      correct: 2
    },
    {
      question: "Which pulp therapy is indicated for reversible pulpitis in primary teeth?",
      options: ["Pulpotomy", "Pulpectomy", "Indirect pulp cap", "Direct pulp cap"],
      correct: 2
    }
  ]
};

function App() {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const specialties = Object.keys(dentalQuestions);

  const handleSpecialtySelect = (specialty) => {
    setSelectedSpecialty(specialty);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setAnsweredQuestions([]);
  };

  const handleAnswerClick = (selectedOption) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(selectedOption);
    const isCorrect = selectedOption === dentalQuestions[selectedSpecialty][currentQuestion].correct;
    
    setAnsweredQuestions([...answeredQuestions, {
      question: dentalQuestions[selectedSpecialty][currentQuestion].question,
      selectedOption,
      correctOption: dentalQuestions[selectedSpecialty][currentQuestion].correct,
      isCorrect
    }]);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < dentalQuestions[selectedSpecialty].length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setSelectedSpecialty(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setAnsweredQuestions([]);
  };

  const getButtonStyle = (index) => {
    if (selectedAnswer === null) {
      return {
        backgroundColor: '#4a5568',
        cursor: 'pointer'
      };
    }
    if (index === dentalQuestions[selectedSpecialty][currentQuestion].correct) {
      return {
        backgroundColor: '#48bb78',
        cursor: 'default'
      };
    }
    if (index === selectedAnswer) {
      return {
        backgroundColor: '#f56565',
        cursor: 'default'
      };
    }
    return {
      backgroundColor: '#4a5568',
      cursor: 'default',
      opacity: 0.6
    };
  };

  if (!selectedSpecialty) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '40px',
          maxWidth: '800px',
          width: '100%',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '10px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            HMAC Dental Quiz
          </h1>
          <p style={{
            textAlign: 'center',
            color: '#718096',
            marginBottom: '40px',
            fontSize: '1.1rem'
          }}>
            Select a specialty to test your knowledge
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '15px'
          }}>
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => handleSpecialtySelect(specialty)}
                style={{
                  padding: '20px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'white',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
                }}
              >
                {specialty}
                <div style={{ fontSize: '0.8rem', marginTop: '5px', opacity: 0.9 }}>
                  {dentalQuestions[specialty].length} questions
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (showScore) {
    const percentage = Math.round((score / dentalQuestions[selectedSpecialty].length) * 100);
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '40px',
          maxWidth: '800px',
          width: '100%',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#2d3748'
          }}>
            Quiz Complete!
          </h2>
          <div style={{
            textAlign: 'center',
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            background: percentage >= 70 ? 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)' : 
                        percentage >= 50 ? 'linear-gradient(135deg, #ed8936 0%, #dd6b20 100%)' :
                        'linear-gradient(135deg, #f56565 0%, #e53e3e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {percentage}%
          </div>
          <p style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            color: '#4a5568',
            marginBottom: '30px'
          }}>
            You scored {score} out of {dentalQuestions[selectedSpecialty].length}
          </p>
          
          <div style={{
            marginBottom: '30px',
            maxHeight: '400px',
            overflowY: 'auto',
            padding: '20px',
            backgroundColor: '#f7fafc',
            borderRadius: '12px'
          }}>
            <h3 style={{ marginBottom: '15px', color: '#2d3748' }}>Review Your Answers:</h3>
            {answeredQuestions.map((item, index) => (
              <div key={index} style={{
                marginBottom: '15px',
                padding: '15px',
                backgroundColor: 'white',
                borderRadius: '8px',
                borderLeft: `4px solid ${item.isCorrect ? '#48bb78' : '#f56565'}`
              }}>
                <p style={{ fontWeight: '600', marginBottom: '8px', color: '#2d3748' }}>
                  Q{index + 1}: {item.question}
                </p>
                <p style={{ color: item.isCorrect ? '#38a169' : '#e53e3e', fontSize: '0.9rem' }}>
                  Your answer: {dentalQuestions[selectedSpecialty][index].options[item.selectedOption]}
                  {!item.isCorrect && (
                    <span style={{ display: 'block', color: '#38a169', marginTop: '5px' }}>
                      Correct answer: {dentalQuestions[selectedSpecialty][index].options[item.correctOption]}
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <button
              onClick={restartQuiz}
              style={{
                padding: '15px 30px',
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'white',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              Back to Specialties
            </button>
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
                setShowScore(false);
                setSelectedAnswer(null);
                setAnsweredQuestions([]);
              }}
              style={{
                padding: '15px 30px',
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#667eea',
                background: 'white',
                border: '2px solid #667eea',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              Retry {selectedSpecialty}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '40px',
        maxWidth: '800px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#2d3748'
          }}>
            {selectedSpecialty}
          </h2>
          <button
            onClick={restartQuiz}
            style={{
              padding: '8px 16px',
              fontSize: '0.9rem',
              color: '#667eea',
              background: 'white',
              border: '2px solid #667eea',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Change Specialty
          </button>
        </div>

        <div style={{
          marginBottom: '20px',
          padding: '10px',
          backgroundColor: '#f7fafc',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span style={{ color: '#4a5568', fontWeight: '600' }}>
            Question {currentQuestion + 1} of {dentalQuestions[selectedSpecialty].length}
          </span>
          <span style={{ color: '#667eea', fontWeight: '600' }}>
            Score: {score}/{dentalQuestions[selectedSpecialty].length}
          </span>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{
            fontSize: '1.3rem',
            lineHeight: '1.6',
            color: '#2d3748',
            marginBottom: '25px'
          }}>
            {dentalQuestions[selectedSpecialty][currentQuestion].question}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {dentalQuestions[selectedSpecialty][currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                style={{
                  padding: '16px 20px',
                  fontSize: '1rem',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  textAlign: 'left',
                  transition: 'all 0.3s',
                  ...getButtonStyle(index)
                }}
                disabled={selectedAnswer !== null}
              >
                <span style={{ fontWeight: '600', marginRight: '10px' }}>
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            ))}
          </div>
        </div>

        {selectedAnswer !== null && (
          <button
            onClick={handleNextQuestion}
            style={{
              width: '100%',
              padding: '15px',
              fontSize: '1.1rem',
              fontWeight: '600',
              color: 'white',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            {currentQuestion + 1 === dentalQuestions[selectedSpecialty].length ? 'See Results' : 'Next Question'}
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
