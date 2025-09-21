export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Wulf</h3>
            <p className="text-muted-foreground text-sm">
              Simplifying invoicing and debt collection for businesses worldwide.
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Contact Info</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Pyörökiventie 12 B</p>
              <p>00830 Helsinki</p>
              <p>Email: aleksi@sharplegal.fi</p>
              <p>Phone: +358 50 5330600</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#hero" className="block text-muted-foreground hover:text-primary transition-colors">
                Hero
              </a>
              <a href="#team" className="block text-muted-foreground hover:text-primary transition-colors">
                Team
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Wulf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
